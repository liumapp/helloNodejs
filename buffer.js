// 创建一个长度为 10、且用 0 填充的 Buffer。
const buf1 = Buffer.alloc(10);

// 创建一个长度为 10、且用 0x1 填充的 Buffer。 
const buf2 = Buffer.alloc(10, 1);

// 创建一个长度为 10、且未初始化的 Buffer。
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buf3 = Buffer.allocUnsafe(10);

// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4 = Buffer.from([1, 2, 3]);

// 创建一个包含 ASCII 字节数组 [0x74, 0x65, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from('test');

// 创建一个包含 UTF-8 字节数组 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('tést', 'utf8');

/**
 * nodejs目前支持的编码
 'ascii' - 仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的。

 'utf8' - 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8 。

 'utf16le' - 2 或 4 个字节，小字节序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。

 'ucs2' - 'utf16le' 的别名。

 'base64' - Base64 编码。当从字符串创建 Buffer 时，按照 RFC4648 第 5 章的规定，这种编码也将正确地接受“URL 与文件名安全字母表”。

 'latin1' - 一种把 Buffer 编码成一字节编码的字符串的方式（由 IANA 定义在 RFC1345 第 63 页，用作 Latin-1 补充块与 C0/C1 控制码）。

 'binary' - 'latin1' 的别名。

 'hex' - 将每个字节编码为两个十六进制字符。
 */

const buf = Buffer.from('hello world', 'ascii');

// 输出 68656c6c6f20776f726c64
console.log(buf.toString('hex'));

// 输出 aGVsbG8gd29ybGQ=
console.log(buf.toString('base64'));





const arr = new Uint16Array(2);

arr[0] = 5000;
arr[1] = 4000;

// 拷贝 `arr` 的内容
const buf1 = Buffer.from(arr);

// 与 `arr` 共享内存
const buf2 = Buffer.from(arr.buffer);

// 输出: <Buffer 88 a0>
console.log(buf1);

// 输出: <Buffer 88 13 a0 0f>
console.log(buf2);

arr[1] = 6000;

// 输出: <Buffer 88 a0>
console.log(buf1);

// 输出: <Buffer 88 13 70 17>
console.log(buf2);