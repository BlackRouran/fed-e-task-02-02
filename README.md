#### 一、简答题

##### 1、Webpack 的构建流程主要有哪些环节？如果可以请尽可能详尽的描述 Webpack 打包的整个过程。

答：根据入口文件，解析我们入口文件中引入的所有模块，解析出这些引入模块所依赖的模块。，从而根据这些文件的引用关系，构成一个依赖树。然后wenbpack递归依赖树，交给配置中对应的loader去处理对应的文件，然后再输出到bundle.js中

##### 2、Loader 和 Plugin 有哪些不同？请描述一下开发 Loader 和 Plugin 的思路。

答：loader 是模块加载器，负责加载处理非 javascript文件。plugins 比loader更强大，它可以处理loader处理不了的任务，包括打包压缩等。

每一个loadef其实就是一个函数，接收对应的文件，然后返回一个js代码



