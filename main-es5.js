(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+DhY": function DhY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/data.service */
      "R7Hv");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent(data) {
          _classCallCheck(this, AboutComponent);

          this.data = data;
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //console.log(this.router)
            this.linkedin_link = src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"].linkedin_link;
            this.github_link = src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"].github_link;
            this.name = src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"].my_name;
            this.phone = src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"].phone;
            this.phone_link = src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"].phone_link;
            this.email = src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"].email;
            this.email_link = src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"].email_link;
            this.address = src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"].location;
            this.gender = src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"].gender;
            this.age = this.data.get_age();
          }
        }, {
          key: "go_to_contact",
          value: function go_to_contact() {
            $(window).scrollTop($('#contact').position().top);
            /*$('html, body').animate({
              scrollTop: $("#contact").offset().top
            }, 2000);*/
          }
        }]);

        return AboutComponent;
      }();

      AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]));
      };

      AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutComponent,
        selectors: [["app-about"]],
        decls: 60,
        vars: 14,
        consts: [["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", "fxFlex", "85"], ["fxFlex", "5"], ["fxLayout", "column"], ["mat-card-avatar", "", 1, "about-image"], ["fxLayout", "row", 1, "header-links"], ["target", "_blank", 1, "icon", "github", 3, "href"], ["target", "_blank", 1, "icon", "linkedin", 3, "href"], ["target", "_blank", 1, "icon", "email", 3, "href"], ["target", "_blank", 1, "icon", "phone", 3, "href"], ["fxFlex", "10"], ["fxFlex", ""], ["fxLayout", "column", "fxLayoutAlign", "space-around stretch", 1, "name-stuff"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "name-stuff", "name-stuff-2"], [1, "buttons"], ["mat-raised-button", "", "color", "accent"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "inset"], ["fxFlex", "50"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Download CV");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_button_click_19_listener() {
              return ctx.go_to_contact();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " am still developing this thing, dont judge ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Very diligent and autonomous, with a good level in advanced algorithms, infrastructure, automation and security. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Well familiar with DevSecOps practices. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-divider", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Age : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "mat-divider", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Gender : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "mat-divider", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Address : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "mat-divider", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Status : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Final year networks and telecommunication engineering student ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "mat-divider", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Looking for : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Career in DevSecOps, Cloud and Infrastructure engineering");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "mat-divider", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.github_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.linkedin_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.email_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.phone_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inset", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.age, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inset", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.gender, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inset", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.address, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inset", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inset", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inset", true);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardAvatar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatList"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"]],
        styles: ["mat-card[_ngcontent-%COMP%] {\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  \n  flex-wrap: wrap;\n}\n\n#about[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.about-image[_ngcontent-%COMP%] {\n  \n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n  height: 300px;\n  width: 300px;\n  border-radius: 300px;\n  align-self: center;\n  margin-bottom: 30px;\n}\n\n.about-name[_ngcontent-%COMP%] {\n  align-self: center;\n  margin-top: 10px;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  padding-top: 60px;\n  padding-bottom: 60px;\n}\n\n.icon[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  \n  margin-right: 5px;\n}\n\n.name-stuff[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 40px;\n  margin-bottom: 0px;\n}\n\n.name-stuff[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.name-stuff-2[_ngcontent-%COMP%] {\n  flex-wrap: wrap-reverse;\n}\n\n.header-links[_ngcontent-%COMP%] {\n  align-self: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDQyxTQUFBO0VBQ0EsVUFBQTtBQUNEOztBQUVBO0VBQ0UseURBQUE7RUFDQSxtRkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJke1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICAvKndpZHRoOiA5NSU7Ki9cbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4jYWJvdXQgbWF0LWNhcmQgZGl2e1xuIG1hcmdpbjogMDtcbiBwYWRkaW5nOiAwO1xufVxuXG4uYWJvdXQtaW1hZ2Uge1xuICAvKmJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9tZS0xLnBuZycpOyovXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwMHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5hYm91dC1uYW1le1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbm1hdC1jYXJke1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBwYWRkaW5nLXRvcDogNjBweDtcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XG59XG5cbi5pY29ue1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5idXR0b25zIGJ1dHRvbntcbiAgLyptYXJnaW4tdG9wOiAxMHB4OyovXG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ubmFtZS1zdHVmZiBoMXtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5uYW1lLXN0dWZmIGgye1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ubmFtZS1zdHVmZi0ye1xuICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcbn1cblxuLmhlYWRlci1saW5rc3tcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-about',
            templateUrl: './about.component.html',
            styleUrls: ['./about.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    0: function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /usr/src/app/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1yxt": function yxt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InterestsComponent", function () {
        return InterestsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var InterestsComponent = /*#__PURE__*/function () {
        function InterestsComponent() {
          _classCallCheck(this, InterestsComponent);
        }

        _createClass(InterestsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return InterestsComponent;
      }();

      InterestsComponent.ɵfac = function InterestsComponent_Factory(t) {
        return new (t || InterestsComponent)();
      };

      InterestsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InterestsComponent,
        selectors: [["app-interests"]],
        decls: 0,
        vars: 0,
        template: function InterestsComponent_Template(rf, ctx) {},
        styles: [".block.mat-chip {\n  border-radius: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnRlcmVzdHMvaW50ZXJlc3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW50ZXJlc3RzL2ludGVyZXN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAuYmxvY2subWF0LWNoaXB7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InterestsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-interests',
            templateUrl: './interests.component.html',
            styleUrls: ['./interests.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "5gzz": function gzz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function () {
        return ExperienceComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../timeline/timeline.component */
      "LsEZ");

      var ExperienceComponent = /*#__PURE__*/function () {
        function ExperienceComponent() {
          _classCallCheck(this, ExperienceComponent);
        }

        _createClass(ExperienceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.events = [{
              date: "Feb 2021 - Jul 2021",
              location: "Polytechnique Montréal",
              location_link: "https://www.polymtl.ca/",
              title: "Cloud Infrastructure Engineer",
              icon: "http",
              content: "\
          Unlocking the operators and developers innovation potential by modernizing the applications and network infrastructure.\
            <br><br>\
            <ul>\
              <li>Implementing the organization's servers management solution.</li>\
              <li>Researching and implementing open source SIEM solutions.</li>\
              <li>Leveraging the Zero Trust security model principles.</li>\
              <li>Leading an on-production network transformation toward a highly available and layered network architecture.</li>\
              <li>Researching and implementing PAM solutions.</li>\
            </ul>\
          ",
              links: [{
                display: "Recommendation Letter",
                link: "../../../assets/diplomas/"
              }]
            }, {
              date: "Dec 2020 - Dec 2021",
              location: "Go My Code",
              location_link: "https://www.linkedin.com/school/go-my-code/",
              title: "DevOps Instructor",
              icon: "laptop",
              content: "\
          Providing professionals with a project oriented DevOps training.\
          ",
              links: [{
                display: "Attestation",
                link: "../../../assets/diplomas/"
              }, {
                display: "Report",
                link: "../../../assets/diplomas/"
              }]
            }, {
              date: "Jun 2020 - Sep 2020",
              location: "Eyacom",
              location_link: "https://www.linkedin.com/company/eyacomitsolutions/",
              title: "DevOps Engineering Intern",
              icon: "http",
              content: "\
          Designing and implementing a proper DevOps workflow.\
          <br><br><ul>\
          <li>Aspiring to learn good development, system and security best practices, as well as collaborating with a polyvalent and an Agile team of engineers.</li>\
          <li>Building, optimizing, securing, and auditing CI/CD pipelines for multiple web app microservices. </li>\
          </ul>\
          ",
              links: [{
                display: "Report",
                link: "../../../assets/diplomas/"
              }]
            }, {
              date: "Jul 2019 - Sep 2019",
              location: "LogiDAS",
              location_link: "https://www.linkedin.com/company/logidas---editeur-d'erp/",
              title: "Software Development Intern",
              icon: "http",
              content: "\
        A utomating various administrative and applications specific tasks.\
          ",
              links: [{
                display: "Report",
                link: "../../../assets/diplomas/"
              }]
            }, {
              date: "Jun 2017 - Jul 2017",
              location: "Waycon",
              location_link: "https://www.linkedin.com/company/waycon/",
              title: "Software Development Intern",
              icon: "http",
              content: "\
          Developing cross-platform libraries to operate security devices.\
          ",
              links: [{
                display: "Report",
                link: "../../../assets/diplomas/"
              }]
            }];
          }
        }]);

        return ExperienceComponent;
      }();

      ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) {
        return new (t || ExperienceComponent)();
      };

      ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ExperienceComponent,
        selectors: [["app-experience"]],
        decls: 5,
        vars: 1,
        consts: [["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxFlex", "95"], [3, "events"]],
        template: function ExperienceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Experience");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-timeline", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("events", ctx.events);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_2__["TimelineComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-experience',
            templateUrl: './experience.component.html',
            styleUrls: ['./experience.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "6bE9": function bE9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
        return ProjectsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");

      function ProjectsComponent_mat_card_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.date);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", project_r1.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      var ProjectsComponent = /*#__PURE__*/function () {
        function ProjectsComponent() {
          _classCallCheck(this, ProjectsComponent);
        }

        _createClass(ProjectsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.projects = [{
              title: "Deep Learning for photographic defects detection",
              order: 0,
              real_order: 0,
              date: "Feb 2020 - May 2020",
              description: "\
        Enabeling faster Deep Learning development through automation.\
            <br><br>\
            <ul>\
              <li>Version control management.</li>\
              <li>Cloud resources provisioning.</li>\
              <li>Model training and monitoring, and artifact collection.</li>\
            </ul>\
        "
            }];
            this.sort_for_grid();
          }
        }, {
          key: "sort_for_grid",
          value: function sort_for_grid() {
            this.projects.sort(function (a, b) {
              return a.order - b.order;
            });
          }
        }, {
          key: "sort_for_list",
          value: function sort_for_list() {
            this.projects.sort(function (a, b) {
              return a.real_order - b.real_order;
            });
          }
        }]);

        return ProjectsComponent;
      }();

      ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
        return new (t || ProjectsComponent)();
      };

      ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProjectsComponent,
        selectors: [["app-projects"]],
        decls: 6,
        vars: 1,
        consts: [["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxFlex", "95"], [1, "cards"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], ["fxLayout", "row"], [1, "icon", "github", "big"], [3, "innerHTML"]],
        template: function ProjectsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProjectsComponent_mat_card_5_Template, 11, 3, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"]],
        styles: [".card[_ngcontent-%COMP%] {\n  width: 47%;\n  max-width: 47%;\n  margin-left: 30px;\n  margin-bottom: 30px;\n  padding: 40px;\n}\n\n.cards[_ngcontent-%COMP%] {\n  \n  \n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  align-content: flex-start;\n  max-height: 200vh;\n}\n\n  .mat-card-header-text {\n  margin: 0px !important;\n}\n\n.big[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFOzs7Ozs2QkFBQTtFQU1ELHNCQUFBO0VBQ0EsYUFBQTtFQUNELHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQUNBOztBQUVBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcbiAgd2lkdGg6IDQ3JTtcbiAgbWF4LXdpZHRoOiA0NyU7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBwYWRkaW5nOiA0MHB4O1xufVxuXG4uY2FyZHMge1xuICAvKlxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0OyovXG4gLyogbWF4LWhlaWdodDogMjAwdmg7Ki9cbiBkaXNwbGF5OiBmbGV4O1xuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmZsZXgtd3JhcDogd3JhcDtcbmFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbm1heC1oZWlnaHQ6IDIwMHZoO1xufVxuXG46Om5nLWRlZXAgLm1hdC1jYXJkLWhlYWRlci10ZXh0e1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuXG4uYmlne1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-projects',
            templateUrl: './projects.component.html',
            styleUrls: ['./projects.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "A9VX": function A9VX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkillsComponent", function () {
        return SkillsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");

      var SkillsComponent = /*#__PURE__*/function () {
        function SkillsComponent() {
          _classCallCheck(this, SkillsComponent);

          this.availableColors = [{
            name: 'none',
            color: undefined
          }, {
            name: 'Primary',
            color: 'primary'
          }, {
            name: 'Accent',
            color: 'accent'
          }, {
            name: 'Warn',
            color: 'warn'
          }];
        }

        _createClass(SkillsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SkillsComponent;
      }();

      SkillsComponent.ɵfac = function SkillsComponent_Factory(t) {
        return new (t || SkillsComponent)();
      };

      SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SkillsComponent,
        selectors: [["app-skills"]],
        decls: 74,
        vars: 0,
        consts: [["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxFlex", "95", 1, "skill-lists"], [1, "title"], [1, "chips"], ["fxLayout", "row", "fxLayoutAlign", "start start"], [1, "inline"], ["color", "primary", "selected", ""]],
        template: function SkillsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Skills");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Technical Skills");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Programming Languages \xA0 : \xA0 \xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-chip-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-chip", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "C/C++");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-chip", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Java");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-chip", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Python");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-chip", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "C#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-chip", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Bash");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Web Development \xA0 : \xA0 \xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-chip-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-chip", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "HTML/CSS/JS/PHP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-chip", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Angular");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Databases \xA0 : \xA0 \xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-chip-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-chip", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "MySQL");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-chip", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "PostgreSQL");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-chip", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "MongoDB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "DevOps \xA0 : \xA0 \xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-chip-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-chip", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Git");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-chip", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Docker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-chip", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Openshift");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-chip", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Kubernetes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-chip", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Ansible");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-chip", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Terraform");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-chip", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "AWS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-chip", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Azure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h3", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Soft Skills");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-chip-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-chip", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Adaptability");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-chip", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Time Management");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-chip", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Communication");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__["MatChip"]],
        styles: [".inline[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0;\n  margin-bottom: 2px;\n  min-width: -webkit-max-content;\n  min-width: -moz-max-content;\n  min-width: max-content;\n}\n\n.skill-lists[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.chips[_ngcontent-%COMP%] {\n  margin-left: 60px;\n}\n\n.title[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubGluZXtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcbn1cblxuLnNraWxsLWxpc3RzIGRpdntcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmNoaXBze1xuICBtYXJnaW4tbGVmdDogNjBweDtcbn1cblxuLnRpdGxle1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-skills',
            templateUrl: './skills.component.html',
            styleUrls: ['./skills.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR": function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "F7NT": function F7NT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EducationComponent", function () {
        return EducationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../timeline/timeline.component */
      "LsEZ");

      var EducationComponent = /*#__PURE__*/function () {
        function EducationComponent() {
          _classCallCheck(this, EducationComponent);
        }

        _createClass(EducationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.events = [{
              date: "2016 - 2021",
              location: "National Institute of Applied Sciences and Technology",
              location_link: "http://www.insat.rnu.tn/",
              title: "National Engineering Diploma",
              icon: "laptop",
              content: "Major: Computer Networks and Telecommunication Engineering <br><br> This invovled a focus on ICT Infrastructure, Cloud Infrastructure, Network Design, Network Security, DevOps Practices, Automation and Testing.",
              links: [{
                display: "Transcripts",
                link: "../../../assets/diplomas/"
              }]
            }, {
              date: "2012 - 2016",
              location: "Rades Technical High School",
              title: "Baccalaureate with honors",
              icon: "school",
              content: "Specialization in Computer Science <br><br>This invloved a focus on mathematics and algorithms but also included technologies (mysql, html5, javascript and php) and physics.",
              links: [{
                display: "Diploma (arabic)",
                link: "../../../assets/diplomas/"
              }, {
                display: "Diploma (french)",
                link: "../../../assets/diplomas/"
              }]
            }];
          }
        }]);

        return EducationComponent;
      }();

      EducationComponent.ɵfac = function EducationComponent_Factory(t) {
        return new (t || EducationComponent)();
      };

      EducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EducationComponent,
        selectors: [["app-education"]],
        decls: 5,
        vars: 1,
        consts: [["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxFlex", "95"], [3, "events"]],
        template: function EducationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Education");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-timeline", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("events", ctx.events);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_2__["TimelineComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-education',
            templateUrl: './education.component.html',
            styleUrls: ['./education.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "G2Gn": function G2Gn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
        return ContactComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/data.service */
      "R7Hv");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");

      var ContactComponent = /*#__PURE__*/function () {
        function ContactComponent(data) {
          _classCallCheck(this, ContactComponent);

          this.data = data;
        }

        _createClass(ContactComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //console.log(this.router)
            this.linkedin = src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"].linkedin;
            this.linkedin_link = src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"].linkedin_link;
            this.github = src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"].github;
            this.github_link = src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"].github_link;
            this.phone = src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"].phone;
            this.phone_link = src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"].phone_link;
            this.email = src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"].email;
            this.email_link = src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"].email_link;
            this.location = src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"].location;
            this.location_link = src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"].location_link;
          }
        }]);

        return ContactComponent;
      }();

      ContactComponent.ɵfac = function ContactComponent_Factory(t) {
        return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]));
      };

      ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContactComponent,
        selectors: [["app-contact"]],
        decls: 23,
        vars: 10,
        consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "main"], ["fxFlex", "95"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", "fxFlex", "55", 1, "bg-card"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", "fxFlex", "85"], [1, "contact-info"], ["target", "_blank", 1, "icon", "location", 3, "href"], ["target", "_blank", 1, "email", "icon", 3, "href"], ["target", "_blank", 1, "icon", "phone", 3, "href"], ["target", "_blank", 1, "linkedin", "icon", 3, "href"], ["target", "_blank", 1, "icon", "github", 3, "href"]],
        template: function ContactComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.location_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.location);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.email_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.email, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.phone_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.phone);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.linkedin_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.linkedin, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.github_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.github, "");
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"]],
        styles: [".main[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n\n.bg-card[_ngcontent-%COMP%] {\n  background-image: url('3.jpg');\n  background-repeat: round;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7RUFDQSx3QkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbntcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLmJnLWNhcmR7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2JhY2tncm91bmRzLzMuanBnJyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByb3VuZDtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-contact',
            templateUrl: './contact.component.html',
            styleUrls: ['./contact.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "LsEZ": function LsEZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimelineComponent", function () {
        return TimelineComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function TimelineComponent_li_1_a_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a", 13);
        }

        if (rf & 2) {
          var event_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", event_r1.location_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function TimelineComponent_li_1_button_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var link_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r5.display, "");
        }
      }

      function TimelineComponent_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \xA0 \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "small", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TimelineComponent_li_1_a_15_Template, 1, 1, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TimelineComponent_li_1_button_19_Template, 3, 1, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var event_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r1.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", event_r1.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r1.date);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", event_r1.location_link);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", event_r1.location, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", event_r1.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", event_r1.links);
        }
      }

      var TimelineComponent = /*#__PURE__*/function () {
        function TimelineComponent() {
          _classCallCheck(this, TimelineComponent);
        }

        _createClass(TimelineComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TimelineComponent;
      }();

      TimelineComponent.ɵfac = function TimelineComponent_Factory(t) {
        return new (t || TimelineComponent)();
      };

      TimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TimelineComponent,
        selectors: [["app-timeline"]],
        inputs: {
          events: "events"
        },
        decls: 2,
        vars: 1,
        consts: [[1, "timeline", "timeline-left"], ["class", "timeline-inverted timeline-item", 4, "ngFor", "ngForOf"], [1, "timeline-inverted", "timeline-item"], [1, "timeline-badge", "success"], [1, "timeline-panel"], [1, "timeline-heading"], [1, "title-date"], [1, "timeline-title"], [1, "text-muted"], ["target", "_blank", "class", "icon link", 3, "href", 4, "ngIf"], [1, "timeline-body"], [3, "innerHtml"], ["mat-raised-button", "", "color", "primary", 4, "ngFor", "ngForOf"], ["target", "_blank", 1, "icon", "link", 3, "href"], ["mat-raised-button", "", "color", "primary"]],
        template: function TimelineComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TimelineComponent_li_1_Template, 20, 7, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.events);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
        styles: [".timeline[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 20px 0;\n  list-style: none;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.timeline[_ngcontent-%COMP%]:before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 3px;\n  margin-left: -1.5px;\n  background-color: #e9ecef;\n}\n\n.timeline[_ngcontent-%COMP%]    > .timeline-item[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 20px;\n}\n\n.timeline[_ngcontent-%COMP%]    > .timeline-item[_ngcontent-%COMP%]:after, .timeline[_ngcontent-%COMP%]    > .timeline-item[_ngcontent-%COMP%]:before {\n  content: \" \";\n  display: table;\n}\n\n.timeline[_ngcontent-%COMP%]    > .timeline-item[_ngcontent-%COMP%]:after {\n  clear: both;\n}\n\n.timeline[_ngcontent-%COMP%]    > .timeline-item[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%] {\n  float: left;\n  position: relative;\n  width: 46%;\n  padding: 20px;\n  border: 1px solid #e9ecef;\n  border-radius: 2px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);\n}\n\n.timeline[_ngcontent-%COMP%]    > .timeline-item[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%]:before {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 26px;\n  right: -8px;\n  border-color: transparent #e9ecef;\n  border-style: solid;\n  border-width: 8px 0 8px 8px;\n}\n\n.timeline[_ngcontent-%COMP%]    > .timeline-item[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%]:after {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 27px;\n  right: -7px;\n  border-color: transparent #fff;\n  border-style: solid;\n  border-width: 7px 0 7px 7px;\n}\n\n.timeline[_ngcontent-%COMP%]    > .timeline-item[_ngcontent-%COMP%]    > .timeline-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  left: 50%;\n  width: 50px;\n  height: 50px;\n  margin-left: -25px;\n  border-radius: 50% 50% 50% 50%;\n  text-align: center;\n  font-size: 1.4em;\n  line-height: 50px;\n  color: #fff;\n  overflow: hidden;\n}\n\n.timeline[_ngcontent-%COMP%]    > .timeline-item.timeline-inverted[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%] {\n  float: right;\n  background-color: white;\n}\n\n.timeline[_ngcontent-%COMP%]    > .timeline-item.timeline-inverted[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%]:before {\n  right: auto;\n  left: -8px;\n  border-right-width: 8px;\n  border-left-width: 0;\n}\n\n.timeline[_ngcontent-%COMP%]    > .timeline-item.timeline-inverted[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%]:after {\n  right: auto;\n  left: -7px;\n  border-right-width: 7px;\n  border-left-width: 0;\n}\n\n.timeline-badge.primary[_ngcontent-%COMP%] {\n  background-color: #7460ee;\n}\n\n.timeline-badge.success[_ngcontent-%COMP%] {\n  background-color: #39c449;\n}\n\n.timeline-badge.warning[_ngcontent-%COMP%] {\n  background-color: #ffbc34;\n}\n\n.timeline-badge.danger[_ngcontent-%COMP%] {\n  background-color: #f62d51;\n}\n\n.timeline-badge.info[_ngcontent-%COMP%] {\n  background-color: #009efb;\n}\n\n.timeline-title[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: inherit;\n  font-weight: 400;\n}\n\n.timeline-body[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%], .timeline-body[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.timeline-left[_ngcontent-%COMP%]:before {\n  left: 30px;\n}\n\n.timeline-left[_ngcontent-%COMP%]    > .timeline-item[_ngcontent-%COMP%]    > .timeline-badge[_ngcontent-%COMP%] {\n  left: 30px;\n  top: 9px;\n}\n\n.timeline-left[_ngcontent-%COMP%]    > .timeline-item[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%] {\n  width: calc(100% - 80px);\n}\n\n.timeline-right[_ngcontent-%COMP%]:before {\n  right: 30px;\n  left: auto;\n}\n\n.timeline-right[_ngcontent-%COMP%]    > .timeline-item[_ngcontent-%COMP%]    > .timeline-badge[_ngcontent-%COMP%] {\n  right: 5px;\n  top: 9px;\n  left: auto;\n}\n\n.timeline-right[_ngcontent-%COMP%]    > .timeline-item[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%] {\n  width: calc(100% - 80px);\n}\n\n  .material-icons {\n  line-height: unset !important;\n}\n\n.title-date[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.text-muted[_ngcontent-%COMP%] {\n  position: relative;\n  top: 4px;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.timeline-heading[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUdGOztBQURBOztFQUVFLFlBQUE7RUFDQSxjQUFBO0FBSUY7O0FBRkE7RUFDRSxXQUFBO0FBS0Y7O0FBSEE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtBQU1GOztBQUpBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQU9GOztBQUxBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQVFGOztBQU5BO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQVNGOztBQVBBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0FBVUY7O0FBUkE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUFXRjs7QUFUQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQVlGOztBQVZBO0VBQ0UseUJBQUE7QUFhRjs7QUFYQTtFQUNFLHlCQUFBO0FBY0Y7O0FBWkE7RUFDRSx5QkFBQTtBQWVGOztBQWJBO0VBQ0UseUJBQUE7QUFnQkY7O0FBZEE7RUFDRSx5QkFBQTtBQWlCRjs7QUFmQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFrQkY7O0FBaEJBOztFQUVFLGdCQUFBO0FBbUJGOztBQWpCQTtFQUNFLFVBQUE7QUFvQkY7O0FBbEJBO0VBQ0UsVUFBQTtFQUNBLFFBQUE7QUFxQkY7O0FBbkJBO0VBQ0Usd0JBQUE7QUFzQkY7O0FBcEJBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUF1QkY7O0FBckJBO0VBQ0UsVUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBd0JGOztBQXRCQTtFQUNFLHdCQUFBO0FBeUJGOztBQXRCQTtFQUNFLDZCQUFBO0FBeUJGOztBQXRCQTtFQUNFLGFBQUE7QUF5QkY7O0FBdEJBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FBeUJGOztBQXRCQTtFQUNFLGdCQUFBO0FBeUJGOztBQXRCQTtFQUNFLG1CQUFBO0FBeUJGOztBQXZCQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUEwQkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpbWVsaW5lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi50aW1lbGluZTpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogM3B4O1xuICBtYXJnaW4tbGVmdDogLTEuNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xufVxuLnRpbWVsaW5lID4gLnRpbWVsaW5lLWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4udGltZWxpbmUgPiAudGltZWxpbmUtaXRlbTphZnRlcixcbi50aW1lbGluZSA+IC50aW1lbGluZS1pdGVtOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cbi50aW1lbGluZSA+IC50aW1lbGluZS1pdGVtOmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG59XG4udGltZWxpbmUgPiAudGltZWxpbmUtaXRlbSA+IC50aW1lbGluZS1wYW5lbCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA0NiU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm94LXNoYWRvdzogMCAxcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG4udGltZWxpbmUgPiAudGltZWxpbmUtaXRlbSA+IC50aW1lbGluZS1wYW5lbDpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjZweDtcbiAgcmlnaHQ6IC04cHg7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2U5ZWNlZjtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiA4cHggMCA4cHggOHB4O1xufVxuLnRpbWVsaW5lID4gLnRpbWVsaW5lLWl0ZW0gPiAudGltZWxpbmUtcGFuZWw6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjdweDtcbiAgcmlnaHQ6IC03cHg7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2ZmZjtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiA3cHggMCA3cHggN3B4O1xufVxuLnRpbWVsaW5lID4gLnRpbWVsaW5lLWl0ZW0gPiAudGltZWxpbmUtYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTZweDtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tbGVmdDogLTI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgNTAlIDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuNGVtO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udGltZWxpbmUgPiAudGltZWxpbmUtaXRlbS50aW1lbGluZS1pbnZlcnRlZCA+IC50aW1lbGluZS1wYW5lbCB7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4udGltZWxpbmUgPiAudGltZWxpbmUtaXRlbS50aW1lbGluZS1pbnZlcnRlZCA+IC50aW1lbGluZS1wYW5lbDpiZWZvcmUge1xuICByaWdodDogYXV0bztcbiAgbGVmdDogLThweDtcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiA4cHg7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xufVxuLnRpbWVsaW5lID4gLnRpbWVsaW5lLWl0ZW0udGltZWxpbmUtaW52ZXJ0ZWQgPiAudGltZWxpbmUtcGFuZWw6YWZ0ZXIge1xuICByaWdodDogYXV0bztcbiAgbGVmdDogLTdweDtcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiA3cHg7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xufVxuLnRpbWVsaW5lLWJhZGdlLnByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzQ2MGVlO1xufVxuLnRpbWVsaW5lLWJhZGdlLnN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzljNDQ5O1xufVxuLnRpbWVsaW5lLWJhZGdlLndhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiYzM0O1xufVxuLnRpbWVsaW5lLWJhZGdlLmRhbmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNjJkNTE7XG59XG4udGltZWxpbmUtYmFkZ2UuaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDllZmI7XG59XG4udGltZWxpbmUtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAwO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi50aW1lbGluZS1ib2R5ID4gcCxcbi50aW1lbGluZS1ib2R5ID4gdWwge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnRpbWVsaW5lLWxlZnQ6YmVmb3JlIHtcbiAgbGVmdDogMzBweDtcbn1cbi50aW1lbGluZS1sZWZ0ID4gLnRpbWVsaW5lLWl0ZW0gPiAudGltZWxpbmUtYmFkZ2Uge1xuICBsZWZ0OiAzMHB4O1xuICB0b3A6IDlweDtcbn1cbi50aW1lbGluZS1sZWZ0ID4gLnRpbWVsaW5lLWl0ZW0gPiAudGltZWxpbmUtcGFuZWwge1xuICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XG59XG4udGltZWxpbmUtcmlnaHQ6YmVmb3JlIHtcbiAgcmlnaHQ6IDMwcHg7XG4gIGxlZnQ6IGF1dG87XG59XG4udGltZWxpbmUtcmlnaHQgPiAudGltZWxpbmUtaXRlbSA+IC50aW1lbGluZS1iYWRnZSB7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogOXB4O1xuICBsZWZ0OiBhdXRvO1xufVxuLnRpbWVsaW5lLXJpZ2h0ID4gLnRpbWVsaW5lLWl0ZW0gPiAudGltZWxpbmUtcGFuZWwge1xuICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XG59XG5cbjo6bmctZGVlcCAubWF0ZXJpYWwtaWNvbnN7XG4gIGxpbmUtaGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG4udGl0bGUtZGF0ZXtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnRleHQtbXV0ZWR7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0cHg7XG59XG5cbmgze1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4udGltZWxpbmUtaGVhZGluZ3tcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbn1cbmJ1dHRvbntcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimelineComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-timeline',
            templateUrl: './timeline.component.html',
            styleUrls: ['./timeline.component.scss']
          }]
        }], function () {
          return [];
        }, {
          events: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "R7Hv": function R7Hv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataService", function () {
        return DataService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DataService = /*#__PURE__*/function () {
        function DataService() {
          _classCallCheck(this, DataService);
        }

        _createClass(DataService, [{
          key: "get_age",
          value: function get_age() {
            var birthDate = new Date();
            birthDate.setDate(14);
            birthDate.setMonth(4);
            birthDate.setFullYear(1997);
            var today = new Date();
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();

            if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
              age--;
            }

            return age;
          }
        }]);

        return DataService;
      }();

      DataService.my_name = "Firas Medini";
      DataService.github = "github.com/mdnfiras";
      DataService.github_link = "https://github.com/mdnfiras";
      DataService.linkedin = "linkedin.com/in/mdnfiras/";
      DataService.linkedin_link = "https://www.linkedin.com/in/mdnfiras/";
      DataService.gender = "Male";
      DataService.email = "firas.medini@insat.u-carthage.tn";
      DataService.phone = "+216 28 107 680";
      DataService.phone_link = "tel:+21628107680";
      DataService.email_link = "mailto:firas.medini@insat.u-carthage.tn";
      DataService.location = "Ariana - Tunisia";
      DataService.location_link = "https://www.google.com/maps/place/Ariana/@37.3281163,4.4033598,5.89z/data=!4m5!3m4!1s0x12e2cb34bd64ca87:0xcba9f5235ee1ba8b!8m2!3d36.8596907!4d10.1975119";

      DataService.ɵfac = function DataService_Factory(t) {
        return new (t || DataService)();
      };

      DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DataService,
        factory: DataService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n": function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./data.service */
      "R7Hv");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _components_about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/about/about.component */
      "+DhY");
      /* harmony import */


      var _components_education_education_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/education/education.component */
      "F7NT");
      /* harmony import */


      var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/experience/experience.component */
      "5gzz");
      /* harmony import */


      var _components_certificates_certificates_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/certificates/certificates.component */
      "nkWX");
      /* harmony import */


      var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/skills/skills.component */
      "A9VX");
      /* harmony import */


      var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./components/projects/projects.component */
      "6bE9");
      /* harmony import */


      var _components_interests_interests_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./components/interests/interests.component */
      "1yxt");
      /* harmony import */


      var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./components/contact/contact.component */
      "G2Gn");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");

      function AppComponent_span_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_span_10_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return _r0.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var link_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", link_r5.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r5.display, " ");
        }
      }

      function AppComponent_a_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_a_22_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var link_r8 = ctx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.activeLink = link_r8.link;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var link_r8 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", ctx_r2.activeLink == link_r8.link)("href", link_r8.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r8.display, " ");
        }
      }

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);

          this.title = 'resume';
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.scrollTop = 0; //console.log(this.router)

            this.linkedin = _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"].linkedin;
            this.github = _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"].github;
            this.name = _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"].my_name;
            this.links = [{
              display: "About",
              link: "#about"
            }, {
              display: "Education",
              link: "#education"
            }, {
              display: "Experience",
              link: "#experience"
            }, {
              display: "Certificates",
              link: "#certificates"
            }, {
              display: "Skills",
              link: "#skills"
            }, {
              display: "Projects",
              link: "#projects"
            }, {
              display: "Interests",
              link: "#interests"
            }, {
              display: "Contact",
              link: "#contact"
            }];
            this.activeLink = this.links[0].link;
            var self = this;
            $(window).scroll(function () {
              var winHeight = $(this).height();
              self.scrollTop = $(this).scrollTop();
              var scrolls = $(".scroll");

              for (var index = 0; index < scrolls.length; index++) {
                var element = scrolls[index];
                var elemHeight = $(element).height();
                var elementTop = $(element).position().top;

                if (elementTop < self.scrollTop + winHeight && self.scrollTop < elementTop + elemHeight) {
                  self.activeLink = "#" + $(element).attr("id");
                  return;
                }
              }
            });
          }
        }, {
          key: "go_up",
          value: function go_up() {
            window.scrollTo(0, 0);
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 69,
        vars: 10,
        consts: [["drawer", ""], ["fxLayout", "column"], ["mat-card-avatar", "", 1, "header-image"], [1, "header-name"], ["fxLayout", "row", 1, "header-links"], ["target", "_blank", 1, "icon", "linkedin", 3, "href"], ["target", "_blank", 1, "icon", "github", 3, "href"], ["class", "side-element", 4, "ngFor", "ngForOf"], ["fxFlex", "", "autosize", "", "fxLayout", "column", 1, "background"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "navbar-color", "mat-elevation-z8", "p-0", "tool", 2, "z-index", "2"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], ["mat-button", "", "fxShow", "false", "fxShow.lt-md", "", 3, "click"], [1, "ll-icon"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "name"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 3, "click"], ["fxLayout", "row", "fxShow", "false", "fxShow.gt-sm", ""], ["mat-tab-nav-bar", ""], ["mat-tab-link", "", "class", "link", 3, "active", "href", "click", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], [1, "l-icon"], ["menu", "matMenu"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["contactme", "matMenu"], ["fxLayout", "column", "fxLayoutAlign", "start", 1, "content", 3, "click"], ["id", "about", "fxLayout", "column", "fxLayout", "column", "fxLayoutAlign", "center stretch", 1, "scroll"], ["id", "education", 1, "scroll"], ["id", "experience", 1, "scroll"], ["id", "certificates", 1, "scroll"], ["id", "skills", 1, "scroll"], ["id", "projects", 1, "scroll"], ["id", "interests", 1, "scroll"], ["id", "contact", "fxLayout", "column", "fxLayout", "column", "fxLayoutAlign", "center stretch", 1, "scroll"], ["mat-fab", "", "color", "basic", "fxShow", "false", "fxShow.gt-sm", "", 1, "up", 3, "disabled", "click"], ["mat-mini-fab", "", "color", "basic", "fxShow", "false", "fxShow.lt-md", "", 1, "up", 3, "disabled", "click"], [1, "side-element"], ["mat-button", "", "fxLayoutAlign", "start", 3, "href", "click"], ["mat-tab-link", "", 1, "link", 3, "active", "href", "click"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer", null, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_span_10_Template, 4, 2, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-drawer-container", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-toolbar", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_14_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

              return _r0.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_19_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

              return _r0.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nav", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AppComponent_a_22_Template, 2, 3, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-menu", null, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "download");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Download Resume");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "voicemail");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Contact Me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-menu", null, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Call Me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Email Me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Message Me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_46_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

              return _r0.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "app-about");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "app-education");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "app-experience");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "app-certificates");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "app-skills");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "app-projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "app-interests");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "app-contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_63_listener() {
              return ctx.go_up();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "keyboard_arrow_up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_66_listener() {
              return ctx.go_up();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "keyboard_arrow_up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.linkedin, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.github, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.links);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.links);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.scrollTop === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.scrollTop === 0);
          }
        },
        directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawer"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardAvatar"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContainer"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__["DefaultShowHideDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabNav"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuItem"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"], _components_education_education_component__WEBPACK_IMPORTED_MODULE_13__["EducationComponent"], _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_14__["ExperienceComponent"], _components_certificates_certificates_component__WEBPACK_IMPORTED_MODULE_15__["CertificatesComponent"], _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_16__["SkillsComponent"], _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_17__["ProjectsComponent"], _components_interests_interests_component__WEBPACK_IMPORTED_MODULE_18__["InterestsComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_19__["ContactComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDivider"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabLink"]],
        styles: [".tool[_ngcontent-%COMP%] {\n  width: 95%;\n  align-self: center;\n  height: 60px;\n}\n\n  .mat-tab-link {\n  min-width: 0px !important;\n  width: auto !important;\n  height: 60px !important;\n}\n\n.side-element[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.side-element[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 50px;\n  align-items: center !important;\n}\n\n  mat-drawer-content {\n  display: contents !important;\n}\n\n  mat-drawer {\n  position: fixed !important;\n}\n\n  mat-toolbar {\n  position: fixed;\n}\n\n.header-image[_ngcontent-%COMP%] {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n  height: 100px;\n  width: 100px;\n  border-radius: 100px;\n  align-self: center;\n  margin-top: 30px;\n}\n\n.header-name[_ngcontent-%COMP%] {\n  align-self: center;\n  margin-top: 10px;\n}\n\n.header-links[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: inline;\n  \n  background: rgba(34, 117, 195, 0.089);\n  \n}\n\n.content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding-top: 60px;\n}\n\n#about[_ngcontent-%COMP%] {\n  background-image: url('3.jpg');\n  background-repeat: repeat-x;\n  background-size: 100% 70%;\n}\n\n.name[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n  mat-icon.l-icon {\n  vertical-align: baseline !important;\n}\n\n  mat-icon.ll-icon {\n  vertical-align: text-bottom !important;\n}\n\n.up[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUZBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBSUE7RUFDRSxrQkFBQTtBQURGOztBQUlBO0VBQ0EsZUFBQTtFQUNBOytGQUFBO0VBR0EscUNBQUE7RUFBc0M7b0hBQUE7QUFBdEM7O0FBSUE7RUFDRSxpQkFBQTtBQURGOztBQUlBO0VBQ0UsOEJBQUE7RUFDQSwyQkFBQTtFQUNGLHlCQUFBO0FBREE7O0FBSUE7RUFDRSxpQkFBQTtBQURGOztBQUlBO0VBQ0UsbUNBQUE7QUFERjs7QUFJQTtFQUNFLHNDQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0YsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FBREEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbCB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA2MHB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC10YWItbGluayB7XG4gICAgbWluLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xufVxuXG4uc2lkZS1lbGVtZW50e1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5zaWRlLWVsZW1lbnQgYXtcbiAgaGVpZ2h0OiA1MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCBtYXQtZHJhd2VyLWNvbnRlbnR7XG4gIGRpc3BsYXk6IGNvbnRlbnRzICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCBtYXQtZHJhd2Vye1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIG1hdC10b29sYmFye1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uaGVhZGVyLW5hbWV7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuXG5cbi5oZWFkZXItbGlua3N7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnR7XG5kaXNwbGF5OiBpbmxpbmU7XG4vKmJhY2tncm91bmQ6IHJnYigyNTMsNDUsODQpO1xuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoNDUsMjUzLDY1LCAwLjAzNCkgMCUsIHJnYmEoMzQsIDEwMSwgMTk1LCAwLjAzNCkgNjMlKTsqL1xuXG5iYWNrZ3JvdW5kOiByZ2JhKDM0LCAxMTcsIDE5NSwgMC4wODkpOy8qXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLDIxOCwyMSwwLjAyODk5MTU3OTU0MTk3MzEpIDAlLCByZ2JhKDM0LDExOCwxOTUsMC4xMjY0NzA1NzExMzg2MTE3KSA2MyUpOyovXG59XG5cbi5jb250ZW50IGRpdntcbiAgcGFkZGluZy10b3A6IDYwcHg7XG59XG5cbiNhYm91dHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvYmFja2dyb3VuZHMvMy5qcGcnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuYmFja2dyb3VuZC1zaXplOiAxMDAlIDcwJTtcbn1cblxuLm5hbWV7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG46Om5nLWRlZXAgbWF0LWljb24ubC1pY29ue1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIG1hdC1pY29uLmxsLWljb257XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbSAhaW1wb3J0YW50O1xufVxuXG4udXB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbmJvdHRvbTogMDtcbnJpZ2h0OiAwO1xubWFyZ2luOiAyMHB4O1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4": function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_about_about_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./components/about/about.component */
      "+DhY");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./components/timeline/timeline.component */
      "LsEZ");
      /* harmony import */


      var _components_education_education_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./components/education/education.component */
      "F7NT");
      /* harmony import */


      var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./components/experience/experience.component */
      "5gzz");
      /* harmony import */


      var _components_certificates_certificates_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./components/certificates/certificates.component */
      "nkWX");
      /* harmony import */


      var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./components/skills/skills.component */
      "A9VX");
      /* harmony import */


      var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./components/projects/projects.component */
      "6bE9");
      /* harmony import */


      var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./components/contact/contact.component */
      "G2Gn");
      /* harmony import */


      var _components_interests_interests_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./components/interests/interests.component */
      "1yxt");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], //RouterModule.forRoot([])
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_18__["AboutComponent"], _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_21__["TimelineComponent"], _components_education_education_component__WEBPACK_IMPORTED_MODULE_22__["EducationComponent"], _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_23__["ExperienceComponent"], _components_certificates_certificates_component__WEBPACK_IMPORTED_MODULE_24__["CertificatesComponent"], _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_25__["SkillsComponent"], _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_26__["ProjectsComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_27__["ContactComponent"], _components_interests_interests_component__WEBPACK_IMPORTED_MODULE_28__["InterestsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], //RouterModule.forRoot([])
          _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_18__["AboutComponent"], _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_21__["TimelineComponent"], _components_education_education_component__WEBPACK_IMPORTED_MODULE_22__["EducationComponent"], _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_23__["ExperienceComponent"], _components_certificates_certificates_component__WEBPACK_IMPORTED_MODULE_24__["CertificatesComponent"], _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_25__["SkillsComponent"], _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_26__["ProjectsComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_27__["ContactComponent"], _components_interests_interests_component__WEBPACK_IMPORTED_MODULE_28__["InterestsComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], //RouterModule.forRoot([])
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "nkWX": function nkWX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CertificatesComponent", function () {
        return CertificatesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var _c0 = ["accord"];

      var CertificatesComponent = /*#__PURE__*/function () {
        function CertificatesComponent() {
          _classCallCheck(this, CertificatesComponent);

          this.panelOpenState = true;
        }

        _createClass(CertificatesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.accord.openAll();
          }
        }]);

        return CertificatesComponent;
      }();

      CertificatesComponent.ɵfac = function CertificatesComponent_Factory(t) {
        return new (t || CertificatesComponent)();
      };

      CertificatesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CertificatesComponent,
        selectors: [["app-certificates"]],
        viewQuery: function CertificatesComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.accord = _t.first);
          }
        },
        decls: 89,
        vars: 1,
        consts: [["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxFlex", "95"], [3, "multi"], ["accord", "matAccordion"], [1, "text-muted"], ["href", "", "target", "_blank", 1, "icon", "link"], ["mat-stroked-button", "", "color", "primary"], [3, "opened", "closed"], ["href", "https://www.coursera.com/", "target", "_blank", 1, "icon", "link"], ["href", "https://www.coursera.org/account/accomplishments/certificate/UFV99LTVXSSC", "target", "_blank", 1, "icon", "coursera"], ["href", "https://www.coursera.org/account/accomplishments/certificate/J7VLBX2JBSFM", "target", "_blank", 1, "icon", "coursera"], ["href", "https://www.coursera.org/account/accomplishments/certificate/GZLDM8RAKX7M", "target", "_blank", 1, "icon", "coursera"], ["href", "https://www.coursera.org/account/accomplishments/certificate/JX2HBLTRPMJK", "target", "_blank", 1, "icon", "coursera"], ["mat-stroked-button", "", "color", "primary", "href", "https://www.coursera.org/account/accomplishments/specialization/EVQSXRBBYKKM", "target", "_blank", "id", "coursera"], ["mat-stroked-button", "", "color", "primary", "href", "https://www.coursera.org/account/accomplishments/verify/3P3RHE6DRJ3K", "target", "_blank"]],
        template: function CertificatesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Certificates");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-accordion", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Certified Kubernetes Administrator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "small", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Aug 2021");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " CNCF");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " View Certificate ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "RedHat OpenShift Administration I");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "small", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Jan 2021");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " RedHat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " View Certificate ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-expansion-panel", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function CertificatesComponent_Template_mat_expansion_panel_opened_36_listener() {
              return ctx.panelOpenState = true;
            })("closed", function CertificatesComponent_Template_mat_expansion_panel_closed_36_listener() {
              return ctx.panelOpenState = false;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Open Source Software Development, Linux and Git");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "small", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Oct 2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Linux Foundation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Open Source Software Development Methods ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Linux for Developers ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Linux Tools for Developers ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Using Git for Distributed Development ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " View Certificate ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Continuous Delivery & DevOps");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "small", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Oct 2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " University of Virginia");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " View Certificate ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Cisco Certified Network Associate (CCNA) 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "small", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Mai 2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Cisco");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multi", true);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"]],
        styles: [".text-muted[_ngcontent-%COMP%] {\n  position: relative;\n  top: 1px;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jZXJ0aWZpY2F0ZXMvY2VydGlmaWNhdGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2VydGlmaWNhdGVzL2NlcnRpZmljYXRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LW11dGVke1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CertificatesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-certificates',
            templateUrl: './certificates.component.html',
            styleUrls: ['./certificates.component.scss']
          }]
        }], function () {
          return [];
        }, {
          accord: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["accord"]
          }]
        });
      })();
      /***/

    },

    /***/
    "zUnb": function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P": function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map