!(function () {
  var t = {
      625: function () {
        Vue.component("header-login", {
          props: {},
          data: function () {
            return {};
          },
          created: function () {},
          computed: {},
          watch: {},
          methods: {},
          template: '\n    <div class="header-login">\n    </div>\n    ',
        });
      },
      913: function () {
        Vue.component("loading", {
          props: {},
          data: function () {
            return {};
          },
          created: function () {},
          computed: {},
          watch: {},
          methods: {},
          template:
            '\n    <div class="loading">\n        Loading...\n    </div>\n    ',
        });
      },
      230: function () {
        Vue.component("logo-img", {
          props: {},
          data: function () {
            return {
              items: [
                "https://image.uisdc.com/wp-content/uploads/2022/11/jinxi-xiaoji-tx.png",
                "https://image.uisdc.com/wp-content/uploads/hao.uisdc.com/logo-img-3.png",
              ],
            };
          },
          created: function () {},
          computed: {
            comSlot: function () {
              for (var t = this.items.length, e = [], n = 1; n <= t; n++)
                e.push("item-" + n);
              return e;
            },
          },
          watch: {},
          methods: {
            htmlItem: function (t) {
              return (
                '<i class="thumb thumb-img thumb-round"><img src="' +
                t +
                '"></i>'
              );
            },
          },
          template:
            '\n    <div class="logo-img">\n        <slide-up cls="un-slide-up" :total="items.length+\'\'" delay="3000">\n            <template #[comSlot[index]] v-for="(item,index) in items">\n                <div class="li-item" v-html="htmlItem(item)"></div>\n            </template>\n        </slide-up>\n    </div>\n    ',
        });
      },
      759: function () {
        var t = jQuery;
        Vue.component("search-form", {
          props: { keyword: { type: String, default: "", require: !1 } },
          data: function () {
            return {
              titles: ["百度", "Google", "优设网", "优优教程"],
              urls: [
                "https://www.baidu.com/s",
                "https://www.google.com/search",
                "https://www.uisdc.com",
                "https://uiiiuiii.com",
              ],
              keynames: ["wd", "q", "s", "s"],
              btns: ["百度一下", "Google", "优设搜索", "优优搜索"],
              current: 0,
            };
          },
          created: function () {},
          computed: {
            comUrl: function () {
              return this.urls[this.current];
            },
            comName: function () {
              return this.keynames[this.current];
            },
            comBtn: function () {
              return this.btns[this.current];
            },
          },
          methods: {
            setCurrent: function (e) {
              (this.current = e),
                this.$nextTick(function () {
                  t(".search-form .s").trigger("focus");
                });
            },
            currentCls: function (t) {
              return t == this.current ? "current" : "";
            },
          },
          template:
            '\n    <div class="search-form">\n        <div class="s-titles">\n            <i class="item item-txt">常用</i>\n            <template v-for="(title, index) in titles">\n                <i class="item" :class="currentCls(index)" @click="setCurrent(index)">\n                    <i class="item-a">\n                        {{title}}\n                    </i>\n                </i>\n            </template>\n        </div>\n        <div class="s-form">\n            <form :action="comUrl" method="get" target="_blank">\n                <v-input type="text" autocomplete="off" class="s" :input_placeholder="keyword" :val="keyword" :name="comName"></v-input>\n                <a class="hotsearch" href="https://hot.uisdc.com/" target="_blank"><i class="ico icon-icon-group-hot"></i> 热搜榜</a>\n                <button type="submit" class="s-btn">{{comBtn}}</button>\n            </form>\n        </div>\n    </div>\n    ',
        });
      },
      506: function () {
        Vue.component("slide-up", {
          props: {
            total: { type: String, required: !0, default: 0 },
            delay: { type: String, required: !1, default: "2000" },
            cls: { type: String, required: !1, default: "" },
          },
          data: function () {
            return { timer: 0, currentIndex: 1 };
          },
          created: function () {
            this.$nextTick(this.go);
          },
          computed: {
            comTotal: function () {
              return this.total - 0;
            },
          },
          methods: {
            go: function () {
              this.timer = setInterval(this.autoPlay, this.delay - 0);
            },
            stop: function () {
              clearInterval(this.timer);
            },
            autoPlay: function () {
              this.currentIndex++,
                this.currentIndex > this.total && (this.currentIndex = 1);
            },
            slotName: function (t) {
              return "item-" + t;
            },
          },
          template:
            '\n    <div class="slide-up" :class="cls" @mouseenter="stop" @mouseleave="go">\n        <transition-group tag="ul" class="slide-ul" name="list">\n            <li v-for="index in comTotal" :key="index" v-show="index==currentIndex" :class="{current:index==currentIndex}">\n                <slot :name="slotName(index)"></slot>\n            </li>\n        </transition-group>\n    </div>\n    ',
        });
      },
      846: function () {
        Vue.component("uisdc-ai", {
          props: {},
          data: function () {
            return { visible: !1, items: [] };
          },
          created: function () {
            $.ajax({
              url: "https://www.uisdc.com/ajax.php?action=get_ai_content",
              type: "GET",
              dataType: "json",
              success: function (t) {
                t.data && ((this.items = t.data), (this.visible = !0));
              }.bind(this),
            });
          },
          computed: {
            comDate: function () {
              var t = new Date();
              return (
                t.getFullYear() +
                "年" +
                (t.getMonth() + 1) +
                "月" +
                t.getDate() +
                "日"
              );
            },
          },
          watch: {},
          methods: {
            asAttr: function (t) {
              return (t = (t = t.replace(/</g, "&lt;")).replace(
                />/g,
                "&gt;"
              )).replace(/"/g, "&quot;");
            },
            getThumbPos: function (t) {
              return "thumb-pos-" + t.pos;
            },
          },
          template:
            '\n    <div class="uisdc-posts uisdc-ai part-cat-block" v-if="visible==true">\n        <h2 class="c-title">\n            <div class="l">\n                <strong><a href="https://www.uisdc.com/tag/aigc" target="_blank">AIGC最新文章</a></strong>\n            </div>\n            <div class="r">\n                <div is="uisdc-news-pc"></div>\n                <a href="https://www.uisdc.com/tag/aigc" target="_blank" class="btn a-more">更多 <i class="icon-right ico-more"></i></a>\n            </div>\n        </h2>\n        <div class="c-content">\n            <div class="c-loop c-loop-website flex">\n            <template v-for="(item,index) in items">\n                <div class="part-item-website f-item p-item post-item">\n                    <a :href="item.url" target="_blank" class="f-box">\n                        <div class="item-thumb">\n                            <i class="thumb thumb-img" :class="getThumbPos(item)">\n                                <img :src="item.img" :alt="asAttr(item.title)">\n                            </i>\n                        </div>\n                        <h3 class="item-title">\n                            <strong class="title" v-html="item.title"></strong>\n                        </h3>\n                        <div class="item-tag">\n                            <i class="tag">最新文章 No.{{(index + 1)}}</i>\n                        </div>\n                    </a>\n                </div>\n            </template>\n            </div>\n        </div>\n    </div>\n    ',
        });
      },
      829: function () {
        Vue.component("uisdc-books", {
          props: {},
          data: function () {
            return { visible: !1, items: [] };
          },
          created: function () {
            $.ajax({
              url: "https://www.uisdc.com/ajax.php?action=get_books&num=6",
              type: "GET",
              dataType: "json",
              success: function (t) {
                t.data && ((this.items = t.data), (this.visible = !0));
              }.bind(this),
            });
          },
          computed: {
            comDate: function () {
              var t = new Date();
              return (
                t.getFullYear() +
                "年" +
                (t.getMonth() + 1) +
                "月" +
                t.getDate() +
                "日"
              );
            },
          },
          watch: {},
          methods: {
            asAttr: function (t) {
              return (t = (t = t.replace(/</g, "&lt;")).replace(
                />/g,
                "&gt;"
              )).replace(/"/g, "&quot;");
            },
            getThumbPos: function (t) {
              return "thumb-pos-" + t.pos;
            },
          },
          template:
            '\n    <div class="uisdc-books part-cat-block part-cat-block-book" v-if="visible==true">\n        <h2 class="c-title">\n            <div class="l">\n                <strong><a href="https://hot.uisdc.com/book" target="_blank">最新图书</a></strong>\n            </div>\n            <div class="r">\n                <div is="uisdc-news-pc"></div>\n            </div>\n        </h2>\n        <div class="c-content">\n            <div class="c-loop c-loop-website flex">\n            <template v-for="(item,index) in items">\n                <div class="part-item-book f-item p-item">\n                    <div class="p-item-wrap">\n                    <a :href="item.url" target="_blank" class="f-box">\n                        <div class="item-thumb">\n                            <i class="thumb thumb-img" :class="getThumbPos(item)">\n                                <img :src="item.img" :alt="asAttr(item.title)">\n                            </i>\n                        </div>\n                        <h3 class="item-title">\n                            <strong class="title" v-html="item.title"></strong>\n                        </h3>\n                        <div class="item-desc" v-html="item.desc"></div>\n                        <template v-if="item.avatars.length>0">\n                            <div class="item-avatars">\n                                <div class="free-imgs">\n                                <template v-for="(avatar,index) in item.avatars">\n                                    <i v-if="index==0" class="avatar"><i class="thumb thumb-img"><img :src="avatar" /></i></i>\n                                </template>\n                                </div>\n                                <h5 class="free-txt">Ta们已<i class="highlight">免费</i>获得</h5>\n                            </div>\n                        </template>\n                        <div class="item-btns">\n                            <i class="btn btn-blue">京东购书 <i class="icon-icon-2"></i></i>\n                        </div>\n                    </a>\n                    <a href="https://www.uisdc.com/comment-prize" target="_blank" class="gocp btn btn-orange">评论赠书</a>\n                    </div>\n                </div>\n            </template>\n            </div>\n        </div>\n    </div>\n    ',
        });
      },
      760: function () {
        Vue.component("uisdc-font", {
          props: {},
          data: function () {
            return { visible: !1, items: [] };
          },
          created: function () {
            $.ajax({
              url: "https://www.uisdc.com/ajax.php?action=get_font_content",
              type: "GET",
              dataType: "json",
              success: function (t) {
                t.data && ((this.items = t.data), (this.visible = !0));
              }.bind(this),
            });
          },
          computed: {
            comDate: function () {
              var t = new Date();
              return (
                t.getFullYear() +
                "年" +
                (t.getMonth() + 1) +
                "月" +
                t.getDate() +
                "日"
              );
            },
          },
          watch: {},
          methods: {
            asAttr: function (t) {
              return (t = (t = t.replace(/</g, "&lt;")).replace(
                />/g,
                "&gt;"
              )).replace(/"/g, "&quot;");
            },
            getThumbPos: function (t) {
              return "thumb-pos-" + t.pos;
            },
          },
          template:
            '\n    <div class="uisdc-posts uisdc-ai part-cat-block" v-if="visible==true">\n        <h2 class="c-title">\n            <div class="l">\n                <strong><a href="https://www.uisdc.com/tag/%e5%ad%97%e4%bd%93%e8%ae%be%e8%ae%a1" target="_blank">字体设计最新文章</a></strong>\n            </div>\n            <div class="r">\n                <a href="https://www.uisdc.com/tag/%e5%ad%97%e4%bd%93%e8%ae%be%e8%ae%a1" target="_blank" class="btn a-more">更多 <i class="icon-right ico-more"></i></a>\n            </div>\n        </h2>\n        <div class="c-content">\n            <div class="c-loop c-loop-website flex">\n            <template v-for="(item,index) in items">\n                <div class="part-item-website f-item p-item post-item">\n                    <a :href="item.url" target="_blank" class="f-box">\n                        <div class="item-thumb">\n                            <i class="thumb thumb-img" :class="getThumbPos(item)">\n                                <img :src="item.img" :alt="asAttr(item.title)">\n                            </i>\n                        </div>\n                        <h3 class="item-title">\n                            <strong class="title" v-html="item.title"></strong>\n                        </h3>\n                        <div class="item-tag">\n                            <i class="tag">最新文章 No.{{(index + 1)}}</i>\n                        </div>\n                    </a>\n                </div>\n            </template>\n            </div>\n        </div>\n    </div>\n    ',
        });
      },
      169: function () {
        var t = jQuery;
        Vue.component("uisdc-hunter", {
          props: {},
          data: function () {
            return { visible: !1, items: [] };
          },
          created: function () {
            t.ajax({
              url: "https://www.uisdc.com/ajax.php?action=get_hunter_product",
              type: "GET",
              dataType: "json",
              success: function (t) {
                t.data && ((this.items = t.data), (this.visible = !0));
              }.bind(this),
            });
          },
          computed: {
            comDate: function () {
              var t = new Date();
              return (
                t.getFullYear() +
                "年" +
                (t.getMonth() + 1) +
                "月" +
                t.getDate() +
                "日"
              );
            },
          },
          watch: {},
          methods: {
            asAttr: function (t) {
              return (t = (t = t.replace(/</g, "&lt;")).replace(
                />/g,
                "&gt;"
              )).replace(/"/g, "&quot;");
            },
          },
          template:
            '\n    <div class="uisdc-hunter part-cat-block" v-if="visible==true">\n        <h2 class="c-title">\n            <div class="l">\n                <strong >热门产品细节</strong>\n                <i class="sub-title">更新时间：{{comDate}}</i>\n            </div>\n            <div class="r">\n                <a href="https://www.uisdc.com/hunter/" target="_blank" class="btn a-more">更多 <i class="icon-right ico-more"></i></a>\n            </div>\n        </h2>\n        <div class="c-content">\n            <div class="c-loop c-loop-website flex">\n            <template v-for="(item,index) in items">\n                <div class="part-item-website f-item p-item">\n                    <a :href="item.url" target="_blank" class="f-box">\n                        <h3 class="item-title">\n                            <i class="item-ico">\n                                <i class="thumb thumb-img">\n                                    <img :src="item.img" :alt="asAttr(item.title)">\n                                </i>\n                            </i>\n                            <strong class="title" v-html="item.title"></strong>\n                        </h3>\n                        <div class="item-desc" v-html="item.desc"></div>\n                    </a>\n                </div>\n            </template>\n            </div>\n        </div>\n    </div>\n    ',
        });
      },
      463: function () {
        Vue.component("uisdc-live", {
          props: {},
          data: function () {
            return { visible: !1, live: null, default: null, info: null };
          },
          created: function () {
            $.ajax({
              url: "https://www.uisdc.com/ajax.php?action=get_uisdc_live",
              type: "GET",
              dataType: "json",
              success: function (t) {
                t.data &&
                  (t.data.live
                    ? ((this.info = t.data.live),
                      (this.live = !0),
                      (this.visible = !0))
                    : t.data.default &&
                      ((this.info = t.data.default),
                      (this.default = !0),
                      (this.visible = !0)));
              }.bind(this),
            });
          },
          computed: {
            comTitle: function () {
              return this.live
                ? "直播预约 | " + this.info.title
                : "优设官方直播 | " + this.info.title;
            },
            comAvatarStyle: function () {
              return "background-image:url(" + this.info.author_avatar + ");";
            },
            comEwmTitle: function () {
              return this.live ? "优设官方直播" : "优设官方视频号";
            },
            comEwmTxt: function () {
              return this.live ? "微信扫一扫预约" : "微信扫一扫看回放";
            },
          },
          watch: {},
          methods: {},
          template:
            '\n    <div class="uisdc-live" v-if="visible==true">\n        <div class="live-title">\n            <div class="live-title-img">\n                <img class="show" src="https://image.uisdc.com/wp-content/uploads/2022/08/1-1.png">\n                <img class="hover" src="https://image.uisdc.com/wp-content/uploads/2022/08/1-2.png">\n            </div>\n        </div>\n        <div class="live-content">\n            <div class="live-content-wrap">\n                <div class="uisdc-live-modal">\n                    <div class="u-wrap">\n                        <div class="u-live">\n                            <h2 class="u-title" v-html="comTitle"></h2>\n                            <h3 class="u-subtitle" v-html="info.subtitle"></h3>\n                            <div class="u-live-content">\n                                <div class="u-c-wrap">\n                                    <div class="u-author">\n                                        <div class="d-wrap">\n                                            <div class="a-title-div">\n                                                <div class="a-avatar">\n                                                    <i class="thumb" :style="comAvatarStyle"></i>\n                                                </div>\n                                                <h2 class="a-title" v-html="info.author"></h2>\n                                                <h4 class="a-info" v-html="info.author_info"></h4>\n                                            </div>\n                                            <div class="a-list">\n                                                <ul>\n                                                    <li v-for="(item,index) in info.desc_list"><i class="num">{{index + 1}}</i> <i class="txt" v-html="item.txt"></i></li>\n                                                </ul>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class="u-sidebar">\n                                        <div class="d-wrap">\n                                            <h3 class="s-title"> <i class="ico icon-shield"></i> <i class="txt" v-html="comEwmTitle"></i></h3>\n                                            <div class="s-ewm"><img :src="info.ewm"></div>\n                                            <h4 class="s-txt" v-html="comEwmTxt"></h4>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <h4 class="u-btitle">直播聊设计   大师领路  成长可期</h4>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    ',
        });
      },
      481: function () {
        var t = jQuery;
        Vue.component("uisdc-news-mobile", {
          props: {},
          data: function () {
            return { visible: !1 };
          },
          created: function () {
            var e = this;
            function n() {
              var t = document.documentElement.clientWidth;
              e.visible = t < 700;
            }
            n(), t(window).on("resize", n);
          },
          computed: {},
          watch: {},
          methods: {},
          template:
            '\n    <div class="uisdc-news-mobile" v-if="visible==true">\n        <uisdc-news />\n    </div>\n    ',
        });
      },
      87: function () {
        var t = jQuery;
        Vue.component("uisdc-news-pc", {
          props: {},
          data: function () {
            return { visible: !1 };
          },
          created: function () {
            var e = this;
            function n() {
              var t = document.documentElement.clientWidth;
              e.visible = t >= 700;
            }
            n(), t(window).on("resize", n);
          },
          computed: {},
          watch: {},
          methods: {},
          template:
            '\n    <div class="uisdc-news-pc" v-if="visible==true">\n        <uisdc-news />\n    </div>\n    ',
        });
      },
      484: function () {
        Vue.component("uisdc-posts", {
          props: {},
          data: function () {
            return { visible: !1, items: [] };
          },
          created: function () {
            $.ajax({
              url: "https://www.uisdc.com/ajax.php?action=get_hot_posts",
              type: "GET",
              dataType: "json",
              success: function (t) {
                t.data && ((this.items = t.data), (this.visible = !0));
              }.bind(this),
            });
          },
          computed: {
            comDate: function () {
              var t = new Date();
              return (
                t.getFullYear() +
                "年" +
                (t.getMonth() + 1) +
                "月" +
                t.getDate() +
                "日"
              );
            },
          },
          watch: {},
          methods: {
            asAttr: function (t) {
              return (t = (t = t.replace(/</g, "&lt;")).replace(
                />/g,
                "&gt;"
              )).replace(/"/g, "&quot;");
            },
          },
          template:
            '\n    <div class="uisdc-posts part-cat-block" v-if="visible==true">\n        <h2 class="c-title">\n            <div class="l">\n                <strong >热文榜单</strong>\n                <i class="sub-title">更新时间：{{comDate}}</i>\n            </div>\n            <div class="r">\n                <a href="https://www.uisdc.com/" target="_blank" class="btn a-more">更多 <i class="icon-right ico-more"></i></a>\n            </div>\n        </h2>\n        <div class="c-content">\n            <div class="c-loop c-loop-website flex">\n            <template v-for="(item,index) in items">\n                <div class="part-item-website f-item p-item post-item">\n                    <a :href="item.url" target="_blank" class="f-box">\n                        <div class="item-thumb">\n                            <i class="thumb thumb-img">\n                                <img :src="item.img" :alt="asAttr(item.title)">\n                            </i>\n                        </div>\n                        <h3 class="item-title">\n                            <strong class="title" v-html="item.title"></strong>\n                        </h3>\n                        <div class="item-tag">\n                            <i class="tag">实时热榜 No.{{(index + 1)}}</i>\n                        </div>\n                    </a>\n                </div>\n            </template>\n            </div>\n        </div>\n    </div>\n    ',
        });
      },
      974: function () {
        var t = jQuery;
        Vue.component("vue-modal", {
          props: {
            modal_id: { type: String, required: !0, default: "" },
            show: { type: Boolean, required: !0, default: !1 },
          },
          data: function () {
            return {};
          },
          created: function () {},
          computed: {
            comShow: function () {
              return (
                this.show
                  ? t("body").addClass("modal-open")
                  : t("body").removeClass("modal-open"),
                this.show
              );
            },
            comClass: function () {
              return "vue-modal-" + (this.modal_id || "default");
            },
          },
          methods: {
            modalClose: function () {
              this.$emit("close");
            },
          },
          template:
            '\n    <div class="vue-modal" :class="comClass" v-show="comShow">\n        <div class="modal-mark" @click="modalClose"></div>\n        <div class="modal-window">\n            <div class="modal-wrap">\n                <slot></slot>\n                <i class="modal-close" @click="modalClose"><i class="ico icon-close"></i></i>\n            </div>\n        </div>\n    </div>\n    ',
        });
      },
    },
    e = {};
  function n(i) {
    var r = e[i];
    if (void 0 !== r) return r.exports;
    var a = (e[i] = { exports: {} });
    return t[i](a, a.exports, n), a.exports;
  }
  !(function () {
    "use strict";
    n(974);
    var t = { "@@functional/placeholder": !0 };
    function e(t) {
      return (
        null != t &&
        "object" == typeof t &&
        !0 === t["@@functional/placeholder"]
      );
    }
    function i(t) {
      return function n(i) {
        return 0 === arguments.length || e(i) ? n : t.apply(this, arguments);
      };
    }
    function r(t) {
      return function n(r, a) {
        switch (arguments.length) {
          case 0:
            return n;
          case 1:
            return e(r)
              ? n
              : i(function (e) {
                  return t(r, e);
                });
          default:
            return e(r) && e(a)
              ? n
              : e(r)
              ? i(function (e) {
                  return t(e, a);
                })
              : e(a)
              ? i(function (e) {
                  return t(r, e);
                })
              : t(r, a);
        }
      };
    }
    var a =
      Array.isArray ||
      function (t) {
        return (
          null != t &&
          t.length >= 0 &&
          "[object Array]" === Object.prototype.toString.call(t)
        );
      };
    function s(t, e, n) {
      return function () {
        if (0 === arguments.length) return n();
        var i = arguments[arguments.length - 1];
        if (!a(i)) {
          for (var r = 0; r < t.length; ) {
            if ("function" == typeof i[t[r]])
              return i[t[r]].apply(
                i,
                Array.prototype.slice.call(arguments, 0, -1)
              );
            r += 1;
          }
          if (
            (function (t) {
              return null != t && "function" == typeof t["@@transducer/step"];
            })(i)
          )
            return e.apply(
              null,
              Array.prototype.slice.call(arguments, 0, -1)
            )(i);
        }
        return n.apply(this, arguments);
      };
    }
    var o = function () {
        return this.xf["@@transducer/init"]();
      },
      c = function (t) {
        return this.xf["@@transducer/result"](t);
      };
    function u(t) {
      return "[object String]" === Object.prototype.toString.call(t);
    }
    var l = i(function (t) {
        return (
          !!a(t) ||
          (!!t &&
            "object" == typeof t &&
            !u(t) &&
            (0 === t.length ||
              (t.length > 0 &&
                t.hasOwnProperty(0) &&
                t.hasOwnProperty(t.length - 1))))
        );
      }),
      d = (function () {
        function t(t) {
          this.f = t;
        }
        return (
          (t.prototype["@@transducer/init"] = function () {
            throw new Error("init not implemented on XWrap");
          }),
          (t.prototype["@@transducer/result"] = function (t) {
            return t;
          }),
          (t.prototype["@@transducer/step"] = function (t, e) {
            return this.f(t, e);
          }),
          t
        );
      })();
    function f(t, e) {
      switch (t) {
        case 0:
          return function () {
            return e.apply(this, arguments);
          };
        case 1:
          return function (t) {
            return e.apply(this, arguments);
          };
        case 2:
          return function (t, n) {
            return e.apply(this, arguments);
          };
        case 3:
          return function (t, n, i) {
            return e.apply(this, arguments);
          };
        case 4:
          return function (t, n, i, r) {
            return e.apply(this, arguments);
          };
        case 5:
          return function (t, n, i, r, a) {
            return e.apply(this, arguments);
          };
        case 6:
          return function (t, n, i, r, a, s) {
            return e.apply(this, arguments);
          };
        case 7:
          return function (t, n, i, r, a, s, o) {
            return e.apply(this, arguments);
          };
        case 8:
          return function (t, n, i, r, a, s, o, c) {
            return e.apply(this, arguments);
          };
        case 9:
          return function (t, n, i, r, a, s, o, c, u) {
            return e.apply(this, arguments);
          };
        case 10:
          return function (t, n, i, r, a, s, o, c, u, l) {
            return e.apply(this, arguments);
          };
        default:
          throw new Error(
            "First argument to _arity must be a non-negative integer no greater than ten"
          );
      }
    }
    var p = r(function (t, e) {
        return f(t.length, function () {
          return t.apply(e, arguments);
        });
      }),
      m = p;
    function h(t, e, n) {
      for (var i = n.next(); !i.done; ) {
        if (
          (e = t["@@transducer/step"](e, i.value)) &&
          e["@@transducer/reduced"]
        ) {
          e = e["@@transducer/value"];
          break;
        }
        i = n.next();
      }
      return t["@@transducer/result"](e);
    }
    function v(t, e, n, i) {
      return t["@@transducer/result"](n[i](m(t["@@transducer/step"], t), e));
    }
    var g = "undefined" != typeof Symbol ? Symbol.iterator : "@@iterator";
    function b(t, e, n) {
      if (
        ("function" == typeof t &&
          (t = (function (t) {
            return new d(t);
          })(t)),
        l(n))
      )
        return (function (t, e, n) {
          for (var i = 0, r = n.length; i < r; ) {
            if (
              (e = t["@@transducer/step"](e, n[i])) &&
              e["@@transducer/reduced"]
            ) {
              e = e["@@transducer/value"];
              break;
            }
            i += 1;
          }
          return t["@@transducer/result"](e);
        })(t, e, n);
      if ("function" == typeof n["fantasy-land/reduce"])
        return v(t, e, n, "fantasy-land/reduce");
      if (null != n[g]) return h(t, e, n[g]());
      if ("function" == typeof n.next) return h(t, e, n);
      if ("function" == typeof n.reduce) return v(t, e, n, "reduce");
      throw new TypeError("reduce: list must be array or iterable");
    }
    var w = (function () {
        function t(t, e) {
          (this.xf = e), (this.f = t);
        }
        return (
          (t.prototype["@@transducer/init"] = o),
          (t.prototype["@@transducer/result"] = c),
          (t.prototype["@@transducer/step"] = function (t, e) {
            return this.xf["@@transducer/step"](t, this.f(e));
          }),
          t
        );
      })(),
      y = r(function (t, e) {
        return new w(t, e);
      });
    function x(t, n, i) {
      return function () {
        for (
          var r = [], a = 0, s = t, o = 0;
          o < n.length || a < arguments.length;

        ) {
          var c;
          o < n.length && (!e(n[o]) || a >= arguments.length)
            ? (c = n[o])
            : ((c = arguments[a]), (a += 1)),
            (r[o] = c),
            e(c) || (s -= 1),
            (o += 1);
        }
        return s <= 0 ? i.apply(this, r) : f(s, x(t, r, i));
      };
    }
    var j = r(function (t, e) {
      return 1 === t ? i(e) : f(t, x(t, [], e));
    });
    function k(t, e) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    var T = Object.prototype.toString,
      O = (function () {
        return "[object Arguments]" === T.call(arguments)
          ? function (t) {
              return "[object Arguments]" === T.call(t);
            }
          : function (t) {
              return k("callee", t);
            };
      })(),
      _ = O,
      A = !{ toString: null }.propertyIsEnumerable("toString"),
      C = [
        "constructor",
        "valueOf",
        "isPrototypeOf",
        "toString",
        "propertyIsEnumerable",
        "hasOwnProperty",
        "toLocaleString",
      ],
      S = (function () {
        return arguments.propertyIsEnumerable("length");
      })(),
      E = function (t, e) {
        for (var n = 0; n < t.length; ) {
          if (t[n] === e) return !0;
          n += 1;
        }
        return !1;
      },
      I =
        "function" != typeof Object.keys || S
          ? i(function (t) {
              if (Object(t) !== t) return [];
              var e,
                n,
                i = [],
                r = S && _(t);
              for (e in t)
                !k(e, t) || (r && "length" === e) || (i[i.length] = e);
              if (A)
                for (n = C.length - 1; n >= 0; )
                  k((e = C[n]), t) && !E(i, e) && (i[i.length] = e), (n -= 1);
              return i;
            })
          : i(function (t) {
              return Object(t) !== t ? [] : Object.keys(t);
            }),
      P = r(
        s(["fantasy-land/map", "map"], y, function (t, e) {
          switch (Object.prototype.toString.call(e)) {
            case "[object Function]":
              return j(e.length, function () {
                return t.call(this, e.apply(this, arguments));
              });
            case "[object Object]":
              return b(
                function (n, i) {
                  return (n[i] = t(e[i])), n;
                },
                {},
                I(e)
              );
            default:
              return (function (t, e) {
                for (var n = 0, i = e.length, r = Array(i); n < i; )
                  (r[n] = t(e[n])), (n += 1);
                return r;
              })(t, e);
          }
        })
      ),
      q = P;
    function D(t) {
      return function n(a, s, o) {
        switch (arguments.length) {
          case 0:
            return n;
          case 1:
            return e(a)
              ? n
              : r(function (e, n) {
                  return t(a, e, n);
                });
          case 2:
            return e(a) && e(s)
              ? n
              : e(a)
              ? r(function (e, n) {
                  return t(e, s, n);
                })
              : e(s)
              ? r(function (e, n) {
                  return t(a, e, n);
                })
              : i(function (e) {
                  return t(a, s, e);
                });
          default:
            return e(a) && e(s) && e(o)
              ? n
              : e(a) && e(s)
              ? r(function (e, n) {
                  return t(e, n, o);
                })
              : e(a) && e(o)
              ? r(function (e, n) {
                  return t(e, s, n);
                })
              : e(s) && e(o)
              ? r(function (e, n) {
                  return t(a, e, n);
                })
              : e(a)
              ? i(function (e) {
                  return t(e, s, o);
                })
              : e(s)
              ? i(function (e) {
                  return t(a, e, o);
                })
              : e(o)
              ? i(function (e) {
                  return t(a, s, e);
                })
              : t(a, s, o);
        }
      };
    }
    Number.isInteger;
    var M = D(b),
      V = i(function (t) {
        return !t;
      });
    function B(t, e) {
      return function () {
        return e.call(this, t.apply(this, arguments));
      };
    }
    function U(t, e) {
      return function () {
        var n = arguments.length;
        if (0 === n) return e();
        var i = arguments[n - 1];
        return a(i) || "function" != typeof i[t]
          ? e.apply(this, arguments)
          : i[t].apply(i, Array.prototype.slice.call(arguments, 0, n - 1));
      };
    }
    var F = i(
      U(
        "tail",
        D(
          U("slice", function (t, e, n) {
            return Array.prototype.slice.call(n, t, e);
          })
        )(1, 1 / 0)
      )
    );
    function N() {
      if (0 === arguments.length)
        throw new Error("pipe requires at least one argument");
      return f(arguments[0].length, M(B, arguments[0], F(arguments)));
    }
    var G = i(function (t) {
      return u(t)
        ? t.split("").reverse().join("")
        : Array.prototype.slice.call(t, 0).reverse();
    });
    function H() {
      if (0 === arguments.length)
        throw new Error("compose requires at least one argument");
      return N.apply(this, G(arguments));
    }
    function Q(t) {
      for (var e, n = []; !(e = t.next()).done; ) n.push(e.value);
      return n;
    }
    function Y(t, e, n) {
      for (var i = 0, r = n.length; i < r; ) {
        if (t(e, n[i])) return !0;
        i += 1;
      }
      return !1;
    }
    var R =
        "function" == typeof Object.is
          ? Object.is
          : function (t, e) {
              return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
            },
      z = i(function (t) {
        return null === t
          ? "Null"
          : void 0 === t
          ? "Undefined"
          : Object.prototype.toString.call(t).slice(8, -1);
      });
    function W(t, e, n, i) {
      var r = Q(t);
      function a(t, e) {
        return L(t, e, n.slice(), i.slice());
      }
      return !Y(
        function (t, e) {
          return !Y(a, e, t);
        },
        Q(e),
        r
      );
    }
    function L(t, e, n, i) {
      if (R(t, e)) return !0;
      var r,
        a,
        s = z(t);
      if (s !== z(e)) return !1;
      if (
        "function" == typeof t["fantasy-land/equals"] ||
        "function" == typeof e["fantasy-land/equals"]
      )
        return (
          "function" == typeof t["fantasy-land/equals"] &&
          t["fantasy-land/equals"](e) &&
          "function" == typeof e["fantasy-land/equals"] &&
          e["fantasy-land/equals"](t)
        );
      if ("function" == typeof t.equals || "function" == typeof e.equals)
        return (
          "function" == typeof t.equals &&
          t.equals(e) &&
          "function" == typeof e.equals &&
          e.equals(t)
        );
      switch (s) {
        case "Arguments":
        case "Array":
        case "Object":
          if (
            "function" == typeof t.constructor &&
            "Promise" ===
              ((r = t.constructor),
              null == (a = String(r).match(/^function (\w*)/)) ? "" : a[1])
          )
            return t === e;
          break;
        case "Boolean":
        case "Number":
        case "String":
          if (typeof t != typeof e || !R(t.valueOf(), e.valueOf())) return !1;
          break;
        case "Date":
          if (!R(t.valueOf(), e.valueOf())) return !1;
          break;
        case "Error":
          return t.name === e.name && t.message === e.message;
        case "RegExp":
          if (
            t.source !== e.source ||
            t.global !== e.global ||
            t.ignoreCase !== e.ignoreCase ||
            t.multiline !== e.multiline ||
            t.sticky !== e.sticky ||
            t.unicode !== e.unicode
          )
            return !1;
      }
      for (var o = n.length - 1; o >= 0; ) {
        if (n[o] === t) return i[o] === e;
        o -= 1;
      }
      switch (s) {
        case "Map":
          return (
            t.size === e.size &&
            W(t.entries(), e.entries(), n.concat([t]), i.concat([e]))
          );
        case "Set":
          return (
            t.size === e.size &&
            W(t.values(), e.values(), n.concat([t]), i.concat([e]))
          );
        case "Arguments":
        case "Array":
        case "Object":
        case "Boolean":
        case "Number":
        case "String":
        case "Date":
        case "Error":
        case "RegExp":
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "ArrayBuffer":
          break;
        default:
          return !1;
      }
      var c = I(t);
      if (c.length !== I(e).length) return !1;
      var u = n.concat([t]),
        l = i.concat([e]);
      for (o = c.length - 1; o >= 0; ) {
        var d = c[o];
        if (!k(d, e) || !L(e[d], t[d], u, l)) return !1;
        o -= 1;
      }
      return !0;
    }
    var X = r(function (t, e) {
      return L(t, e, [], []);
    });
    Date.prototype.toISOString;
    var J = i(function (t) {
        return null != t && "function" == typeof t["fantasy-land/empty"]
          ? t["fantasy-land/empty"]()
          : null != t &&
            null != t.constructor &&
            "function" == typeof t.constructor["fantasy-land/empty"]
          ? t.constructor["fantasy-land/empty"]()
          : null != t && "function" == typeof t.empty
          ? t.empty()
          : null != t &&
            null != t.constructor &&
            "function" == typeof t.constructor.empty
          ? t.constructor.empty()
          : a(t)
          ? []
          : u(t)
          ? ""
          : (function (t) {
              return "[object Object]" === Object.prototype.toString.call(t);
            })(t)
          ? {}
          : _(t)
          ? (function () {
              return arguments;
            })()
          : ((e = t),
            "[object Uint8ClampedArray]" ===
              (n = Object.prototype.toString.call(e)) ||
            "[object Int8Array]" === n ||
            "[object Uint8Array]" === n ||
            "[object Int16Array]" === n ||
            "[object Uint16Array]" === n ||
            "[object Int32Array]" === n ||
            "[object Uint32Array]" === n ||
            "[object Float32Array]" === n ||
            "[object Float64Array]" === n ||
            "[object BigInt64Array]" === n ||
            "[object BigUint64Array]" === n
              ? t.constructor.from("")
              : void 0);
        var e, n;
      }),
      K = J,
      Z = r(function (t, e) {
        return t >= e;
      }),
      tt = r(function (t, e) {
        return "function" != typeof e.indexOf || a(e)
          ? (function (t, e, n) {
              var i, r;
              if ("function" == typeof t.indexOf)
                switch (typeof e) {
                  case "number":
                    if (0 === e) {
                      for (i = 1 / e; n < t.length; ) {
                        if (0 === (r = t[n]) && 1 / r === i) return n;
                        n += 1;
                      }
                      return -1;
                    }
                    if (e != e) {
                      for (; n < t.length; ) {
                        if ("number" == typeof (r = t[n]) && r != r) return n;
                        n += 1;
                      }
                      return -1;
                    }
                    return t.indexOf(e, n);
                  case "string":
                  case "boolean":
                  case "function":
                  case "undefined":
                    return t.indexOf(e, n);
                  case "object":
                    if (null === e) return t.indexOf(e, n);
                }
              for (; n < t.length; ) {
                if (X(t[n], e)) return n;
                n += 1;
              }
              return -1;
            })(e, t, 0)
          : e.indexOf(t);
      });
    "function" == typeof Object.assign && Object.assign;
    var et = r(function (t, e) {
        return (
          e instanceof t ||
          (null != e &&
            (e.constructor === t ||
              ("Object" === t.name && "object" == typeof e)))
        );
      }),
      nt = i(function (t) {
        return null != t && X(t, K(t));
      }),
      it = i(function (t) {
        return null == t;
      }),
      rt = r(function (t, e) {
        return e.match(t) || [];
      }),
      at = D(function (t, e, n) {
        return n.replace(t, e);
      }),
      st = "\t\n\v\f\r                　\u2028\u2029\ufeff",
      ot = i(
        "function" == typeof String.prototype.trim && !st.trim() && "​".trim()
          ? function (t) {
              return t.trim();
            }
          : function (t) {
              var e = new RegExp("^[" + st + "][" + st + "]*"),
                n = new RegExp("[" + st + "][" + st + "]*$");
              return t.replace(e, "").replace(n, "");
            }
      );
    Vue.component("v-input", {
      inheritAttrs: !1,
      model: { prop: "val", event: "change" },
      props: ["input_placeholder", "val"],
      data: function () {
        return { input_value: "", val_back: "", this_val: "" };
      },
      created: function () {
        this.this_val = this.val || this.input_placeholder;
      },
      computed: {
        inputClass: function () {
          return this.this_val == this.input_placeholder ? "placeholder" : "";
        },
      },
      methods: {
        inputChange: function (t) {
          var e = t.target.value;
          (nt(e) || it(e)) && (e = this.input_placeholder),
            (this.val_back = e),
            (this.this_val = e),
            this.$emit("change", this.val_back);
        },
        inputBlur: function () {
          "" == ot(this.this_val) && (this.this_val = this.input_placeholder);
        },
        inputFocus: function () {
          this.this_val == this.input_placeholder && (this.this_val = "");
        },
      },
      template:
        '\n    <input\n        v-bind="$attrs"\n        @blur="inputBlur($event)"\n        @change="inputChange($event)"\n        @focus="inputFocus"\n        :class="inputClass"\n        :value="this_val"\n    />\n    ',
    }),
      n(913),
      n(506),
      n(625),
      n(759),
      n(230),
      Vue.component("top-show", {
        props: {},
        data: function () {
          return { item: null };
        },
        created: function () {
          var t = this;
          $.ajax({
            url: "https://www.uisdc.com/ajax.php?action=ad_full",
            type: "GET",
            dataType: "json",
            success: function (e) {
              (e = e.data),
                et(Array, e) && ((e = e[0]), et(Object, e) && (t.item = e));
            },
          });
        },
        computed: {},
        watch: {},
        methods: {},
        template:
          '\n    <div class="top-show">\n        <a v-if="item!=null" :href="item.href" target="_blank">\n            <img :src="item.image" alt="优设网">\n        </a>\n    </div>\n    ',
      }),
      Vue.component("uisdc-news", {
        props: {},
        data: function () {
          return { visible: !1, items: [] };
        },
        created: function () {
          var t = this;
          $.ajax({
            url: "https://www.uisdc.com/ajax.php",
            type: "GET",
            dataType: "json",
            data: { action: "get_news", paged: 1 },
            success: function (e) {
              if (
                e &&
                ((e = e.data),
                et(Array, e) &&
                  e.length > 0 &&
                  ((e = e[0].dubao), et(Array, e) && e.length > 0))
              ) {
                var n = 0;
                (t.items = q(function (e) {
                  return n++, t.getNum(n) + " " + e.title;
                }, e)),
                  (t.visible = !0);
              }
            },
          });
        },
        computed: {
          comSlot: function () {
            for (var t = this.items.length, e = [], n = 1; n <= t; n++)
              e.push("item-" + n);
            return e;
          },
        },
        watch: {},
        methods: {
          getNum: function (t) {
            return t < 20 ? "&#" + (9311 + t) + ";" : "";
          },
        },
        template:
          '\n    <div class="uisdc-news" v-if="visible==true">\n        <div class="uisdc-news__title">\n            <i class="ico icon-fire"></i>\n            <strong>今日要闻 : </strong>\n        </div>\n        <div class="uisdc-news__content">\n            <a class="un-slide" href="https://www.uisdc.com/news" target="_blank">\n                <slide-up cls="un-slide-up" :total="items.length+\'\'" delay="3000">\n                    <template #[comSlot[index]] v-for="(item,index) in items">\n                        <div class="li-item" v-html="item"></div>\n                    </template>\n                </slide-up>\n                <i class="ico-more icon-right"></i>\n            </a>\n        </div>\n    </div>\n    ',
      }),
      n(87),
      n(481);
    var ct = jQuery;
    function ut() {
      var t = $('.sidebar-menu .menu-a[href^="#"]');
      function e() {
        var e =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          0;
        e = Math.round(e);
        var n = 0;
        t.each(function () {
          var i = $(this).attr("href");
          if (0 === tt("#", i)) {
            var r = $(i);
            if (r.length > 0) {
              var a = r.offset().top;
              e >= a - 100 && (n = t.index(this));
            }
          }
        }),
          t.removeClass("active"),
          t.eq(n).addClass("active");
      }
      t.length < 1 || (e(), $(window).on("scroll", e));
    }
    function lt() {
      var t = $('.sidebar-menu .menu-a[href^="#"]');
      t.length < 1 ||
        t.on("click", function () {
          var t = $(this).attr("href");
          if (0 === tt("#", t)) {
            var e = $(t);
            if (e.length > 0) {
              console.log(e);
              var n = e.offset();
              return $("html,body").animate({ scrollTop: n.top - 90 }, 200), !1;
            }
          }
        });
    }
    function dt() {
      var t = 0;
      $("body").on("click", ".copy-click", function (e) {
        return (
          clearTimeout(t),
          $(".copyTip").remove(),
          $(this).children(".copy-content").select(),
          document.execCommand("copy"),
          (function (e, n) {
            $("body").append('<div class="copyTip">已复制</div>'),
              (t = setTimeout(function () {
                $(".copyTip").addClass("show"),
                  $(".copyTip").css({
                    left: n.clientX - 20,
                    top: n.clientY - 40,
                  });
              }, 50)),
              (t = setTimeout(function () {
                $(".copyTip").removeClass("show");
              }, 500)),
              (t = setTimeout(function () {
                $(".copyTip").remove();
              }, 1e3));
          })(0, e),
          !1
        );
      });
    }
    function ft() {
      $(".color-show-group").each(function () {
        var t = $(this).find(".color-show-item");
        t.length < 1 ||
          t.on("mouseenter", function () {
            t.removeClass("active"), $(this).addClass("active");
          });
      });
    }
    function pt() {
      var t = null;
      $("body")
        .on("mouseenter", ".has-submenu", function () {
          clearTimeout(t), $(this).addClass("open");
        })
        .on("mouseleave", ".has-submenu", function () {
          var e = this;
          t = setTimeout(function () {
            $(e).removeClass("open");
          }, 200);
        });
    }
    function mt() {
      $("body").on("click", "a", function (t) {
        var e = $(this).attr("href");
        -1 == e.indexOf(location.hostname) &&
          0 == e.indexOf("http") &&
          0 != e.indexOf("#") &&
          (t.preventDefault(), window.open(e, "_blank"));
      });
    }
    function ht() {
      var t = $(".part-sidebar");
      function e() {
        var e = 0,
          n = $(".part-header-show");
        n.length > 0 && (e = n.outerHeight());
        var i = $(".part-main .container").height() - t.height(),
          r =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0;
        (r = Math.round(r)),
          t.removeClass("a-absolute"),
          t.removeClass("a-fixed"),
          r > e && r < i
            ? (t.addClass("a-fixed"), t.removeClass("a-absolute"))
            : r >= i && (t.removeClass("a-fixed"), t.addClass("a-absolute"));
      }
      t.length < 1 ||
        (e(), $(window).on("resize", e), $(window).on("scroll", e));
    }
    function vt(t, e, n) {
      var i = t,
        r = null;
      return function () {
        var t = this,
          a = arguments;
        if ((r && clearTimeout(r), n)) {
          var s = !r;
          (r = setTimeout(function () {
            r = null;
          }, e)),
            s && i.apply(t, a);
        } else
          r = setTimeout(function () {
            i.apply(t, a);
          }, e);
      };
    }
    function gt() {
      var t = $(".part-sidebar .sidebar-menu");
      if (!(t.length < 1)) {
        t.after(
          '<div class="sidebar-menu-scrollbar"><i class="block"></i></div>'
        );
        var e = $(".part-sidebar .sidebar-menu-scrollbar"),
          n = e.find(".block"),
          i = !1,
          r = !1,
          a = 0,
          s = 0,
          o = function () {
            var i = t[0].scrollHeight,
              r = t[0].clientHeight;
            i <= r ? e.hide() : e.show();
            var a = Math.floor((1 - r / i) * r);
            n.height((t.outerHeight() * r) / i + "px"),
              n.css({ top: (t.scrollTop() * a) / (i - r) + "px" });
          },
          c = function () {
            if (!0 !== i) {
              var e = t.height() - t.find(".active").outerHeight();
              t.find(".active")[0].offsetTop - t.scrollTop() > e &&
                t.scrollTop(t.scrollTop() + t.find(".active").outerHeight()),
                t.find(".active")[0].offsetTop - t.scrollTop() < 0 &&
                  t.scrollTop(t.scrollTop() - t.find(".active").outerHeight());
            }
          },
          u = vt(
            function () {
              t.addClass("shake"),
                setTimeout(function () {
                  t.removeClass("shake");
                }, 300);
            },
            310,
            !0
          ),
          l = vt(
            function () {
              t.addClass("shake_b"),
                setTimeout(function () {
                  t.removeClass("shake_b");
                }, 300);
            },
            310,
            !0
          );
        c(),
          o(),
          $(window).on("resize", o),
          $(window).on("scroll", function () {
            c();
          }),
          t.on("wheel", function (e) {
            if (t[0].scrollHeight != t[0].clientHeight)
              return (
                e.stopPropagation(),
                e.originalEvent.deltaY < 0 && 0 === t.scrollTop()
                  ? (e.preventDefault(), void u())
                  : e.originalEvent.deltaY > 0 &&
                    Math.ceil(t.scrollTop()) >=
                      Math.ceil(t[0].scrollHeight - t[0].clientHeight)
                  ? (e.preventDefault(), void l())
                  : void 0
              );
          }),
          t.on("mouseenter", function () {
            i = !0;
          }),
          t.on("mouseleave", function () {
            i = !1;
          }),
          t.on("scroll", function () {
            o();
          }),
          n.on("mousedown", function (e) {
            return (
              (a = e.clientY),
              (r = !0),
              (s = t.scrollTop()),
              e.preventDefault(),
              e.stopPropagation(),
              !1
            );
          }),
          $(window).on("mouseup", function (t) {
            (s = 0), (a = 0), (r = !1);
          }),
          $(window).on("mousemove", function (e) {
            if (r) {
              e.preventDefault(), e.stopPropagation();
              var n = t[0].scrollHeight,
                i = t[0].clientHeight,
                o = Math.floor(e.clientY - a),
                c = Math.floor((1 - i / n) * i);
              t.scrollTop(s + Math.floor((o * (n - i)) / c));
            }
          });
      }
    }
    Vue.component("uisdc-jingangqu", {
      props: {},
      data: function () {
        return { visible: !1, items: [], active: 0 };
      },
      created: function () {
        ct.ajax({
          url: "https://www.uisdc.com/ajax.php?action=get_jingangqu",
          type: "GET",
          dataType: "json",
          success: function (t) {
            t.data && ((this.items = t.data), (this.visible = !0));
          }.bind(this),
        });
      },
      computed: {},
      watch: {},
      methods: {
        activeCls: function (t) {
          return { active: this.active == t };
        },
        showBlock: function (t) {
          this.active = t;
        },
        isThisBlockShow: function (t) {
          return this.active == t;
        },
        getIcon: function (t) {
          return "ico icon-" + t;
        },
        getSubmenu: function (t) {
          return q(function (t) {
            return { icon: t[0], title: t[1], desc: t[2], url: t[3] };
          })(t).slice(0, 12);
        },
      },
      template:
        '\n    <div class="uisdc-jingangqu part-cat-block" v-if="visible==true">\n        <h2 class="c-title">\n            <div class="l">\n                <template v-for="(item,index) in items">\n                    <span class="j-title" :class="activeCls(index)" @mouseenter="showBlock(index)">{{item.title}}</span>\n                </template>\n            </div>\n        </h2>\n        <div class="c-content">\n            <template v-for="(item,index) in items">\n                <div class="c-loop c-loop-website flex" v-show="isThisBlockShow(index)">\n                    <template v-for="it in getSubmenu(item.submenu)">\n                        <div class="part-item-website f-item p-item">\n                            <a :href="it.url" target="_blank" class="f-box">\n                                <h3 class="item-title">\n                                    <i class="item-ico">\n                                        <i :class="getIcon(it.icon)"></i>\n                                    </i>\n                                    <strong class="title" v-html="it.title"></strong>\n                                </h3>\n                                <div class="item-desc" v-html="it.desc"></div>\n                            </a>\n                        </div>\n                    </template>\n                </div>\n            </template>\n        </div>\n    </div>\n    ',
    }),
      n(169),
      n(484),
      n(463),
      Vue.component("uisdc-hotsearch", {
        props: {},
        data: function () {
          return { visible: !1, items: [] };
        },
        created: function () {
          $.ajax({
            url: "https://www.uisdc.com/ajax.php?action=get_hotsearch",
            type: "GET",
            dataType: "json",
            success: function (t) {
              t.data &&
                ((this.items = Object.keys(t.data)), (this.visible = !0));
            }.bind(this),
          });
        },
        computed: {},
        watch: {},
        methods: {
          getSearchLink: function (t) {
            return (
              (t = at(/\[.*\]/, "", t)),
              "https://www.uisdc.com/?s=" + encodeURIComponent(t)
            );
          },
          parseTxt: function (t) {
            return (
              (t = at(/\[(\[.*\])\]/, '<i class="show-hover">$1</i>', t)),
              (t = at(/\[新\]/, '<i class="icon-talk-hot-1"></i>', t)),
              (t = at(/\[热\]/, '<i class="icon-talk-hot-2"></i>', t)),
              (t = at(/\[沸\]/, '<i class="icon-talk-hot-3"></i>', t)),
              (t = at(/\[爆\]/, '<i class="icon-talk-hot-4"></i>', t)),
              at(/\[(.*)\]/, '<i class="icon-$1"></i>', t)
            );
          },
        },
        template:
          '\n    <div class="uisdc-hotsearch" v-if="visible==true">\n        <i class="item"><a href="https://hot.uisdc.com" target="_blank">热搜榜</a></i>\n        <a v-for="item in items" class="item" :href="getSearchLink(item)" target="_blank" v-html="parseTxt(item)"></a>\n    </div>\n    ',
      }),
      n(846),
      n(760),
      n(829),
      jQuery;
    var bt = function () {
        return navigator.userAgent;
      },
      wt = function (t) {
        return H(V, nt, rt(t), bt);
      },
      yt = wt(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone|MicroMessenger|weibo)/i
      ),
      xt = wt(/(iPhone|iPod|ios|iPad)/i),
      jt = wt(/Android/i),
      kt = wt(/MicroMessenger/i),
      Tt = wt(/weibo/i),
      Ot = function (t) {
        return function () {
          return document.documentElement[t] || document.body[t] || 0;
        };
      },
      _t = Ot("clientWidth"),
      $t = Ot("clientHeight"),
      At = function (e) {
        return H(Z(t, e), _t);
      },
      Ct = {
        cl: _t,
        ct: $t,
        sm: At(768),
        md: At(1024),
        lg: At(1330),
        xl: At(1920),
        st: function () {
          return window.pageYOffset || Ot("scrollTop")();
        },
        isMobile: yt,
        isPc: H(V, yt),
        isIos: xt,
        isAndroid: jt,
        getDevice: function () {
          if (kt()) return "微信";
          if (Tt()) return "微博";
          var t = bt();
          return -1 != t.indexOf("Android")
            ? "Android"
            : -1 != t.indexOf("iPhone")
            ? 812 == screen.height
              ? "iPhone X"
              : "iPhone"
            : -1 != t.indexOf("Mac OS")
            ? "MacOS"
            : -1 != t.indexOf("iPad") ||
              (-1 != t.indexOf("Safari") && -1 == t.indexOf("Chrome"))
            ? "iPad"
            : -1 != t.indexOf("Edge")
            ? "Edge浏览器"
            : -1 != t.indexOf("360SE") || -1 != t.indexOf("360EE")
            ? "360浏览器"
            : -1 != t.indexOf("Maxthon")
            ? "傲游浏览器"
            : -1 != t.indexOf("Tencent")
            ? "QQ浏览器"
            : -1 != t.indexOf("MetaSr")
            ? "搜狗浏览器"
            : -1 != t.indexOf("Opera")
            ? "Opera浏览器"
            : -1 != t.indexOf("Firefox")
            ? "Firefox浏览器"
            : -1 != t.indexOf("Chrome")
            ? "Chrome浏览器"
            : -1 != t.indexOf("Safari")
            ? "Safari浏览器"
            : -1 != t.indexOf("MSIE")
            ? "IE浏览器"
            : -1 != t.indexOf("like Gecko")
            ? -1 != t.indexOf("OPR")
              ? "Opara浏览器"
              : "IE浏览器"
            : void 0;
        },
        uaMatch: wt,
      };
    function St() {
      var t = $(".h-title");
      if (!(t.length < 1)) {
        var e = $(".part-header-bar-title");
        if (!(e.length < 1)) {
          var n = e.find(".page-title");
          n.length < 1 ||
            (t.on("mouseenter", function () {
              Ct.isPc() && e.addClass("show-menu");
            }),
            t.on("mouseleave", function () {
              Ct.isPc() && e.removeClass("");
            }),
            n.on("click", function () {
              Ct.isPc() || e.toggleClass("show-menu");
            }));

          var pt = e.find(".ptitle");
          pt.length < 1 ||
            pt.on("click", function () {
              Ct.isPc() || e.removeClass("show-menu");
            });
        }
      }
    }
    var Et = function (t) {
        return (
          decodeURIComponent(
            document.cookie.replace(
              new RegExp(
                "(?:(?:^|.*;)\\s*" +
                  encodeURIComponent(t).replace(/[-.+*]/g, "\\$&") +
                  "\\s*\\=\\s*([^;]*).*$)|^.*$"
              ),
              "$1"
            )
          ) || null
        );
      },
      It = (H(it, Et), Et),
      Pt = function (t, e, n, i) {
        i = it(i) ? ";path=/" : nt(i) ? "" : ";path=" + i;
        var r = "";
        if (!it(n)) {
          (n = parseInt(n, 10)), isNaN(n) && (n = 86400);
          var a = new Date();
          a.setTime(a.getTime() + 1e3 * n), (r = "expires=" + a.toUTCString());
        }
        document.cookie =
          encodeURIComponent(t) + "=" + encodeURIComponent(e) + "; " + r + i;
      },
      qt = jQuery;
    jQuery(function (t) {
      (window.$ = jQuery),
        new Vue({
          el: "#app",
          created: function () {},
          mounted: function () {
            var e;
            t("html").removeClass("no-js"),
              lt(),
              ut(),
              dt(),
              ft(),
              pt(),
              mt(),
              ht(),
              gt(),
              St(),
              (e = qt(".part-header-show")).length < 1 ||
                ((1 != It("headerShow") || e.hasClass("edit-area")) &&
                  (e.addClass("show"),
                  e.find(".item-close").on("click", function () {
                    e.remove();
                    var t = new Date(new Date().getTime() + 864e5);
                    t.setHours(0),
                      t.setMinutes(0),
                      t.setSeconds(0),
                      Pt(
                        "headerShow",
                        "1",
                        Math.ceil((t.getTime() - new Date().getTime()) / 1e3)
                      );
                  })));
          },
        });
    });
  })();
})();
