# Image Formats
常用图像格式研（测）究（评）

## 常用图像格式
### [PNG](https://baike.baidu.com/item/png/174154)
PNG（Portable Network Graphics）是一种采用无损压缩算法的位图格式，其设计目的是试图替代 GIF 和 TIFF 文件格式，同时增加一些 GIF 文件格式所不具备的特性。PNG使用从 LZ77 派生的无损数据压缩算法，一般应用于 JAVA 程序、网页或 S60 程序中，原因是它压缩比高，生成文件体积小。

### [JPEG](https://baike.baidu.com/item/JPEG%E6%A0%BC%E5%BC%8F/3462770)
JPEG（Joint Photographic Experts Group）即联合图像专家组，是用于连续色调静态图像压缩的一种标准，文件后缀名为 .jpg 或 .jpeg，是最常用的图像文件格式。其主要是采用预测编码（DPCM）、离散余弦变换（DCT）以及熵编码的联合编码方式，以去除冗余的图像和彩色数据，属于有损压缩格式，它能够将图像压缩在很小的储存空间，一定程度上会造成图像数据的损伤。

### [WebP](https://baike.baidu.com/item/webp%E6%A0%BC%E5%BC%8F/4077671)
WebP（Web Picture）最初在2010年发布，目标是减少文件大小，但达到和 JPEG 格式相同的图片质量，希望能够减少图片档在网络上的发送时间。2011年11月8日，Google 开始让 WebP 支持无损压缩和透明色（alpha 通道）的功能，而在2012年8月16日的参考实做 libwebp 0.2.0中正式支持。根据 Google 较早的测试，WebP 的无损压缩比网络上找到的 PNG 档少了45%的文件大小，即使这些 PNG 档在使用 pngcrush 和 PNGOUT 处理过，WebP 还是可以减少28%的文件大小。

### [SVG](https://baike.baidu.com/item/SVG/63178)
SVG（Scalable Vector Graphics，可缩放矢量图形）是 W3C 推出的基于 XML 的二维矢量图形标准。SVG 可以提供高质量的矢量图形渲染，同时由于支持 JavaScript 和文档对象模型，SVG 图形通常具有强大的交互能力。另一方面，SVG 作为 W3C 所推荐的基于 XML 的开放标准，能够与其他网络技术进行无缝集成。

## [格式比较](https://juejin.cn/post/6844903625731358727)
| 格式 | 优点 | 缺点 | 适用场景 |
|----|----|----|----|
| JPG |色彩丰富，文件小。 | 有损压缩，反复保存图片质量下降明显。 | 色彩丰富的图片 / 渐变图像 |
| PNG | 无损压缩，支持透明，简单图片尺寸小。 | 不支持动画，色彩丰富的图片尺寸大。 | logo / icon / 透明图 |
| WebP | 文件小，支持有损和无损压缩，支持动画、透明。 | 浏览器兼容性不好 | 支持 WebP 格式的 App 和 Webview |

## 实际测评
