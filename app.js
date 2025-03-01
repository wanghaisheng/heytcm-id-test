document.addEventListener('DOMContentLoaded', function() {
  // Game state
  let currentLevel = 1;
  let totalScore = 0;
  let playerResults = [];
  let collectedItems = [];

  // DOM Elements
  const startScreen = document.getElementById('start-screen');
  const gameScreen = document.getElementById('game-screen');
  const resultScreen = document.getElementById('result-screen');
  const finalReportScreen = document.getElementById('final-report-screen');
  const loadingScreen = document.getElementById('loading-screen');

  const startButton = document.getElementById('start-button');
  const continueButton = document.getElementById('continue-button');
  const restartButton = document.getElementById('restart-button');
  const copyIdButton = document.getElementById('copy-id-button');
  const collectionButton = document.getElementById('collection-button');
  const closeCollectionButton = document.getElementById('close-collection');

  const progressBar = document.getElementById('progress');
  const currentLevelSpan = document.getElementById('current-level');
  const levelTitle = document.getElementById('level-title');
  const levelStory = document.getElementById('level-story');
  const question = document.getElementById('question');
  const options = document.getElementById('options');

  const resultIcon = document.getElementById('result-icon');
  const resultTitle = document.getElementById('result-title');
  const resultDescription = document.getElementById('result-description');

  const finalScore = document.getElementById('final-score');
  const analysisContent = document.getElementById('analysis-content');
  const rewardsList = document.getElementById('rewards-list');
  const identityCard = document.getElementById('identity-card');
  const identityId = document.getElementById('identity-id');
  const collectionModal = document.getElementById('collection-modal');
  const collectionItems = document.getElementById('collection-items');

  // Initialize the game
  startButton.addEventListener('click', startGame);
  continueButton.addEventListener('click', goToNextLevel);
  restartButton.addEventListener('click', restartGame);
  copyIdButton.addEventListener('click', copyIdentityId);
  collectionButton.addEventListener('click', toggleCollectionModal);
  closeCollectionButton.addEventListener('click', toggleCollectionModal);

  // Start the game
  function startGame() {
    switchScreen(startScreen, gameScreen);
    loadLevel(currentLevel);
  }

  // Load a level
  function loadLevel(level) {
    const levelData = gameData.levels.find(l => l.id === level);
    if (!levelData) return;

    // Update progress
    progressBar.style.width = `${(level / gameData.levels.length) * 100}%`;
    currentLevelSpan.textContent = level;

    // Update content
    levelTitle.textContent = levelData.title;
    levelStory.textContent = levelData.story;
    question.textContent = levelData.question;

    // Clear and rebuild options
    options.innerHTML = '';
    levelData.options.forEach(option => {
      const optionButton = document.createElement('button');
      optionButton.className = 'option';
      optionButton.setAttribute('data-value', option.value);
      optionButton.setAttribute('data-score', option.score);
      optionButton.textContent = option.text;
      optionButton.addEventListener('click', selectOption);
      options.appendChild(optionButton);
    });
  }

  // Handle option selection
  function selectOption(e) {
    const selectedValue = e.target.getAttribute('data-value');
    const score = parseInt(e.target.getAttribute('data-score'));
    const levelData = gameData.levels.find(l => l.id === currentLevel);

    // Add to player results
    const result = levelData.results[selectedValue];
    playerResults.push({
      level: currentLevel,
      choice: selectedValue,
      score: score,
      result: result
    });

    // Add to collection if it's option A
    if (selectedValue === 'A') {
      collectedItems.push({
        id: `item-${currentLevel}`,
        name: result.description,
        icon: result.icon,
        level: currentLevel
      });

      // Show toast notification
      showToast(result.icon, `获得了：${result.description}`);
    }

    // Update total score
    totalScore += score;

    // Mark selected option
    document.querySelectorAll('.option').forEach(opt => {
      opt.classList.remove('selected');
      opt.removeEventListener('click', selectOption);
    });
    e.target.classList.add('selected');

    // Show result after a short delay
    setTimeout(() => {
      resultIcon.textContent = result.icon;
      resultTitle.textContent = '你获得了：';
      resultDescription.textContent = result.description;

      switchScreen(gameScreen, resultScreen);
    }, 500);
  }

  // Go to the next level or end the game
  function goToNextLevel() {
    currentLevel++;

    if (currentLevel <= gameData.levels.length) {
      switchScreen(resultScreen, gameScreen);
      loadLevel(currentLevel);
    } else {
      // Game completed, show final report
      showFinalReport();
    }
  }

  // Show the final report
  async function showFinalReport() {
    // Show loading screen while we "process" the results
    loadingScreen.style.display = 'flex';

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Update final score
    finalScore.textContent = totalScore;

    // Generate analysis
    generateAnalysis();

    // Generate rewards list
    generateRewardsList();

    // Check if player qualifies for identity card
    if (totalScore >= 1200) {
      // Fetch identity ID (simulated)
      await fetchIdentityId();
      identityCard.classList.remove('hidden');
    }

    // Hide loading screen and show final report
    loadingScreen.style.display = 'none';
    switchScreen(resultScreen, finalReportScreen);
  }

  // Generate analysis based on player choices
  function generateAnalysis() {
    let trendTowardModern = 0;
    let trendTowardTraditional = 0;

    playerResults.forEach(result => {
      if (result.choice === 'A') trendTowardModern++;
      if (result.choice === 'C') trendTowardTraditional++;
    });

    let analysisHTML = '';

    // Score analysis
    if (totalScore >= 1400) {
      analysisHTML += `<p>你的得分非常高 (${totalScore} 分)！你对中医和现代科技的融合持有非常开放的态度。</p>`;
    } else if (totalScore >= 1200) {
      analysisHTML += `<p>你的得分很高 (${totalScore} 分)。你对创新的中医实践持有积极的态度。</p>`;
    } else if (totalScore >= 1000) {
      analysisHTML += `<p>你的得分不错 (${totalScore} 分)。你对中医现代化有一定的接受度。</p>`;
    } else {
      analysisHTML += `<p>你的得分为 ${totalScore} 分。你似乎更倾向于传统的中医实践。</p>`;
    }

    // Trend analysis
    if (trendTowardModern > trendTowardTraditional) {
      analysisHTML += `<p>你的选择倾向于支持中医与现代科技的结合，这表明你是一位拥抱创新的思想者。</p>`;
    } else if (trendTowardModern < trendTowardTraditional) {
      analysisHTML += `<p>你的选择更倾向于传统中医价值观，这表明你重视传统智慧和经验。</p>`;
    } else {
      analysisHTML += `<p>你的选择既有现代也有传统元素，这表明你寻求平衡和兼容的途径。</p>`;
    }

    analysisHTML += `<p>通过这次探索，你已经开始了解中医与现代科技如何结合，为未来的健康管理提供新的可能性。</p>`;

    analysisContent.innerHTML = analysisHTML;
  }

  // Generate rewards list based on player results
  function generateRewardsList() {
    rewardsList.innerHTML = '';

    // Only show the most significant rewards (top 5)
    const topRewards = playerResults
      .filter(result => result.choice === 'A')
      .slice(-5);

    if (topRewards.length === 0) {
      const noRewardsMessage = document.createElement('div');
      noRewardsMessage.textContent = '你没有获得特别的奖励。';
      rewardsList.appendChild(noRewardsMessage);
      return;
    }

    topRewards.forEach(reward => {
      const rewardItem = document.createElement('div');
      rewardItem.className = 'reward-item';

      const rewardIcon = document.createElement('div');
      rewardIcon.className = 'reward-icon';
      rewardIcon.textContent = reward.result.icon;

      const rewardDetails = document.createElement('div');
      rewardDetails.className = 'reward-details';

      const rewardTitle = document.createElement('div');
      rewardTitle.className = 'reward-title';
      rewardTitle.textContent = reward.result.description;

      const rewardDescription = document.createElement('div');
      rewardDescription.className = 'reward-description';
      rewardDescription.textContent = `关卡 ${reward.level} 的奖励`;

      rewardDetails.appendChild(rewardTitle);
      rewardDetails.appendChild(rewardDescription);

      rewardItem.appendChild(rewardIcon);
      rewardItem.appendChild(rewardDetails);

      rewardsList.appendChild(rewardItem);
    });
  }

  // Fetch identity ID (simulated API call)
  async function fetchIdentityId() {
    // In a real app, this would be an API call
    // For demo, we'll generate a random ID
    await new Promise(resolve => setTimeout(resolve, 500));

    const randomId = 'TCM' + Date.now().toString().slice(-6) +
      Math.floor(Math.random() * 1000).toString().padStart(3, '0');

    identityId.textContent = randomId;
  }

  // Copy identity ID to clipboard
  function copyIdentityId() {
    const idText = identityId.textContent;
    navigator.clipboard.writeText(idText).then(() => {
      // Show copy confirmation
      const originalText = copyIdButton.textContent;
      copyIdButton.textContent = '已复制！';

      setTimeout(() => {
        copyIdButton.textContent = originalText;
      }, 2000);
    });
  }

  // Show toast notification
  function showToast(icon, message) {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';

    const toastIcon = document.createElement('div');
    toastIcon.className = 'toast-icon';
    toastIcon.textContent = icon;

    const toastMessage = document.createElement('div');
    toastMessage.className = 'toast-message';
    toastMessage.textContent = message;

    toast.appendChild(toastIcon);
    toast.appendChild(toastMessage);
    toastContainer.appendChild(toast);

    // Remove toast after animation
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

  // Toggle collection modal
  function toggleCollectionModal() {
    collectionModal.classList.toggle('active');

    if (collectionModal.classList.contains('active')) {
      updateCollectionItems();
    }
  }

  // Update collection items display
  function updateCollectionItems() {
    collectionItems.innerHTML = '';

    if (collectedItems.length === 0) {
      const emptyMessage = document.createElement('div');
      emptyMessage.className = 'empty-collection';
      emptyMessage.textContent = '你还没有收集到任何物品';
      collectionItems.appendChild(emptyMessage);
      return;
    }

    collectedItems.forEach(item => {
      const collectionItem = document.createElement('div');
      collectionItem.className = 'collection-item';

      const itemIcon = document.createElement('div');
      itemIcon.className = 'reward-icon';
      itemIcon.textContent = item.icon;

      const itemDetails = document.createElement('div');
      itemDetails.className = 'reward-details';

      const itemTitle = document.createElement('div');
      itemTitle.className = 'reward-title';
      itemTitle.textContent = item.name;

      const itemDescription = document.createElement('div');
      itemDescription.className = 'reward-description';
      itemDescription.textContent = `关卡 ${item.level} 的收集品`;

      itemDetails.appendChild(itemTitle);
      itemDetails.appendChild(itemDescription);

      collectionItem.appendChild(itemIcon);
      collectionItem.appendChild(itemDetails);

      collectionItems.appendChild(collectionItem);
    });
  }

  // Restart the game
  function restartGame() {
    currentLevel = 1;
    totalScore = 0;
    playerResults = [];
    collectedItems = [];

    switchScreen(finalReportScreen, startScreen);

    // Reset identity card
    identityCard.classList.add('hidden');
  }

  // Helper function to switch screens
  function switchScreen(fromScreen, toScreen) {
    fromScreen.classList.remove('active');

    // Small delay for transition effect
    setTimeout(() => {
      toScreen.classList.add('active');
    }, 300);
  }
});
