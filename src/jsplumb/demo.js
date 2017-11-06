let defaultJsPlumb;
const container = document.getElementById('canvas');
const process = ["厨、卫墙地施工", "墙面腻子施工", "场地移交", "吊顶基础", "厨卫防水", "吊顶封板"]
const options = {
    Container: 'canvas',
    Connector: ["Straight"],//连接器
    Endpoint: ["Dot", { radius: 5, cssClass: "transparent" }],
    EndpointStyle: { fill: "transparent" },
    ConnectionOverlays: [
        //连接 上的覆盖物（Overlays） 1.Arrow 箭头 2.Label 标签 3.Diamond 钻石 4.PlainArrow 平整的箭头
        ["Arrow", { //Overlay 类型 1. 
            location: 1,//箭头的位置 1是目标 0是源
            id: "arrow",
            width: 10,//箭头的宽度
            length: 12, //箭尖到箭尾的距离
            direction: 1,//箭头的方向  默认1,(-1,1)
            foldback: .6 //多远沿箭头的尾巴点折返到轴 用于制作箭尾凹陷效果 （0-1）值越小凹陷程度越高
        }]
    ],
};

jsPlumb.ready(function () {
    defaultJsPlumb = jsPlumb.getInstance();
    defaultJsPlumb.importDefaults(options);
})

/**
 * @description 创建一个新的元素
 */
function addElement() {
    let random = Math.floor(Math.random() * 10) - 1;
    if (random >= 6) {
        random = 5
    }
    if (random < 0)
        random = 0
    console.log(random)
    let elem = document.createElement("div");
    let sourceDot = document.createElement("span");
    sourceDot.classList.add('sourceDot');
    elem.id = Date.now().toString();
    elem.classList.add('element');
    elem.textContent = process[random];
    elem.appendChild(sourceDot);
    container.appendChild(elem);
    jsPlumbDecorate(elem);
}

/**
 * @description 装饰
 * @param {*} elem 
 */
function jsPlumbDecorate(elem) {
    //元素启用拖动功能
    defaultJsPlumb.draggable(elem);
    //添加锚点
    // defaultJsPlumb.addEndpoints(elem, [{ anchor: "Continuous" }], endpointOpts)
    //使新的元素同时作为源和目标
    defaultJsPlumb.makeTarget(elem, {
        maxConnections: 2,
        allowLoopback: false,//防止环回连接
        anchor: "Continuous"
    });
    defaultJsPlumb.makeSource(elem, {
        filter: '.sourceDot',
        anchor: "Continuous"
    });
}