(() => {
  var __webpack_modules__ = {
      111: () => {
          document.addEventListener("keyup", (e) => {
            "D" === e.key &&
              e.ctrlKey &&
              e.shiftKey &&
              (e.preventDefault(), clearInterval(ATint), (ATint = null));
          });
      },
      548: () => {
        (window.dragElement = (e) => {
          fade = e;
          var t = 0,
            o = 0,
            n = 0,
            a = 0;
          function i(e) {
            (fade.style.opacity = "0.9"),
              (e = e || window.event).preventDefault(),
              (n = e.clientX),
              (a = e.clientY),
              (document.onmouseup = d),
              (document.onmousemove = s);
          }
          function s(i) {
            (i = i || window.event).preventDefault(),
              (t = n - i.clientX),
              (o = a - i.clientY),
              (n = i.clientX),
              (a = i.clientY),
              (e.style.top = e.offsetTop - o + "px"),
              (e.style.left = e.offsetLeft - t + "px");
          }
          function d() {
            (document.onmouseup = null),
              (document.onmousemove = null),
              (fade.style.opacity = "1");
          }
          document.getElementById(e.id + "header")
            ? (document.getElementById(e.id + "header").onmousedown = i)
            : (e.onmousedown = i);
        }),
          (showToast = (e, t) => {
            const o = document.createElement("div"),
              n = document.createElement("div");
            (o.style.cssText = `position: fixed; bottom: -100px; right: 20px; background-color: ${
              t || "purple"
            }; color: white; border-radius: 10px; z-index: 9999; transition: bottom 0.5s ease-in-out; max-width: 300px; padding: 10px;`),
              (n.style.cssText = "font-size: 18px; word-wrap: break-word;"),
              (n.textContent = e),
              o.appendChild(n),
              document.body.appendChild(o),
              setTimeout(() => {
                o.style.bottom = "20px";
              }, 100),
              setTimeout(() => {
                (o.style.bottom = `-${o.offsetHeight + 20}px`),
                  setTimeout(() => {
                    document.body.removeChild(o);
                  }, 500);
              }, Math.max(3e3, 50 * e.length));
          }),
          (showPrompt = (e, t, o, n) => {
            const a = document.createElement("div"),
              i = document.createElement("div"),
              s = document.createElement("input");
            (a.style.cssText = `position: fixed; top: 20px; left: -100%; background: linear-gradient(to right, ${
              n || "purple"
            } 5px, rgba(20, 20, 20, 0.8) 5px); color: white; z-index: 9999; opacity: 0; transition: left 0.5s ease-in-out, opacity 0.5s ease-in-out; max-width: 300px; padding: 10px;`),
              (i.style.cssText = "font-size: 18px; word-wrap: break-word;"),
              (i.textContent = e),
              s.setAttribute("type", "text"),
              s.setAttribute("placeholder", t || ""),
              (s.style.cssText =
                "width: 100%; padding: 5px; background-color: rgba(0, 0, 0, 0.5); border: none; color: white; margin-top: 10px;"),
              s.addEventListener("keydown", (e) => {
                if ("Enter" === e.key) {
                  const e = s.value;
                  o && "function" == typeof o && o(e),
                    (a.style.transition =
                      "left 0.5s ease-in-out, opacity 0.5s ease-in-out"),
                    (a.style.left = "-100%"),
                    (a.style.opacity = "0"),
                    setTimeout(() => {
                      document.body.removeChild(a);
                    }, 500);
                }
              }),
              a.appendChild(i),
              a.appendChild(s),
              document.body.appendChild(a),
              setTimeout(() => {
                (a.style.left = "0"), (a.style.opacity = "1");
              }, 100);
          });
      },
      407: () => {
        iModal = {
          constants: {
            container: "presentation",
            headerClass: "css-19hcsz9-Typography",
            descriptionClass: "css-1ql0wvf-Typography",
            errorRoute: "/student/error/modal",
            dashRoute: "/student/dashboard/home",
            buttonId: "continue-button-button",
            dashId: "StudentDashboard-g38",
            cardClass: "e1vvjwpf1-card-body",
            get dashHook() {
              return Object.values(document.getElementById(this.dashId))[1]
                .children[0]._owner.stateNode;
            },
          },
          cachedGoto: null,
          closeModal: function () {
            iModal.goto(iModal.constants.dashRoute);
          },
          goto: function (e) {
            return this.cachedGoto(e);
          },
          showModal: function (e) {
            null === iModal.cachedGoto &&
              (iModal.cachedGoto =
                iModal.constants.dashHook.props.navigationToPageByRelativeUrl),
              new MutationObserver(function (t, o) {
                for (const o of t)
                  "childList" === o.type &&
                    o.addedNodes.forEach((t) => {
                      if (
                        t.role === iModal.constants.container &&
                        null ===
                          document.getElementById(iModal.constants.dashId)
                      ) {
                        let t = document.getElementsByClassName(
                            iModal.constants.cardClass
                          )[0],
                          o = document.getElementsByClassName(
                            iModal.constants.headerClass
                          )[0],
                          n = document.getElementsByClassName(
                            iModal.constants.descriptionClass
                          )[0],
                          a = document.getElementById(
                            iModal.constants.buttonId
                          );
                        e.width && (t.style.width = e.width),
                          (o[e.useInnerHTML ? "innerHTML" : "textContent"] =
                            e.title),
                          (n[e.useInnerHTML ? "innerHTML" : "textContent"] =
                            e.description),
                          e.callback
                            ? (a.onclick = e.callback)
                            : (a.onclick = iModal.closeModal);
                      }
                    });
              }).observe(document, { childList: !0, subtree: !0 }),
              iModal.goto(iModal.constants.errorRoute);
          },
        };
      },
    },
    __webpack_module_cache__ = {};
  function __webpack_require__(e) {
    var t = __webpack_module_cache__[e];
    if (void 0 !== t) return t.exports;
    var o = (__webpack_module_cache__[e] = { exports: {} });
    return __webpack_modules__[e](o, o.exports, __webpack_require__), o.exports;
  }
  (__webpack_require__.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return __webpack_require__.d(t, { a: t }), t;
  }),
    (__webpack_require__.d = (e, t) => {
      for (var o in t)
        __webpack_require__.o(t, o) &&
          !__webpack_require__.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (__webpack_require__.o = (e, t) =>
      Object.prototype.hasOwnProperty.call(e, t));
  var __webpack_exports__ = {};
  (() => {
    "use strict";
    __webpack_require__(548),
      __webpack_require__(111),
      __webpack_require__(407);
    const e = window.XMLHttpRequest;
    window.XMLHttpRequest = function () {
      const t = new e(),
        o = t.open;
      return (
        (t.open = function (e, t) {
          "POST" === e && t.includes("logger")
            ? showToast(
                "iready cheat has detected a silent log. This would mean your account is banned but iready cheat has prevented this. Stay safe!",
                "orange"
              )
            : o.apply(this, arguments);
        }),
        t
      );
    };
    const t = window.fetch;
    (window.fetch = function (e, o) {
      return e.includes("logger") || JSON.stringify(o).includes("logger")
        ? (showToast(
            "iready cheat has detected a silent log. This would mean your account is banned but iready cheat has prevented this. Stay safe!",
            "orange"
          ),
          Promise.reject(new Error("iready cheat AntiLog")))
        : t.apply(this, arguments);
    }),
      document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
      });
    var o = document.createElement("div");
    (o.style.cssText =
      "position: fixed; bottom: 10px; width: 100%; color: white; font-size: 12px; text-align: center;"),
      (o.textContent = "Copyright © DevTech 2023 All Rights Reserved"),
      document.body.appendChild(o),
      iModal.showModal({
        useInnerHTML: !0,
        title: "iready cheat",
        description: "iready cheat Created by discord.gg/nullify | iready cheat.xyz",
        width: "610px",
        callback: iModal.closeModal,
      }),
      document.getElementsByClassName(
        "css-1lvadjd-Typography-Username e15psnz0"
      )[0] &&
        showToast(
          "Welcome back to iready cheat, " +
            document.getElementsByClassName(
              "css-1lvadjd-Typography-Username e15psnz0"
            )[0].outerText +
            "!",
          "green"
        );
        var n = document.createElement("div");
        (n.innerHTML =
          '<div id="iready" style="position: absolute; top: 100px; left: 100px; padding: 3pt; background: linear-gradient(to top, rgba(128, 0, 128), rgb(110, 128, 128)); color: rgb(10, 128, 128); font-size: 15px; backdrop-filter: blur(20px); z-index: 9999; border-radius: 17pt; box-shadow: rgba(100, 100, 50, 0.7) 0px 0px 10px; width: 200px; display: block;">\n<div class="dh-box" style="background-color: rgba(0, 0, 0, 0.69); border-radius: 15pt; backdrop-filter: blur(5px); padding: 15px;">\n\n\n    <div class="ireadyheader" style="\n    font-weight: bold; text-align: center; font-size: 40px; cursor: move; background: linear-gradient(to left, rgba(255, 0, 18, 1), rgba(255, 0, 183, 1)); color: transparent; font-family: \'Roboto\', sans-serif; font-weight: 500; \n        -webkit-background-clip: text; line-height:80px; margin-top:-25px; text-align: center;">\n      nullify\n    </div>\n\n    <div style="font-weight: bold; font-size: 15px; background: text-align: left;color: white">\n        RIGHT SHIFT TO HIDE\n    </div>\n  <br>\n  \n    <div style="padding: 0.8pt; background: linear-gradient(to left, rgba(255, 0, 18, 1), rgba(255, 0, 183, 1)); color: rgb(1, 1, 1); margin-bottom: 8px; border-radius: 10px;">\n    <div class="modMenuItem" style="cursor: pointer; padding:8px; background-color: rgba(255, 0, 125, 0.41), border-radius: 12px; text-align: center; transition: all .2s ease-out;">\n      <span id="skip" style="font-family: \'Roboto\', sans-serif; letter-spacing: 0.8px; font-weight: 300;">Question Skip</span>\n    </div>\n    </div>\n\n    <div style="padding: 0.8pt; background: linear-gradient(to left, rgba(255, 0, 18, 1), rgba(255, 0, 183, 1)); color: rgb(1, 1, 1); margin-bottom: 8px; border-radius: 10px;">\n    <div class="modMenuItem" style="cursor: pointer; padding:8px; background-color: rgba(255, 0, 125, 0.41); border-radius: 12px; text-align: center; transition: all .2s ease-out;">\n      <span id="admin" style="font-family: \'Roboto\', sans-serif; letter-spacing: 0.8px; font-weight: 300;">admin dashboard</span>\n    </div>\n    </div>\n    \n    <div style="font-weight: bold; font-size: 12px; background: text-align: left;color: cyan">\n        nullify | 69.420.2\n    </div>\n</div>\n'),
          document.body.appendChild(n),
      window.dragElement(n.firstElementChild),
      document.getElementById("skip").addEventListener("click", () => {
        document.getElementById("html5Iframe")
          ? html5Iframe.src.includes("QUIZ")
            ? showToast("Quiz Skipper is a iready cheat premium feature", "orange")
            : (Object.values(
                html5Iframe.contentWindow.document.getElementById("nav-forward")
              )[1].onClick(),
              showToast("Skipped Question!", "purple"))
          : showToast("Not in a lesson!", "red");
      });
    let a = !1;
    document.getElementById("admin").addEventListener("click", () => {
      !1 === a
        ? (Object.values(
            document.getElementById("StudentDashboard-g38")
          )[1].children[0]._owner.stateNode.props.dispatchToggleCheatButtonsAction(),
          showToast(
            "You have access to the admin menu! Be careful as some buttons/functions could cause harm",
            "cyan"
          ),
          (a = !0))
        : (Object.values(
            document.getElementById("StudentDashboard-g38")
          )[1].children[0]._owner.stateNode.props.dispatchToggleCheatButtonsAction(),
          showToast("You no longer have access to the admin menu.", "cyan"),
          (a = !1));
    }),
      (window.isMenuVisible = !0),
      document.addEventListener("keydown", (e) => {
        "ShiftRight" === e.code &&
          (isMenuVisible
            ? ((window.isMenuVisible = !1),
              (document.getElementById("iready cheat").style.display = "none"))
            : ((window.isMenuVisible = !0),
              (document.getElementById("iready cheat").style.display = "block")));
      });
  })();
})();
