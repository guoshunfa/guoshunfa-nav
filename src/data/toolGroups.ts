interface Tool {
  name: string
  link: string
  desc: string
}

interface ToolGroups {
  [key: string]: Tool[]
}

export const toolGroups: ToolGroups = {
    "常用": [
        {'name': '飞书', 'link': 'https://www.feishu.cn/', 'desc': ''},
        {'name': 'dnspod域名控制台', 'link': 'https://console.dnspod.cn', 'desc': ''},
        {'name': '腾讯云控制台', 'link': 'https://console.cloud.tencent.com/', 'desc': ''} ,
        {'name': '阿里云控制台', 'link': 'https://homenew.console.aliyun.com/', 'desc': ''} ,
        {'name': '百度站长平台', 'link': 'https://ziyuan.baidu.com/', 'desc': ''} ,
        {'name': '微信公众号控制台', 'link': 'https://mp.weixin.qq.com/', 'desc': ''} ,
        {'name': '抖音创作者平台', 'link': 'https://creator.douyin.com/', 'desc': ''} ,
        {'name': '快手创作者平台', 'link': 'https://creator.kuaishou.com/', 'desc': ''} ,
        {'name': '小红书创作者平台', 'link': 'https://creator.xiaohongshu.com/', 'desc': ''} ,
    ],
    "API": [
        {'name': 'Java', 'link': 'https://docs.oracle.com/en/java/javase/index.html', 'desc': ''} ,
        {'name': 'Spring', 'link': 'https://spring.io/projects', 'desc': ''} ,
        {'name': 'MDN', 'link': 'https://developer.mozilla.org/zh-CN/docs/Web', 'desc': ''} ,
        {'name': 'runoob', 'link': 'https://www.runoob.com', 'desc': ''} ,
        {'name': 'React', 'link': 'https://zh-hans.reactjs.org/docs/getting-started.html', 'desc': ''} ,
        {'name': 'React Router', 'link': 'https://reactrouter.com/docs/en/v6', 'desc': ''} ,
        {'name': 'MongoDB', 'link': 'https://docs.mongodb.com', 'desc': ''} ,
        {'name': 'Vue 3.x', 'link': 'https://cn.vuejs.org/', 'desc': ''} ,
        {'name': 'element plus', 'link': 'https://element-plus.gitee.io/zh-CN/', 'desc': ''} ,
        {'name': 'Vuepress v1.x', 'link': 'https://vuepress.vuejs.org/zh/', 'desc': ''} ,
        {'name': 'Vuepress v2.x', 'link': 'https://v2.vuepress.vuejs.org/zh/', 'desc': ''} ,
        {'name': 'Vdoing', 'link': 'https://doc.xugaoyi.com/pages/793dcb/', 'desc': ''} ,
        {'name': 'jdk1.8', 'link': 'https://www.matools.com/api/java8', 'desc': ''} ,
        {'name': 'hutool', 'link': 'https://hutool.cn/', 'desc': ''} ,
        {'name': 'Linux 命令大全', 'link': 'https://www.linuxcool.com/', 'desc': ''} ,
        {'name': 'Linux命令手册', 'link': 'https://ipcmen.com/', 'desc': ''} ,
        {'name': 'docker hub', 'link': 'https://hub.docker.com/', 'desc': ''} ,
        {'name': 'docker docs', 'link': 'https://docs.docker.com/', 'desc': ''} ,
        {'name': '国内maven搜索', 'link': 'http://mvn.coderead.cn/', 'desc': ''} ,
        {'name': '源码阅读网', 'link': 'https://www.coderead.cn/', 'desc': ''} ,
        {'name': 'Jar包搜索', 'link': 'http://www.java2s.com/Code/Jar/CatalogJar.htm', 'desc': ''} ,
        {'name': 'css学习', 'link': 'https://zh.learnlayout.com/', 'desc': ''} ,
    ],
    "运维管理": [
        {'name': 'dnspod域名控制台', 'link': 'https://console.dnspod.cn', 'desc': ''},
        {'name': '腾讯云控制台', 'link': 'https://console.cloud.tencent.com/', 'desc': ''} ,
        {'name': '阿里云控制台', 'link': 'https://homenew.console.aliyun.com/', 'desc': ''} ,
        {'name': '微信公众号控制台', 'link': 'https://mp.weixin.qq.com/', 'desc': ''} ,
        {'name': '百度站长平台', 'link': 'https://ziyuan.baidu.com/', 'desc': ''} ,
    ],
    "大佬博客": [
        {'name': 'Java 全栈知识体系', 'link': 'https://www.pdai.tech/', 'desc': ''} ,
        {'name': 'Java 成神之路', 'link': 'http://hollischuang.gitee.io/tobetopjavaer/#/menu', 'desc': ''} ,
        {'name': 'Bash 脚本教程', 'link': 'https://wangdoc.com/bash/', 'desc': ''} ,
        {'name': 'ES6教程', 'link': 'http://es6.ruanyifeng.com/', 'desc': ''} ,
        {'name': '腾讯云开发者手册', 'link': 'https://cloud.tencent.com/developer/devdocs', 'desc': ''} ,
        {'name': '菜鸟教程', 'link': 'https://www.runoob.com/', 'desc': ''} ,
        {'name': '现代JavaScript教程', 'link': 'https://zh.javascript.info', 'desc': ''} ,
    ],
    "产品设计": [
        {'name': '产品大牛', 'link': 'http://www.pmdaniu.com/', 'desc': ''} ,
        {'name': '磨刀', 'link': 'https://modao.cc/pricing', 'desc': ''} ,
        {'name': '创造师导航', 'link': 'http://chuangzaoshi.com/', 'desc': ''} ,
        {'name': '设计师网址导航', 'link': 'http://hao.uisdc.com/', 'desc': ''} ,
        {'name': 'uimovement', 'link': 'https://uimovement.com/', 'desc': ''} ,
        {'name': 'awwwards', 'link': 'https://www.awwwards.com/', 'desc': ''} ,
        {'name': 'dribbble', 'link': 'https://dribbble.com/', 'desc': ''} ,
        {'name': 'Bēhance', 'link': 'https://www.behance.net/', 'desc': ''} ,
        {'name': 'Logojoy', 'link': 'https://logojoy.com/', 'desc': ''} ,
        {'name': 'brandmark', 'link': 'http://brandmark.io/', 'desc': ''} ,
        {'name': 'instant', 'link': 'https://instantlogodesign.com/', 'desc': ''} ,
        {'name': 'logo-maker', 'link': 'https://www.designevo.com/logo-maker/', 'desc': ''} ,
        {'name': 'coolors', 'link': 'https://coolors.co/', 'desc': ''} ,
        {'name': 'colorhunt', 'link': 'http://colorhunt.co/', 'desc': ''} ,
        {'name': 'uigradients', 'link': 'https://uigradients.com/#SummerDog', 'desc': ''} ,
        {'name': 'designcap', 'link': 'https://www.designcap.com/', 'desc': ''} ,
        {'name': 'Flat UI 色表', 'link': 'https://flatuicolors.com/', 'desc': ''} ,
        {'name': '0to255', 'link': 'https://www.0to255.com/', 'desc': ''} ,
        {'name': 'nord ', 'link': 'https://github.com/arcticicestudio/nord', 'desc': ''} ,
        {'name': 'colorkitty', 'link': 'https://colorkitty.com/', 'desc': ''} ,
        {'name': 'design.youzan', 'link': 'http://design.youzan.com/', 'desc': ''} ,
        {'name': '稿定设计', 'link': 'https://www.gaoding.com/', 'desc': ''} ,
        {'name': '来画视频', 'link': 'https://www.laihua.com/', 'desc': ''} ,
        {'name': 'Arkie 海报制作工具', 'link': 'https://www.arkie.cn/', 'desc': ''} ,
        {'name': '比格 PPT', 'link': 'http://www.tretars.com/', 'desc': ''} ,
        {'name': '优品 PPT', 'link': 'http://www.ypppt.com/', 'desc': ''} ,
        {'name': 'processon在线作图', 'link': 'https://www.processon.com/', 'desc': ''} ,
        {'name': '百度脑图', 'link': 'https://naotu.baidu.com', 'desc': ''} ,
        {'name': 'uigradients', 'link': 'https://uigradients.com/', 'desc': ''} ,
        {'name': 'freepik', 'link': 'https://www.freepik.com/', 'desc': ''} ,
        {'name': '觅元素', 'link': 'http://www.51yuansu.com/', 'desc': ''} ,
        {'name': '搞定设计', 'link': 'https://www.gaoding.com/', 'desc': ''} ,
        {'name': '站酷', 'link': 'https://www.zcool.com.cn/', 'desc': ''} ,
        {'name': '花瓣', 'link': 'https://huaban.com/', 'desc': ''} ,
        {'name': '虎克', 'link': 'https://huke88.com/', 'desc': ''} ,
        {'name': 'beTheme', 'link': 'https://themes.muffingroup.com/be/splash/', 'desc': ''} ,
        {'name': '素材图片和视频', 'link': 'https://www.pexels.com/zh-cn/', 'desc': ''} ,
        {'name': '图片集', 'link': 'https://zyj_yida.gitee.io/pic/', 'desc': ''} ,
        {'name': 'PNG图片素材资源', 'link': 'https://www.pngsucai.com/', 'desc': ''} ,
        {'name': '高清免费图片', 'link': 'https://www.pexels.com/', 'desc': ''} ,
        {'name': '高清免费图片 2', 'link': 'https://unsplash.com/', 'desc': ''} ,
        {'name': 'Unsplash', 'link': 'https://unsplash.com/', 'desc': ''} ,
        {'name': 'iconfont', 'link': 'https://www.iconfont.cn/', 'desc': ''} ,
        {'name': 'Ikonate', 'link': 'https://github.com/mikolajdobrucki/ikonate', 'desc': ''} ,
        {'name': 'remixicon', 'link': 'https://remixicon.com/', 'desc': ''} ,
        {'name': 'feather', 'link': 'https://github.com/feathericons/feather', 'desc': ''} ,
        {'name': 'undraw', 'link': 'https://undraw.co/illustrations', 'desc': ''} ,
        {'name': 'icomoon', 'link': 'https://icomoon.io/', 'desc': ''} ,
        {'name': 'cssicon', 'link': 'http://cssicon.space/#/', 'desc': ''} ,
        {'name': 'CSS triangle generator', 'link': 'http://apps.eky.hk/css-triangle-generator/', 'desc': ''} ,
        {'name': 'clippy', 'link': 'http://bennettfeely.com/clippy/', 'desc': ''} ,
        {'name': 'Lorem Picsum', 'link': 'https://picsum.photos/', 'desc': ''} ,
        {'name': 'emoji表情', 'link': 'https://emojipedia.org/', 'desc': ''} ,
        {'name': 'emoji表情备忘录', 'link': 'https://www.webfx.com/tools/emoji-cheat-sheet', 'desc': ''} ,
        {'name': 'gitmoji', 'link': 'https://github.com/carloscuesta/gitmoji', 'desc': ''} ,
        {'name': '微交互', 'link': 'http://aliscued.lofter.com/', 'desc': ''} ,
        {'name': 'Little Big Details', 'link': 'http://littlebigdetails.com/', 'desc': ''} ,
        {'name': 'cruip', 'link': 'https://cruip.com/', 'desc': ''} ,
        {'name': 'Comixify', 'link': 'https://comixify.ii.pw.edu.pl/', 'desc': ''} ,
        {'name': 'taiko-web', 'link': 'https://github.com/bui/taiko-web', 'desc': ''} ,
    ],
    "娱乐": [
        {'name': '慕课网', 'link': 'https://www.imooc.com/', 'desc': ''} ,
        {'name': '妙味课堂', 'link': 'https://www.miaov.com/', 'desc': ''} ,
        {'name': '中国大学MOOC', 'link': 'https://www.icourse163.org/', 'desc': ''} ,
        {'name': 'bilibili', 'link': 'https://www.bilibili.com/', 'desc': ''} ,
        {'name': 'egghead', 'link': 'http://egghead.io', 'desc': ''} ,
        {'name': 'CCTV、卫视高清直播', 'link': 'http://ivi.bupt.edu.cn/', 'desc': ''} ,
        {'name': 'SoBooks', 'link': 'https://sobooks.cc/', 'desc': ''} ,
        {'name': '鸠摩搜书', 'link': 'https://www.jiumodiary.com/', 'desc': ''} ,
        {'name': '全历史', 'link': 'https://www.allhistory.com/', 'desc': ''} ,
        {'name': '奇趣网站收藏家', 'link': 'https://fuun.fun/', 'desc': ''} ,
        {'name': '帮你百度一下', 'link': 'http://www.baidu-x.com/', 'desc': ''} ,
        {'name': '国际版', 'link': 'http://lmgtfy.com/', 'desc': ''} ,
        {'name': 'wallhaven', 'link': 'https://alpha.wallhaven.cc/', 'desc': ''} ,
        {'name': 'URL 地址播放 Emojis 动画', 'link': 'http://matthewrayfield.com/articles/animating-urls-with-javascript-and-emojis/#🌖', 'desc': ''} ,
        {'name': "Can't Unsee", 'link': 'https://cantunsee.space/', 'desc': ''} ,
        {'name': 'ggtalk', 'link': 'https://talk.swift.gg/', 'desc': ''} ,
        {'name': 'awesome-comment', 'link': 'https://github.com/Blankj/awesome-comment', 'desc': ''} ,
        {'name': 'text-img', 'link': 'https://www.text-image.com/index.html', 'desc': ''} ,
        {'name': 'weird-fonts', 'link': 'https://github.com/beizhedenglong/weird-fonts', 'desc': ''} ,
        {'name': 'snake', 'link': 'https://github.com/epidemian/snake', 'desc': ''} ,
        {'name': 'zero-width-lib', 'link': 'https://github.com/yuanfux/zero-width-lib', 'desc': ''} ,
        {'name': 'abbreviations', 'link': 'https://www.abbreviations.com/', 'desc': ''} ,
        {'name': 'magi', 'link': 'https://magi.com/', 'desc': ''} ,
        {'name': '诺基亚短信图片生成器', 'link': 'https://zzkia.noddl.me:8020/', 'desc': ''} ,
        {'name': 'ENFI 下载器', 'link': 'https://www.macbl.com/app/internet/enfi', 'desc': ''} ,
        {'name': 'macapp', 'link': 'https://www.macapp.so/', 'desc': ''} ,
        {'name': 'appstorrent', 'link': 'https://appstorrent.ru/32-pixelmator-pro.html', 'desc': ''} ,
        {'name': '大力盘', 'link': 'https://dalipan.com/', 'desc': ''} ,
    ],
    "其他工具": [
        {'name': 'JSON格式化','link': 'https://www.bejson.com/jsonviewernew/','desc': ''},
        {'name': '时间戳转换','link': 'http://tool.chinaz.com/tools/unixtime.aspx','desc': ''},
        {'name': 'codepen','link': 'https://codepen.io/','desc': ''},
        {'name': 'BootCDN','link': 'https://www.bootcdn.cn','desc': ''},
        {'name': 'Can I use','link': 'https://caniuse.com/','desc': '查看属性和方法的兼容性'},
        {'name': '30 seconds of code','link': 'https://30secondsofcode.org/','desc': '收集了许多有用的代码小片段'},
        {'name': 'codepen','link': 'https://codepen.io','desc': '在线代码编辑与演示'},
        {'name': 'codesandbox','link': 'https://codesandbox.io','desc': '内嵌VSCode的在线IDE'},
        {'name': '手册网','link': 'https://www.shouce.ren/','desc': ''},
        {'name': 'JSON格式化','link': 'https://www.bejson.com/jsonviewernew/','desc': ''},
        {'name': '时间戳转换','link': 'http://tool.chinaz.com/tools/unixtime.aspx','desc': ''},
        {'name': '单位转换','link': 'https://www.convertworld.com/zh-hans/','desc': ''},
        {'name': '文件转换器','link': 'https://convertio.co/zh/','desc': ''},
        {'name': '代码/文本 对比工具','link': 'https://www.diffchecker.com/','desc': ''},
        {'name': 'PDF 转 Markdown','link': 'https://pdf2md.morethan.io/','desc': ''},
        {'name': '加密/解密','link': 'http://tool.chinaz.com/tools/textencrypt.aspx','desc': ''},
        {'name': 'VideoFk','link': 'https://www.videofk.com/','desc': 'VideoFk 视频在线解析下载'},
        {'name': 'vectorizer','link': 'https://www.vectorizer.io/','desc': '真正的 png 转 svg 神器'},
        {'name': 'tinypng图片压缩','link': 'https://tinypng.com','desc': '压缩png很有用'},
        {'name': '图片压缩','link': 'https://docsmall.com/','desc': ''},
        {'name': 'Squoosh','link': 'https://squoosh.app/','desc': '谷歌出品在线免费图片压缩工具'},
        {'name': 'CSS Tricks','link': 'http://css-tricks.neatbang.com/','desc': 'CSS技巧收集与演示'},
        {'name': 'CSS生成器', 'link': 'https://neumorphism.io/', 'desc': ''} ,
        {'name': 'CSS渐变生成器', 'link': 'https://www.colorzilla.com/gradient-editor/', 'desc': ''} ,
        {'name': 'CSS3-Box Shadow(阴影)', 'link': 'https://www.html.cn/tool/css3Preview/Box-Shadow.html', 'desc': ''} ,
        {'name': '贝塞尔曲线生成器', 'link': 'https://cubic-bezier.com', 'desc': ''} ,
        {'name': '花纹背景生成器', 'link': 'http://www.heropatterns.com/', 'desc': ''} ,
        {'name': '花纹背景css', 'link': 'https://github.com/bansal-io/pattern.css', 'desc': ''} ,
        {'name': 'jsDelivr', 'link': 'http://www.jsdelivr.com/', 'desc': ''} ,
        {'name': 'unpkg', 'link': 'https://unpkg.com/', 'desc': ''} ,
        {'name': '正则可视化', 'link': 'https://regex101.com/', 'desc': ''} ,
        {'name': '反编译 Jar', 'link': 'http://www.decompiler.com', 'desc': ''} ,
        {'name': '反编译 Class', 'link': 'http://javare.cn/De', 'desc': ''} ,
        {'name': '代码图片生成器', 'link': 'https://carbon.now.sh/', 'desc': ''} ,
        {'name': '图片转文字', 'link': 'https://web.baimiaoapp.com/', 'desc': ''} ,
        {'name': 'JSON 转换 Excel', 'link': 'http://j2e.kpoda.com', 'desc': ''} ,
        {'name': '精校 完整 极致 Windows系统下载仓储站', 'link': 'https://www.hellowindows.cn/', 'desc': ''} ,
        {'name': '流程图设计', 'link': 'https://app.diagrams.net/', 'desc': ''} ,
    ],
}