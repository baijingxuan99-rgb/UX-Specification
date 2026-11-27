window.UX_DATA = {
  "cases": [
    {
      "id": "T01",
      "layer": 1,
      "module": "首次进入",
      "title": "首次进入",
      "condition": "新号，未开启引导",
      "task": "进入游戏，开始你的第一次战斗",
      "expected": "能找到主目标；不被活动或次要入口干扰；理解当前操作",
      "metrics": "入口首击、求助、耗时",
      "priority": "P0"
    },
    {
      "id": "T02",
      "layer": 1,
      "module": "新手引导",
      "title": "新手引导",
      "condition": "新号，引导进行中",
      "task": "完成第一段教学，并尝试自己进行下一次挑战",
      "expected": "理解机制；可识别引导结束；后续可独立操作",
      "metrics": "是否复述规则、是否依赖引导",
      "priority": "P0"
    },
    {
      "id": "T03",
      "layer": 1,
      "module": "主界面",
      "title": "主界面",
      "condition": "已解锁多个系统",
      "task": "你只有三分钟，想让角色变强并继续推进",
      "expected": "能辨识主线与养成入口；合理选择提升方式",
      "metrics": "首击、路径、绕路",
      "priority": "P0"
    },
    {
      "id": "T04",
      "layer": 1,
      "module": "开始战斗",
      "title": "开始战斗",
      "condition": "体力充足，有可挑战关卡",
      "task": "挑战下一关",
      "expected": "关卡、消耗、推荐信息清楚；启动后有明确反馈",
      "metrics": "首击、操作次数",
      "priority": "P0"
    },
    {
      "id": "T05",
      "layer": 1,
      "module": "战斗准备",
      "title": "战斗准备",
      "condition": "多套装备或功法",
      "task": "在开战前调整你的战斗配置",
      "expected": "当前配置清楚；变更后生效；返回关卡无迷失",
      "metrics": "回退、变更理解",
      "priority": "P0"
    },
    {
      "id": "T06",
      "layer": 1,
      "module": "战中选择",
      "title": "战中选择",
      "condition": "出现技能三选一",
      "task": "选择一个你认为适合本局的能力",
      "expected": "理解选项差异及效果；选中与生效明确；不遮挡必要战况",
      "metrics": "选择理由、误选",
      "priority": "P0"
    },
    {
      "id": "T07",
      "layer": 1,
      "module": "战中暂停",
      "title": "战中暂停",
      "condition": "允许暂停的战斗",
      "task": "暂时离开战斗，稍后继续",
      "expected": "暂停和继续入口清楚；离开代价提前告知",
      "metrics": "误退、是否找回",
      "priority": "P0"
    },
    {
      "id": "T08",
      "layer": 1,
      "module": "战斗胜利",
      "title": "战斗胜利",
      "condition": "关卡完成",
      "task": "确认本次战斗收获，并继续下一关",
      "expected": "胜利、奖励、解锁清楚；下一步突出；返回可达",
      "metrics": "奖励复述、停顿",
      "priority": "P0"
    },
    {
      "id": "T09",
      "layer": 1,
      "module": "战斗失败",
      "title": "战斗失败",
      "condition": "设置为失败结算",
      "task": "你没打过这一关，想提高胜率后再挑战",
      "expected": "失败原因或可执行建议明确；养成跳转和回关卡闭环",
      "metrics": "选择、迷失、闭环",
      "priority": "P0"
    },
    {
      "id": "T10",
      "layer": 1,
      "module": "强化角色",
      "title": "强化角色",
      "condition": "资源足够",
      "task": "用现有资源提升角色战力",
      "expected": "找到升级功能；消耗、提升、结果清楚",
      "metrics": "首击、成本复述",
      "priority": "P0"
    },
    {
      "id": "T11",
      "layer": 1,
      "module": "资源不足",
      "title": "资源不足",
      "condition": "升级材料不足",
      "task": "想升级，但现有材料不够；请继续想办法",
      "expected": "识别缺哪种、差多少、获得途径；回来保持原任务",
      "metrics": "跨系统路径、理解",
      "priority": "P0"
    },
    {
      "id": "T12",
      "layer": 1,
      "module": "装备替换",
      "title": "装备替换",
      "condition": "有两件属性不同的装备",
      "task": "选择一件更适合当前角色的装备",
      "expected": "识别当前装备、差异、替换影响；操作可控",
      "metrics": "比较正确性、误换",
      "priority": "P0"
    },
    {
      "id": "T13",
      "layer": 1,
      "module": "批量养成",
      "title": "批量养成",
      "condition": "多个可升级项目",
      "task": "尽量快速完成一轮提升",
      "expected": "批量范围、消耗、结果清晰；可避免误花稀缺资源",
      "metrics": "操作次数、误耗",
      "priority": "P1"
    },
    {
      "id": "T14",
      "layer": 1,
      "module": "背包道具",
      "title": "背包道具",
      "condition": "背包含多类材料与消耗品",
      "task": "找到一个指定材料，看看它有什么用途",
      "expected": "分类或筛选可理解；数量、用途、来源清晰",
      "metrics": "查找耗时、试错",
      "priority": "P1"
    },
    {
      "id": "T15",
      "layer": 1,
      "module": "道具使用",
      "title": "道具使用",
      "condition": "有可选择数量的箱子",
      "task": "只使用其中两个箱子",
      "expected": "数量选择准确；预览、确认、剩余数量明确",
      "metrics": "误耗、次数",
      "priority": "P1"
    },
    {
      "id": "T16",
      "layer": 1,
      "module": "招募抽取",
      "title": "招募抽取",
      "condition": "有免费和付费资源",
      "task": "使用一次免费的招募机会，不花付费货币",
      "expected": "清楚免费资格与付费区别；结果与余额可查",
      "metrics": "误付费、成本理解",
      "priority": "P0"
    },
    {
      "id": "T17",
      "layer": 1,
      "module": "日常任务",
      "title": "日常任务",
      "condition": "含未完成、可领奖任务",
      "task": "领取已完成的任务奖励，并完成一项剩余任务",
      "expected": "任务状态分明；前往路径与返回路径正确",
      "metrics": "领取后状态、迷失",
      "priority": "P0"
    },
    {
      "id": "T18",
      "layer": 1,
      "module": "离线收益",
      "title": "离线收益",
      "condition": "离线收益待领取",
      "task": "回到游戏，查看并领取离线收益",
      "expected": "收益时间、上限、领取方式清楚；可拒绝附加广告",
      "metrics": "理解、关闭误触",
      "priority": "P1"
    },
    {
      "id": "T19",
      "layer": 1,
      "module": "活动系统",
      "title": "活动系统",
      "condition": "多个活动，含倒计时",
      "task": "找到一个你现在还能参加并有奖励的活动",
      "expected": "入口、参与条件、剩余时间、奖励及领取清楚",
      "metrics": "活动选择理由",
      "priority": "P1"
    },
    {
      "id": "T20",
      "layer": 1,
      "module": "商城兑换",
      "title": "商城兑换",
      "condition": "免费、限购和付费商品并存",
      "task": "找一个可免费领取的商品，不进行付费购买",
      "expected": "免费、价格、限购及货币明确；无诱导误购",
      "metrics": "误购、状态理解",
      "priority": "P0"
    },
    {
      "id": "T21",
      "layer": 1,
      "module": "邮件领取",
      "title": "邮件领取",
      "condition": "多封邮件含附件及已领取项",
      "task": "领取所有可领取的附件",
      "expected": "一键领取范围、领取结果、未读状态清晰",
      "metrics": "是否漏领、次数",
      "priority": "P1"
    },
    {
      "id": "T22",
      "layer": 1,
      "module": "红点清理",
      "title": "红点清理",
      "condition": "主界面多个红点",
      "task": "找出有哪些实际可以完成或领取的事情",
      "expected": "红点有明确原因；完成后同步消除；无循环跳转",
      "metrics": "误导、残留",
      "priority": "P1"
    },
    {
      "id": "T23",
      "layer": 1,
      "module": "跨系统回流",
      "title": "跨系统回流",
      "condition": "从升级材料不足开始",
      "task": "取得缺少的材料，再回到原升级位置",
      "expected": "跳转目的明确；原页签、目标及必要上下文可恢复",
      "metrics": "回流成功、额外步数",
      "priority": "P0"
    },
    {
      "id": "T24",
      "layer": 1,
      "module": "中断恢复",
      "title": "中断恢复",
      "condition": "弹窗或养成页中断",
      "task": "模拟切后台，再回来继续刚才的操作",
      "expected": "知道当前状态；不重复扣费或领奖；可继续或退出",
      "metrics": "恢复理解、重复操作",
      "priority": "P0"
    },
    {
      "id": "T25",
      "layer": 1,
      "module": "设置与退出",
      "title": "设置与退出",
      "condition": "已进入游戏",
      "task": "关闭音效，再回到原先的界面",
      "expected": "设置入口易找；音效开关状态清楚；设置保存",
      "metrics": "寻找、返回",
      "priority": "P1"
    },
    {
      "id": "T26",
      "layer": 1,
      "module": "付费取消",
      "title": "付费取消",
      "condition": "模拟商城订单确认",
      "task": "看看礼包价格，再取消购买",
      "expected": "真实价格、币种和内容明示；取消不扣费；可回原位置",
      "metrics": "误支付、取消成功",
      "priority": "P0"
    },
    {
      "id": "I01",
      "layer": 2,
      "module": "导航",
      "title": "主界面层级",
      "condition": "进入、退出各一级系统",
      "task": "进入、退出各一级系统",
      "expected": "主目标醒目；高频功能入口稳定；当前所在系统可辨认",
      "metrics": "",
      "priority": "P0"
    },
    {
      "id": "I02",
      "layer": 2,
      "module": "导航",
      "title": "返回一致性",
      "condition": "从一级、二级、三级页及弹窗逐层返回",
      "task": "从一级、二级、三级页及弹窗逐层返回",
      "expected": "返回上一级合理；不会不必要回首页；无死路",
      "metrics": "",
      "priority": "P0"
    },
    {
      "id": "I03",
      "layer": 2,
      "module": "导航",
      "title": "系统间跳转",
      "condition": "材料、任务、活动的前往按钮",
      "task": "材料、任务、活动的前往按钮",
      "expected": "目的地符合文案；返回原任务；上下文按需保存",
      "metrics": "",
      "priority": "P0"
    },
    {
      "id": "I04",
      "layer": 2,
      "module": "导航",
      "title": "页签切换",
      "condition": "来回切换两类页签",
      "task": "来回切换两类页签",
      "expected": "选中态明显；内容同步；有合理默认项",
      "metrics": "",
      "priority": "P1"
    },
    {
      "id": "I05",
      "layer": 2,
      "module": "导航",
      "title": "入口解锁",
      "condition": "查看锁定系统再模拟解锁",
      "task": "查看锁定系统再模拟解锁",
      "expected": "条件可读；解锁后入口状态及时更新",
      "metrics": "",
      "priority": "P1"
    },
    {
      "id": "I06",
      "layer": 2,
      "module": "操作",
      "title": "触控热区",
      "condition": "在真机用左右手单手点击密集按钮",
      "task": "在真机用左右手单手点击密集按钮",
      "expected": "可触区域足够；无相邻误触；iOS参考44pt，Android参考48dp",
      "metrics": "",
      "priority": "P0"
    },
    {
      "id": "I07",
      "layer": 2,
      "module": "操作",
      "title": "拇指可达性",
      "condition": "分别操作高频和低频入口",
      "task": "分别操作高频和低频入口",
      "expected": "高频操作无需频繁换握姿；不会被手指遮挡关键信息",
      "metrics": "",
      "priority": "P1"
    },
    {
      "id": "I08",
      "layer": 2,
      "module": "操作",
      "title": "连续点击",
      "condition": "连续点击升级、领取、购买",
      "task": "连续点击升级、领取、购买",
      "expected": "输入反馈清楚；不意外叠加请求或消费；允许的连续操作可控",
      "metrics": "",
      "priority": "P0"
    },
    {
      "id": "I09",
      "layer": 2,
      "module": "操作",
      "title": "滚动与点击",
      "condition": "快速滑动列表、停下并选择项目",
      "task": "快速滑动列表、停下并选择项目",
      "expected": "滚动不被误识别为点击；列表惯性合理；选择不跳位",
      "metrics": "",
      "priority": "P1"
    },
    {
      "id": "I10",
      "layer": 2,
      "module": "操作",
      "title": "滑块与数量",
      "condition": "使用加减、最大、输入数量",
      "task": "使用加减、最大、输入数量",
      "expected": "边界正确；单位和合计同步；可快速回退",
      "metrics": "",
      "priority": "P1"
    },
    {
      "id": "I11",
      "layer": 2,
      "module": "反馈",
      "title": "按钮视觉状态",
      "condition": "切换默认、按下、禁用、请求中",
      "task": "切换默认、按下、禁用、请求中",
      "expected": "状态可区分；不可用时提供必要原因或说明入口",
      "metrics": "",
      "priority": "P0"
    },
    {
      "id": "I12",
      "layer": 2,
      "module": "反馈",
      "title": "操作成功",
      "condition": "模拟升级、装备替换、领取",
      "task": "模拟升级、装备替换、领取",
      "expected": "结果明确；数值、余额和关联状态同步变化",
      "metrics": "",
      "priority": "P0"
    },
    {
      "id": "I13",
      "layer": 2,
      "module": "反馈",
      "title": "操作失败",
      "condition": "模拟失败、条件不足",
      "task": "模拟失败、条件不足",
      "expected": "说明原因、是否生效和下一步；避免只有错误码",
      "metrics": "",
      "priority": "P0"
    },
    {
      "id": "I14",
      "layer": 2,
      "module": "反馈",
      "title": "动画与跳过",
      "condition": "连续领奖、结算或抽取",
      "task": "连续领奖、结算或抽取",
      "expected": "奖励信息保留；非必要动画可按规则跳过；不会卡在展示层",
      "metrics": "",
      "priority": "P1"
    },
    {
      "id": "I15",
      "layer": 2,
      "module": "反馈",
      "title": "红点机制",
      "condition": "打开红点、完成、返回、重进",
      "task": "打开红点、完成、返回、重进",
      "expected": "提示的含义和消失规则一致；父级与子级同步",
      "metrics": "",
      "priority": "P1"
    },
    {
      "id": "I16",
      "layer": 2,
      "module": "弹窗",
      "title": "关闭与取消",
      "condition": "试关闭按钮、取消、遮罩和系统返回",
      "task": "试关闭按钮、取消、遮罩和系统返回",
      "expected": "关闭规则一致；关键决策不被误取消或误确认",
      "metrics": "",
      "priority": "P0"
    },
    {
      "id": "I17",
      "layer": 2,
      "module": "弹窗",
      "title": "叠层与优先级",
      "condition": "同时触发奖励、解锁、活动提示",
      "task": "同时触发奖励、解锁、活动提示",
      "expected": "重要信息优先；不无限堆叠；关闭后恢复上下文",
      "metrics": "",
      "priority": "P1"
    },
    {
      "id": "I18",
      "layer": 2,
      "module": "弹窗",
      "title": "确认机制",
      "condition": "模拟消耗稀缺资源、销毁、退出战斗",
      "task": "模拟消耗稀缺资源、销毁、退出战斗",
      "expected": "明确对象、代价与影响；不可逆操作可二次确认；取消无损失",
      "metrics": "",
      "priority": "P0"
    },
    {
      "id": "I19",
      "layer": 2,
      "module": "信息",
      "title": "视觉层级",
      "condition": "快速浏览高密度首页",
      "task": "快速浏览高密度首页",
      "expected": "当前目标、主操作、关键状态优先；装饰不抢占",
      "metrics": "",
      "priority": "P1"
    },
    {
      "id": "I20",
      "layer": 2,
      "module": "信息",
      "title": "货币与价格",
      "condition": "对比两种货币及付费商品",
      "task": "对比两种货币及付费商品",
      "expected": "图标、名称、数量、单位明确；不足和支付结果可理解",
      "metrics": "",
      "priority": "P0"
    },
    {
      "id": "I21",
      "layer": 2,
      "module": "信息",
      "title": "属性对比",
      "condition": "比较装备、技能、升级前后",
      "task": "比较装备、技能、升级前后",
      "expected": "同维度可比；增减含义明确；不只依赖红绿色",
      "metrics": "",
      "priority": "P1"
    },
    {
      "id": "I22",
      "layer": 2,
      "module": "信息",
      "title": "术语与图标",
      "condition": "不看教程尝试解释陌生图标",
      "task": "不看教程尝试解释陌生图标",
      "expected": "图标有明确语义或说明；同概念使用同一名称",
      "metrics": "",
      "priority": "P1"
    },
    {
      "id": "I23",
      "layer": 2,
      "module": "信息",
      "title": "奖励预览",
      "condition": "查看关卡、活动、宝箱奖励",
      "task": "查看关卡、活动、宝箱奖励",
      "expected": "区分预期、随机、已获、可领取；不误导为保证获得",
      "metrics": "",
      "priority": "P0"
    },
    {
      "id": "I24",
      "layer": 2,
      "module": "适配",
      "title": "安全区与尺寸",
      "condition": "小屏、长屏、刘海屏真机检查",
      "task": "小屏、长屏、刘海屏真机检查",
      "expected": "标题、返回、底部主要操作不被遮挡；弹窗可完整阅读",
      "metrics": "",
      "priority": "P0"
    },
    {
      "id": "I25",
      "layer": 2,
      "module": "适配",
      "title": "长文本与大数",
      "condition": "注入长昵称、长描述、极大数量",
      "task": "注入长昵称、长描述、极大数量",
      "expected": "不溢出遮挡；必要信息可展开；单位精度一致",
      "metrics": "",
      "priority": "P1"
    },
    {
      "id": "I26",
      "layer": 2,
      "module": "效率",
      "title": "常用批量操作",
      "condition": "多项可领取或升级",
      "task": "多项可领取或升级",
      "expected": "减少重复操作；批量行为范围明确；结果可复核",
      "metrics": "",
      "priority": "P1"
    },
    {
      "id": "I27",
      "layer": 2,
      "module": "效率",
      "title": "列表位置保留",
      "condition": "从长列表详情页返回",
      "task": "从长列表详情页返回",
      "expected": "合理保存筛选、滚动位置和选中项",
      "metrics": "",
      "priority": "P1"
    },
    {
      "id": "I28",
      "layer": 2,
      "module": "可访问性",
      "title": "信息辨识",
      "condition": "模拟弱视或色觉差异；静音操作",
      "task": "模拟弱视或色觉差异；静音操作",
      "expected": "关键信息不只靠颜色或音效；文本及触控可辨认",
      "metrics": "",
      "priority": "P1"
    },
    {
      "id": "S01",
      "layer": 3,
      "module": "所有数据页",
      "title": "首次进入/加载中",
      "condition": "请求开始至完成",
      "task": "请求开始至完成",
      "expected": "提供加载反馈；不将加载误显示为空",
      "metrics": "",
      "priority": "P0"
    },
    {
      "id": "S02",
      "layer": 3,
      "module": "所有数据页",
      "title": "空状态",
      "condition": "没有物品、任务、邮件或记录",
      "task": "没有物品、任务、邮件或记录",
      "expected": "说明为什么为空、是否有下一步；无异常占位",
      "metrics": "",
      "priority": "P1"
    },
    {
      "id": "S03",
      "layer": 3,
      "module": "所有数据页",
      "title": "有数据",
      "condition": "少量及常规数据",
      "task": "少量及常规数据",
      "expected": "默认展示清楚；主操作可达",
      "metrics": "",
      "priority": "P1"
    },
    {
      "id": "S04",
      "layer": 3,
      "module": "列表",
      "title": "大量数据",
      "condition": "内容超过一屏或达到容量上限",
      "task": "内容超过一屏或达到容量上限",
      "expected": "可滚动；分页/加载反馈；容量上限可理解",
      "metrics": "",
      "priority": "P1"
    },
    {
      "id": "S05",
      "layer": 3,
      "module": "按钮",
      "title": "不可用",
      "condition": "未满足条件、冷却中",
      "task": "未满足条件、冷却中",
      "expected": "表现不可用；原因及解除方式清楚",
      "metrics": "",
      "priority": "P0"
    },
    {
      "id": "S06",
      "layer": 3,
      "module": "按钮",
      "title": "请求中/连点",
      "condition": "发起请求后重复点击",
      "task": "发起请求后重复点击",
      "expected": "锁定或合理合并请求；显示进度；不会重复提交",
      "metrics": "",
      "priority": "P0"
    },
    {
      "id": "S07",
      "layer": 3,
      "module": "养成",
      "title": "资源不足",
      "condition": "需求大于持有量",
      "task": "需求大于持有量",
      "expected": "缺口、资源来源、返回路径明确",
      "metrics": "",
      "priority": "P0"
    },
    {
      "id": "S08",
      "layer": 3,
      "module": "养成",
      "title": "资源刚好",
      "condition": "持有量等于需求",
      "task": "持有量等于需求",
      "expected": "操作允许；成功后余额为零；后续状态正确",
      "metrics": "",
      "priority": "P0"
    },
    {
      "id": "S09",
      "layer": 3,
      "module": "养成",
      "title": "满级/满星",
      "condition": "达到等级或突破上限",
      "task": "达到等级或突破上限",
      "expected": "说明已满或下一阶段条件；停止无意义消耗",
      "metrics": "",
      "priority": "P0"
    },
    {
      "id": "S10",
      "layer": 3,
      "module": "养成",
      "title": "条件组合",
      "condition": "等级足够但材料或前置不足",
      "task": "等级足够但材料或前置不足",
      "expected": "每项条件独立展示；不误导可以操作",
      "metrics": "",
      "priority": "P0"
    },
    {
      "id": "S11",
      "layer": 3,
      "module": "装备",
      "title": "无装备/已装备",
      "condition": "空槽、同一件、替换",
      "task": "空槽、同一件、替换",
      "expected": "空槽有指引；装备标识清楚；替换结果同步",
      "metrics": "",
      "priority": "P1"
    },
    {
      "id": "S12",
      "layer": 3,
      "module": "背包",
      "title": "满容量",
      "condition": "拾取或领取超过上限",
      "task": "拾取或领取超过上限",
      "expected": "告知容量及奖励处理方式；可整理后续操作",
      "metrics": "",
      "priority": "P0"
    },
    {
      "id": "S13",
      "layer": 3,
      "module": "任务/邮件",
      "title": "未完成/可领/已领",
      "condition": "完成或领取触发转换",
      "task": "完成或领取触发转换",
      "expected": "三态区别清晰；领取后不重复发放；红点同步",
      "metrics": "",
      "priority": "P0"
    },
    {
      "id": "S14",
      "layer": 3,
      "module": "活动",
      "title": "未开启/进行中",
      "condition": "到达活动开始时间",
      "task": "到达活动开始时间",
      "expected": "条件和时间明确；进入后状态更新",
      "metrics": "",
      "priority": "P1"
    },
    {
      "id": "S15",
      "layer": 3,
      "module": "活动",
      "title": "结束/领取期",
      "condition": "倒计时归零或领取期结束",
      "task": "倒计时归零或领取期结束",
      "expected": "区分不能参与和能否领奖；说明未领奖处理方式",
      "metrics": "",
      "priority": "P0"
    },
    {
      "id": "S16",
      "layer": 3,
      "module": "商城",
      "title": "售罄/限购",
      "condition": "剩余次数为0或达到上限",
      "task": "剩余次数为0或达到上限",
      "expected": "显示原因和刷新规则；不可继续购买",
      "metrics": "",
      "priority": "P0"
    },
    {
      "id": "S17",
      "layer": 3,
      "module": "商城",
      "title": "价格变化",
      "condition": "刷新后价格或货币改变",
      "task": "刷新后价格或货币改变",
      "expected": "确认前展示新价格；未确认不扣费",
      "metrics": "",
      "priority": "P0"
    },
    {
      "id": "S18",
      "layer": 3,
      "module": "付费",
      "title": "取消/失败",
      "condition": "用户取消或支付失败",
      "task": "用户取消或支付失败",
      "expected": "返回安全状态；说明未完成；可重试",
      "metrics": "",
      "priority": "P0"
    },
    {
      "id": "S19",
      "layer": 3,
      "module": "付费",
      "title": "结果未知/延迟",
      "condition": "支付中断、到账延迟",
      "task": "支付中断、到账延迟",
      "expected": "清楚提示核实中；不诱导重复支付；提供查询或帮助",
      "metrics": "",
      "priority": "P0"
    },
    {
      "id": "S20",
      "layer": 3,
      "module": "战斗",
      "title": "体力不足",
      "condition": "挑战时资源不足",
      "task": "挑战时资源不足",
      "expected": "消耗、缺口和补充方式可见；可取消",
      "metrics": "",
      "priority": "P0"
    },
    {
      "id": "S21",
      "layer": 3,
      "module": "战斗",
      "title": "失败/退出",
      "condition": "主动退出或战败",
      "task": "主动退出或战败",
      "expected": "明确消耗、奖励规则及返回/重试路径",
      "metrics": "",
      "priority": "P0"
    },
    {
      "id": "S22",
      "layer": 3,
      "module": "战斗",
      "title": "暂停/恢复",
      "condition": "暂停、系统中断后恢复",
      "task": "暂停、系统中断后恢复",
      "expected": "恢复前状态明确；不能暂停的模式需告知",
      "metrics": "",
      "priority": "P0"
    },
    {
      "id": "S23",
      "layer": 3,
      "module": "通用",
      "title": "弱网/超时",
      "condition": "请求超过正常响应时间",
      "task": "请求超过正常响应时间",
      "expected": "加载、超时、重试或取消均有反馈",
      "metrics": "",
      "priority": "P0"
    },
    {
      "id": "S24",
      "layer": 3,
      "module": "通用",
      "title": "断网/重连",
      "condition": "操作前断网；提交后断网；重连",
      "task": "操作前断网；提交后断网；重连",
      "expected": "区分未提交和结果未知；恢复后同步结果",
      "metrics": "",
      "priority": "P0"
    },
    {
      "id": "S25",
      "layer": 3,
      "module": "通用",
      "title": "后台/重启",
      "condition": "在领取、升级、战斗中切后台",
      "task": "在领取、升级、战斗中切后台",
      "expected": "按规则恢复或明确退出结果；不重复消费",
      "metrics": "",
      "priority": "P0"
    },
    {
      "id": "S26",
      "layer": 3,
      "module": "通用",
      "title": "日切/刷新",
      "condition": "页面停留时跨日或活动刷新",
      "task": "页面停留时跨日或活动刷新",
      "expected": "旧状态及时刷新；提示变化；防止旧数据误操作",
      "metrics": "",
      "priority": "P0"
    },
    {
      "id": "S27",
      "layer": 3,
      "module": "通用",
      "title": "弹窗叠加",
      "condition": "领奖时触发解锁与活动提醒",
      "task": "领奖时触发解锁与活动提醒",
      "expected": "展示有序；关完后回到正确页面",
      "metrics": "",
      "priority": "P1"
    },
    {
      "id": "S28",
      "layer": 3,
      "module": "通用",
      "title": "极端显示",
      "condition": "长昵称、大数、0值、负向变化",
      "task": "长昵称、大数、0值、负向变化",
      "expected": "显示正确且可读；不遮挡主要操作",
      "metrics": "",
      "priority": "P1"
    }
  ],
  "guide": [
    [
      "目标",
      "原型可用性、跨系统操作闭环、交互一致性、异常状态覆盖；不是功能QA或商业数据预测。"
    ],
    [
      "范围假设",
      "参考竖屏轻操作重养成手游；系统按实际原型删改，不适用项须写原因。未提供实际原型，所有测试结果均未填。"
    ],
    [
      "执行顺序",
      "先用玩家任务库开展无引导测试，再由设计师执行通用验收和状态验收，最后记录问题并复测。"
    ],
    [
      "受试者",
      "建议第一轮6–8位（同类熟练与相对新手各半）；内部评审2–3位独立检查。样本用于发现问题，非统计推断。"
    ],
    [
      "准备",
      "设置新号、中期多系统号、资源充足/不足、可领/已领、限购、失败等快照；用手机测试，记录版本与帧链接。"
    ],
    [
      "主持方法",
      "仅念任务目标，不报按钮名或路径；观察首击、绕路、停顿、误触、求助；在求助后再给最少提示并记录。"
    ],
    [
      "任务结论",
      "独立成功 / 提示后成功 / 失败 / 原型不可测；计时从读完任务且界面可操作开始，结束于达成或主动放弃。"
    ],
    [
      "验收结果",
      "未测试 / 通过 / 不通过 / 原型缺失 / 不适用 / 待实机。原型缺失与待实机不能当作通过。"
    ],
    [
      "优先级",
      "P0：核心闭环或财产风险；P1：高频效率与理解；P2：低频体验优化。用例优先级不等于实际问题严重度。"
    ],
    [
      "问题等级",
      "S0 阻断或财产损失；S1 主要任务需帮助或易误操作；S2 能完成但明显绕路/困惑；S3 轻微一致性或表现问题。"
    ],
    [
      "建议门槛",
      "P0任务独立成功率目标≥90%（小样本同时报告人数）；无未解决S0/S1；所有适用P0状态有设计、可走通且通过；其余问题有责任人与计划。"
    ],
    [
      "原型限制",
      "网络、支付、扣费、真实性能只能模拟设计响应；真实防重复、时序与性能待实机复测，不在原型阶段宣称已验证。"
    ],
    [
      "来源：可用性评估",
      "https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/"
    ],
    [
      "来源：iOS游戏交互",
      "https://developer.apple.com/design/human-interface-guidelines/designing-for-games/"
    ],
    [
      "来源：Android触控目标",
      "https://support.google.com/accessibility/android/answer/7101858"
    ]
  ],
  "playerFields": [
    "玩家ID",
    "经验分组",
    "版本/设备",
    "任务ID",
    "任务结论",
    "耗时秒",
    "首击正确",
    "误触次数",
    "求助次数",
    "实际路径",
    "原话/观察",
    "难易度1-7",
    "问题ID"
  ],
  "issueFields": [
    "问题ID",
    "关联用例",
    "页面/原型链接",
    "复现步骤",
    "实际观察",
    "影响与频次",
    "等级",
    "改进建议",
    "负责人",
    "状态",
    "复测结论",
    "版本/备注"
  ]
};
