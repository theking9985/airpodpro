console.log('test')

const controller = new ScrollMagic.Controller();

const images = [
    "../../assets/01-hero/0000.jpg",
    "../../assets/01-hero/0001.jpg",
    "../../assets/01-hero/0002.jpg",
    "../../assets/01-hero/0003.jpg",
    "../../assets/01-hero/0004.jpg",
    "../../assets/01-hero/0005.jpg",
    "../../assets/01-hero/0006.jpg",
    "../../assets/01-hero/0007.jpg",
    "../../assets/01-hero/0008.jpg",
    "../../assets/01-hero/0009.jpg",
    "../../assets/01-hero/00010.jpg",
    "../../assets/01-hero/00011.jpg",
    "../../assets/01-hero/00012.jpg",
    "../../assets/01-hero/00013.jpg",
    "../../assets/01-hero/00014.jpg",
    "../../assets/01-hero/00015.jpg",
    "../../assets/01-hero/00016.jpg",
    "../../assets/01-hero/00017.jpg",
    "../../assets/01-hero/00018.jpg",
    "../../assets/01-hero/00019.jpg",
    "../../assets/01-hero/00020.jpg",
    "../../assets/01-hero/00021.jpg",
    "../../assets/01-hero/00022.jpg",
    "../../assets/01-hero/00023.jpg",
    "../../assets/01-hero/00024.jpg",
    "../../assets/01-hero/00025.jpg",
    "../../assets/01-hero/00026.jpg",
    "../../assets/01-hero/00027.jpg",
    "../../assets/01-hero/00028.jpg",
    "../../assets/01-hero/00029.jpg",
    "../../assets/01-hero/00030.jpg",
    "../../assets/01-hero/00031.jpg",
    "../../assets/01-hero/00032.jpg",
    "../../assets/01-hero/00033.jpg",
    "../../assets/01-hero/00034.jpg",
    "../../assets/01-hero/00035.jpg",
    "../../assets/01-hero/00036.jpg",
    "../../assets/01-hero/00037.jpg",
    "../../assets/01-hero/00038.jpg",
    "../../assets/01-hero/00039.jpg",
    "../../assets/01-hero/00040.jpg",
    "../../assets/01-hero/00041.jpg",
    "../../assets/01-hero/00042.jpg",
    "../../assets/01-hero/00043.jpg",
    "../../assets/01-hero/00044.jpg",
    "../../assets/01-hero/00045.jpg",
    "../../assets/01-hero/00046.jpg",
    "../../assets/01-hero/00047.jpg",
    "../../assets/01-hero/00048.jpg",
    "../../assets/01-hero/00049.jpg",
    "../../assets/01-hero/00050.jpg",
    "../../assets/01-hero/00051.jpg",
    "../../assets/01-hero/00052.jpg",
    "../../assets/01-hero/00053.jpg",
    "../../assets/01-hero/00054.jpg",
    "../../assets/01-hero/00055.jpg",
    "../../assets/01-hero/00056.jpg",
    "../../assets/01-hero/00057.jpg",
    "../../assets/01-hero/00058.jpg",
    "../../assets/01-hero/00059.jpg",
    "../../assets/01-hero/00060.jpg",
    "../../assets/01-hero/00061.jpg",
    "../../assets/01-hero/00062.jpg",
    "../../assets/01-hero/00063.jpg",
    "../../assets/01-hero/00064.jpg",
    "../../assets/01-hero/00065.jpg",
    "../../assets/01-hero/00066.jpg",
    "../../assets/01-hero/00067.jpg",
    "../../assets/01-hero/00068.jpg",
    "../../assets/01-hero/00069.jpg",
    "../../assets/01-hero/00070.jpg",
    "../../assets/01-hero/00071.jpg",
    "../../assets/01-hero/00072.jpg",
    "../../assets/01-hero/00073.jpg",
    "../../assets/01-hero/00074.jpg",
    "../../assets/01-hero/00075.jpg",
    "../../assets/01-hero/00076.jpg",
    "../../assets/01-hero/00077.jpg",
    "../../assets/01-hero/00078.jpg",
    "../../assets/01-hero/00079.jpg",
    "../../assets/01-hero/00080.jpg",
    "../../assets/01-hero/00081.jpg",
    "../../assets/01-hero/00082.jpg",
    "../../assets/01-hero/00083.jpg",
    "../../assets/01-hero/00084.jpg",
    "../../assets/01-hero/00085.jpg",
    "../../assets/01-hero/00086.jpg",
    "../../assets/01-hero/00087.jpg",
    "../../assets/01-hero/00088.jpg",
    "../../assets/01-hero/00089.jpg",
    "../../assets/01-hero/00090.jpg",
    "../../assets/01-hero/00091.jpg",
    "../../assets/01-hero/00092.jpg",
    "../../assets/01-hero/00093.jpg",
    "../../assets/01-hero/00094.jpg",
    "../../assets/01-hero/00095.jpg",
    "../../assets/01-hero/00096.jpg",
    "../../assets/01-hero/00097.jpg",
    "../../assets/01-hero/00098.jpg",
    "../../assets/01-hero/00099.jpg",
    "../../assets/01-hero/000100.jpg",
    "../../assets/01-hero/000101.jpg",
    "../../assets/01-hero/000102.jpg",
    "../../assets/01-hero/000103.jpg",
    "../../assets/01-hero/000104.jpg",
    "../../assets/01-hero/000105.jpg",
    "../../assets/01-hero/000106.jpg",
    "../../assets/01-hero/000107.jpg",
    "../../assets/01-hero/000108.jpg",
    "../../assets/01-hero/000109.jpg",
    "../../assets/01-hero/000110.jpg",
    "../../assets/01-hero/000111.jpg",
    "../../assets/01-hero/000112.jpg",
    "../../assets/01-hero/000113.jpg",
    "../../assets/01-hero/000114.jpg",
    "../../assets/01-hero/000115.jpg",
    "../../assets/01-hero/000116.jpg",
    "../../assets/01-hero/000117.jpg",
    "../../assets/01-hero/000118.jpg",
    "../../assets/01-hero/000119.jpg",
    "../../assets/01-hero/000120.jpg",
    "../../assets/01-hero/000121.jpg",
    "../../assets/01-hero/000122.jpg",
    "../../assets/01-hero/000123.jpg",
    "../../assets/01-hero/000124.jpg",
    "../../assets/01-hero/000125.jpg",
    "../../assets/01-hero/000126.jpg",
    "../../assets/01-hero/000127.jpg",
    "../../assets/01-hero/000128.jpg",
    "../../assets/01-hero/000129.jpg",
    "../../assets/01-hero/000130.jpg",
    "../../assets/01-hero/000131.jpg",
    "../../assets/01-hero/000132.jpg",
    "../../assets/01-hero/000133.jpg",
    "../../assets/01-hero/000134.jpg",
    "../../assets/01-hero/000135.jpg",
    "../../assets/01-hero/000136.jpg",
    "../../assets/01-hero/000137.jpg",
    "../../assets/01-hero/000138.jpg",
    "../../assets/01-hero/000139.jpg",
    "../../assets/01-hero/000140.jpg",
    "../../assets/01-hero/000141.jpg",
    "../../assets/01-hero/000142.jpg",
    "../../assets/01-hero/000143.jpg",
    "../../assets/01-hero/000144.jpg",
    "../../assets/01-hero/000145.jpg",
    "../../assets/01-hero/000146.jpg",
    "../../assets/01-hero/000147.jpg"
];

const imageObject = { currentImage: 0 };

const tween = TweenMax.to(imageObject, 0.5, {
    currentImages: images.length - 1,
    roundProps: "currentImage",
    repeat: 0,
    immediateRender: true,
    ease: Linear.easeNone,
    onUpdate: function () {
        $("#imageTD").attr("src", images[imageObject.currentImage]);
    }
})

const scene = new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    duration: 2000
})
    .setPin("#pin1")
    // .setTween(tween)
    .addIndicators()
    .addTo(controller);

const triggerHook = scene.triggerHook();
scene.triggerHook(0);




















