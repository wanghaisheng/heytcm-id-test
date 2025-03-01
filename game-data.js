const gameData = {
  levels: [
    {
      id: 1,
      title: "第一关：中医与现代化的选择",
      story: "你进入一座古老的书房，看到一本名为《中医的未来》的书。书中提到：\"如何将传统中医与现代科技相结合\"。在书旁，一道传送门等待着你的选择。",
      question: "你如何看待中医的现代化与智能化发展？",
      options: [
        { value: "A", text: "非常支持，我认为中医需要借助现代科技来创新", score: 100 },
        { value: "B", text: "愿意尝试，但并不确定中医的未来发展", score: 80 },
        { value: "C", text: "不支持，我认为中医应该保持传统", score: 60 }
      ],
      results: {
        "A": { description: "现代智慧草药的启示", icon: "🌿" },
        "B": { description: "探索草药的线索", icon: "🔍" },
        "C": { description: "传统秘方的钥匙", icon: "🔑" }
      }
    },
    {
      id: 2,
      title: "第二关：中医与西医的对话",
      story: "你走进一座宽敞的大厅，看到两位学者激烈讨论，一个是中医大师，另一个是西医专家。他们请你加入讨论，解答他们之间的争论。",
      question: "你是否认为中医和西医可以互补，帮助治疗疾病？",
      options: [
        { value: "A", text: "是的，二者可以互相补充", score: 100 },
        { value: "B", text: "不确定，二者有时会冲突", score: 70 },
        { value: "C", text: "不认为，西医才是唯一有效的治疗方法", score: 50 }
      ],
      results: {
        "A": { description: "和谐之道的智慧", icon: "☯️" },
        "B": { description: "怀疑之门的钥匙", icon: "🔑" },
        "C": { description: "单一治疗法的经验", icon: "💊" }
      }
    },
    {
      id: 3,
      title: "第三关：健康数据的秘密",
      story: "你进入了一座充满智能设备的实验室，可以实时监测身体健康。你面前的设备可以通过数据帮助你了解身体状况。你必须决定是否愿意使用这些设备。",
      question: "你是否愿意使用智能设备（如智能戒指、手表等）来跟踪你的健康数据（如脉搏、气血等）？",
      options: [
        { value: "A", text: "非常愿意，我认为它有助于更好地管理健康", score: 100 },
        { value: "B", text: "愿意，但需要更多了解", score: 80 },
        { value: "C", text: "不愿意，我更倾向于传统健康管理方式", score: 60 }
      ],
      results: {
        "A": { description: "健康之眼的钥匙", icon: "👁️" },
        "B": { description: "数据探索者的身份", icon: "🔍" },
        "C": { description: "传统之道的符文", icon: "📜" }
      }
    },
    {
      id: 4,
      title: "第四关：养生产品的探索",
      story: "你来到一座展览馆，展示了各种中医养生产品。这些产品基于\"虚、毒、瘀、湿\"等理论。你必须选择是否愿意尝试这些产品。",
      question: "你了解过或正在使用以\"虚、毒、瘀、湿\"为基础的中医养生产品吗？",
      options: [
        { value: "A", text: "是的，已经在使用并看到一定效果", score: 100 },
        { value: "B", text: "有了解过，但还没有使用", score: 70 },
        { value: "C", text: "不太了解，也没有兴趣使用", score: 50 }
      ],
      results: {
        "A": { description: "调和药剂的传送门", icon: "🧪" },
        "B": { description: "学习之路的钥匙", icon: "🔑" },
        "C": { description: "传统智慧的符咒", icon: "📜" }
      }
    },
    {
      id: 5,
      title: "第五关：健康管理与开放数据",
      story: "你进入了一座数据中心，看到告示板上写着：\"开放数据助力中医智能化研究\"。你被要求回答是否愿意贡献自己的健康数据。",
      question: "你是否支持通过开放数据和共享的方式来促进中医智能化研究？",
      options: [
        { value: "A", text: "完全支持，我认为这对社会和科研有益", score: 100 },
        { value: "B", text: "中立，取决于如何使用我的数据", score: 70 },
        { value: "C", text: "不支持，我不愿意分享个人健康数据", score: 50 }
      ],
      results: {
        "A": { description: "数据共享的钥匙", icon: "🔑" },
        "B": { description: "谨慎之道的护符", icon: "🛡️" },
        "C": { description: "保守者的徽章", icon: "🏅" }
      }
    },
    {
      id: 6,
      title: "第六关：健康追踪与个人化建议",
      story: "你来到了一个现代化的健康追踪室，房间里摆满了各种设备和工具，根据你的健康数据生成个性化的养生建议。你需要决定是否愿意使用这些设备。",
      question: "你是否愿意通过定期追踪和管理健康指标来实现个性化的养生建议和目标？",
      options: [
        { value: "A", text: "完全愿意，我认为定期追踪有助于持续改进健康", score: 100 },
        { value: "B", text: "愿意，但不确定是否能坚持", score: 80 },
        { value: "C", text: "不愿意，我认为偶尔了解健康状况即可", score: 60 }
      ],
      results: {
        "A": { description: "健康之道的钥匙", icon: "🔑" },
        "B": { description: "探索之钥的符文", icon: "📜" },
        "C": { description: "自由之符的护符", icon: "🛡️" }
      }
    },
    {
      id: 7,
      title: "第七关：可穿戴设备的应用",
      story: "你进入了一座展览会，展出许多智能手环、手表等可穿戴设备，它们能够帮助你实时监控健康。你必须选择是否尝试使用这些设备。",
      question: "你对可穿戴设备（如智能戒指、手环、智能手表）在健康管理中的作用有何看法？",
      options: [
        { value: "A", text: "我认为它们非常有效，可以帮助我实时了解健康状况", score: 100 },
        { value: "B", text: "我觉得它们有一定作用，但不确定是否足够重要", score: 70 },
        { value: "C", text: "不认为它们有用，习惯通过传统方式管理健康", score: 50 }
      ],
      results: {
        "A": { description: "实时健康的符文", icon: "📜" },
        "B": { description: "智能探索者的徽章", icon: "🏅" },
        "C": { description: "传统护符的符咒", icon: "🛡️" }
      }
    },
    {
      id: 8,
      title: "第八关：智能中医与大数据分析",
      story: "你进入一座高科技的数据分析中心，看到一个大屏幕显示着各种健康数据。你需要做出一个决定，是否支持使用大数据和人工智能来分析中医治疗方案。",
      question: "你是否支持利用大数据和人工智能来优化中医的诊断和治疗方案？",
      options: [
        { value: "A", text: "完全支持，我认为大数据可以帮助改善中医治疗效果", score: 100 },
        { value: "B", text: "支持，但我认为需要小心使用，避免失去传统中医的独特性", score: 80 },
        { value: "C", text: "不支持，我认为中医应坚持传统诊疗方法", score: 60 }
      ],
      results: {
        "A": { description: "大数据分析的钥匙", icon: "🔑" },
        "B": { description: "传统与现代融合的符咒", icon: "📜" },
        "C": { description: "传统之道的护符", icon: "🛡️" }
      }
    },
    {
      id: 9,
      title: "第九关：养生保健的挑战",
      story: "你走进一个充满草药和传统中医药方的馆内。馆内有许多药方展示，你需要选择其中的一种来开始治疗自己的健康问题。",
      question: "你是否倾向于选择自然草药疗法来处理日常健康问题？",
      options: [
        { value: "A", text: "完全倾向，草药疗法自然、安全", score: 100 },
        { value: "B", text: "不确定，偶尔使用草药治疗", score: 70 },
        { value: "C", text: "不倾向，我更喜欢现代医学治疗方法", score: 50 }
      ],
      results: {
        "A": { description: "草药之道的钥匙", icon: "🔑" },
        "B": { description: "草药探索者的徽章", icon: "🏅" },
        "C": { description: "现代医学的符咒", icon: "📜" }
      }
    },
    {
      id: 10,
      title: "第十关：个性化中医治疗的接受度",
      story: "你进入了一间现代化的中医诊所，发现它使用了智能设备来根据个人健康数据推荐中医治疗方案。",
      question: "你是否愿意接受根据个人健康数据量身定制的中医治疗方案？",
      options: [
        { value: "A", text: "愿意，认为这可以提高治疗的有效性", score: 100 },
        { value: "B", text: "愿意尝试，但仍然对其效果保持怀疑", score: 70 },
        { value: "C", text: "不愿意，我更喜欢常规治疗方法", score: 50 }
      ],
      results: {
        "A": { description: "个性化治疗的钥匙", icon: "🔑" },
        "B": { description: "尝试之道的符文", icon: "📜" },
        "C": { description: "传统疗法的护符", icon: "🛡️" }
      }
    },
    {
      id: 11,
      title: "第十一关：健康管理的技术支持",
      story: "你走进一个充满未来感的健康管理实验室，看到一个全自动的健康管理系统正在运行。你需要决定是否接受系统的帮助来进行全方位健康管理。",
      question: "你是否愿意接受技术支持来管理和优化自己的健康状况？",
      options: [
        { value: "A", text: "完全愿意，科技的辅助能提高我的健康水平", score: 100 },
        { value: "B", text: "有些犹豫，我觉得过度依赖技术可能会失去自主性", score: 70 },
        { value: "C", text: "不愿意，我更倾向于自然的健康管理方式", score: 50 }
      ],
      results: {
        "A": { description: "科技健康的钥匙", icon: "🔑" },
        "B": { description: "健康之道的符咒", icon: "📜" },
        "C": { description: "传统智慧的符文", icon: "📜" }
      }
    },
    {
      id: 12,
      title: "第十二关：情绪健康与中医结合",
      story: "你来到一座情绪调节大厅，看到各种中医情绪治疗的方法。你需要选择一个方法来平复自己最近的情绪波动。",
      question: "你是否认为中医能有效改善情绪健康（如缓解压力、焦虑等）？",
      options: [
        { value: "A", text: "完全认为，中医有助于调节情绪和压力", score: 100 },
        { value: "B", text: "有一定效果，但更依赖于个人情况", score: 80 },
        { value: "C", text: "不认为，中医无法有效调节情绪", score: 50 }
      ],
      results: {
        "A": { description: "情绪治疗的钥匙", icon: "🔑" },
        "B": { description: "情绪调节之道的符咒", icon: "📜" },
        "C": { description: "现代情绪管理的徽章", icon: "🏅" }
      }
    },
    {
      id: 13,
      title: "第十三关：自我疗法的挑战",
      story: "你在一个现代化的自我疗法站点看到许多治疗工具和建议。你可以选择是否使用自我治疗方法来增强自身健康。",
      question: "你是否倾向于自我治疗（例如中草药、气功、冥想等）来提高身体健康？",
      options: [
        { value: "A", text: "是的，自我治疗有助于我的身心健康", score: 100 },
        { value: "B", text: "有些尝试过，但效果不一", score: 70 },
        { value: "C", text: "不倾向，我更喜欢寻求专业医疗帮助", score: 50 }
      ],
      results: {
        "A": { description: "自我疗法的符文", icon: "📜" },
        "B": { description: "探索之道的徽章", icon: "🏅" },
        "C": { description: "专业医疗的护符", icon: "🛡️" }
      }
    },
    {
      id: 14,
      title: "第十四关：未来健康的愿景",
      story: "你来到了游戏的最终区域，面对着未来健康的蓝图。你需要决定你对未来健康管理的愿景。",
      question: "你如何看待未来健康管理与科技结合的前景？",
      options: [
        { value: "A", text: "极为期待，科技将彻底改变我们的健康管理方式", score: 100 },
        { value: "B", text: "中立，期待科技进步，但也有些担忧", score: 70 },
        { value: "C", text: "不太期待，我更相信传统的健康管理方式", score: 50 }
      ],
      results: {
        "A": { description: "未来健康的钥匙", icon: "🔑" },
        "B": { description: "平衡之道的符咒", icon: "📜" },
        "C": { description: "传统信念的护符", icon: "🛡️" }
      }
    },
    {
      id: 15,
      title: "第十五关：科技与传统的结合",
      story: "你来到了游戏的终点，面对着一个古老的智慧宝盒。你必须决定是否将科技和传统中医结合，打开通向未来的大门。",
      question: "你认为未来科技与传统中医能否成功融合，创造出更好的健康管理方法？",
      options: [
        { value: "A", text: "认为可以，未来科技和中医会找到完美的结合点", score: 100 },
        { value: "B", text: "认为有一定挑战，但也有可能融合成功", score: 80 },
        { value: "C", text: "不认为，科技和中医无法完全融合", score: 60 }
      ],
      results: {
        "A": { description: "智慧融合的钥匙", icon: "🔑" },
        "B": { description: "融合探索者的徽章", icon: "🏅" },
        "C": { description: "传统之道的守护符", icon: "🛡️" }
      }
    }
  ]
};
