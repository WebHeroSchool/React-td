(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{12:function(e,t,a){e.exports={wrap:"About_wrap__1G2Ld",user_card:"About_user_card__3_LMu",preloader:"About_preloader__1O3V9",error:"About_error__3bQyT",inner:"About_inner__2LYub",avatar:"About_avatar__2iYPh",info:"About_info__aVVHV",description:"About_description__1McKR",name:"About_name__23C1g",bio:"About_bio__2_tlg",contact:"About_contact__1HBRr",contact__img:"About_contact__img__DrU6b",social_networks:"About_social_networks__2rSBf",social_networks__img:"About_social_networks__img__3A06_"}},22:function(e,t,a){e.exports={wrap:"App_wrap__3bO-E",header:"App_header__aGotT",school_link:"App_school_link__2x6SY",school_logo:"App_school_logo__2zpGf",header__link:"App_header__link__NqyHO",header__link_active:"App_header__link_active__2Y6Lc"}},23:function(e,t,a){e.exports={btn:"Sort_btn__28d8M",btn_active:"Sort_btn_active__sY9fc",items_count:"Sort_items_count__3UsFY",flex:"Sort_flex__2HYj4"}},30:function(e,t,a){e.exports={wrap:"item_wrap__JYUBE",input:"item_input__WhmZt",item:"item_item__19-QL",done:"item_done__LXqoM",checkbox:"item_checkbox__1i13w",checkbox_label:"item_checkbox_label__2QtlG",btn_delete:"item_btn_delete__2ZF9W"}},35:function(e,t,a){e.exports={form:"InputItem_form__2cU5Z",error:"InputItem_error__3ubjT",repeat:"InputItem_repeat__X9kZx",input:"InputItem_input__Da4to",btn:"InputItem_btn__1gPVh"}},39:function(e,t,a){e.exports={wrap:"Todo_wrap__3YjFF",header:"Todo_header__1ERCu",title:"Todo_title__8CbDz",items_section:"Todo_items_section__keDOE"}},4:function(e,t,a){e.exports={wrap:"Repositories_wrap__ZGRC2",title:"Repositories_title__3NPJR",preloader:"Repositories_preloader__10Kkz",inner:"Repositories_inner__b_LBY",error_container:"Repositories_error_container__2elzF",error_img:"Repositories_error_img__1jpPq",error_subtitle:"Repositories_error_subtitle__1LwB6",error_text:"Repositories_error_text__3CCRc",error_link:"Repositories_error_link__2R24F",list:"Repositories_list__3_m1l",list__item:"Repositories_list__item__2xdGh",name:"Repositories_name__1LeLB",info:"Repositories_info__MdpAf",circle:"Repositories_circle__3xw0L",html:"Repositories_html__8ZBBg",css:"Repositories_css__1AoIK",js:"Repositories_js__1Xi1W",language:"Repositories_language__2ZVom",star:"Repositories_star__3jMqj",forks:"Repositories_forks__3LP8K",update:"Repositories_update__139sX",pagination:"Repositories_pagination__1n7c0",button:"Repositories_button__1miZJ",disabled:"Repositories_disabled__3reQc"}},47:function(e,t,a){e.exports={wrap:"ItemList_wrap__N8Ojd",noItem:"ItemList_noItem__qz5Sn"}},72:function(e,t,a){"use strict";a.r(t);var r=a(2),s=a(0),n=a.n(s),i=a(31),c=a.n(i),o=a(44),l=a(6),_=a(22),j=a.n(_),b=a(45),d=a(26),u=a(14),m=a(86),p=a(3),h=a(8),O=a(21),x=a(10),f=a(11),g=a(17),v=a.n(g),k=a(35),N=a.n(k),R=a.p+"static/media/add.18e1da29.svg",w=function(e){Object(x.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={inputValue:"",error:!1,repeat:!1},e.onSubmit=function(t){t.preventDefault(),""===e.state.inputValue?e.setState({error:!0,repeat:!1}):e.props.items.find((function(t){return t.value===e.state.inputValue}))?e.setState({repeat:!0}):(e.setState({inputValue:"",error:!1,repeat:!1}),e.props.onClickAdd(e.state.inputValue))},e}return Object(O.a)(a,[{key:"render",value:function(){var e,t=this,a=this.props;a.onClickAdd,a.items;return Object(r.jsxs)("form",{onSubmit:this.onSubmit,className:v()((e={},Object(p.a)(e,N.a.form,!0),Object(p.a)(e,N.a.error,this.state.error),Object(p.a)(e,N.a.repeat,this.state.repeat),e)),children:[Object(r.jsx)("input",{type:"text",placeholder:"\u041f\u0440\u043e\u0441\u0442\u043e \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u044e\u0434\u0430 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u0435\u043b\u0430...",value:this.state.inputValue,onChange:function(e){return t.setState({inputValue:e.target.value})},className:N.a.input}),Object(r.jsx)("button",{className:N.a.btn,children:Object(r.jsx)("img",{src:R,alt:"Button"})})]})}}]),a}(n.a.Component),C=a(38),S=a(30),A=a.n(S),D=a.p+"static/media/delete.deb0a029.svg",L=function(e){Object(x.a)(a,e);var t=Object(f.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(O.a)(a,[{key:"render",value:function(){var e,t=this.props,a=t.value,s=t.isDone,n=t.id,i=t.onClickDone,c=t.onClickDelete;return Object(r.jsxs)("div",{className:A.a.wrap,children:[Object(r.jsx)("input",{type:"checkbox",checked:s,className:A.a.checkbox}),Object(r.jsx)("label",{htmlFor:"checkbox",onClick:function(){return i(n)},className:A.a.checkbox_label,children:Object(r.jsx)("div",{className:v()((e={},Object(p.a)(e,A.a.item,!0),Object(p.a)(e,A.a.done,s),e)),children:a})}),Object(r.jsx)("button",{className:A.a.btn_delete,onClick:function(){return c(n)},children:Object(r.jsx)("img",{src:D,alt:"Delete"})})]})}}]),a}(n.a.Component),y=a(47),I=a.n(y),E=function(e){var t=e.items,a=e.onClickDone,s=e.onClickDelete;return 0===t.length?Object(r.jsx)("div",{className:I.a.noItem}):Object(r.jsx)(C.c,{droppableId:"itemlist",children:function(e){return Object(r.jsxs)("ul",Object(d.a)(Object(d.a)({className:I.a.wrap,ref:e.innerRef},e.droppableProps),{},{children:[t.map((function(e,t){return Object(r.jsx)(C.b,{draggableId:"item-"+e.id,index:t,children:function(t){return Object(r.jsx)("li",Object(d.a)(Object(d.a)(Object(d.a)({},t.draggableProps),t.dragHandleProps),{},{ref:t.innerRef,children:Object(r.jsx)(L,{value:e.value,isDone:e.isDone,id:e.id,onClickDone:a,onClickDelete:s})}))}},e.id)})),e.placeholder]}))}})},B=a(23),V=a.n(B),F=function(e){var t,a,s,n=e.items,i=e.filter,c=e.onClickFilter,o=n.filter((function(e){return!e.isDone})).length,l=n.filter((function(e){return e.isDone})).length;return Object(r.jsxs)("div",{className:V.a.flex,children:[Object(r.jsxs)("button",{className:v()((t={},Object(p.a)(t,V.a.btn,!0),Object(p.a)(t,V.a.btn_active,"done"===i),t)),onClick:function(){return c("done")},children:["\u0417\u0430\u0432\u0435\u0440\u0448\u0451\u043d\u043d\u044b\u0435",Object(r.jsx)("span",{className:V.a.items_count,children:l})]}),Object(r.jsxs)("button",{className:v()((a={},Object(p.a)(a,V.a.btn,!0),Object(p.a)(a,V.a.btn_active,"active"===i),a)),onClick:function(){return c("active")},children:["\u041d\u0435\u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043d\u043d\u044b\u0435",Object(r.jsx)("span",{className:V.a.items_count,children:o})]}),Object(r.jsx)("button",{className:v()((s={},Object(p.a)(s,V.a.btn,!0),Object(p.a)(s,V.a.btn_active,"all"===i),s)),onClick:function(){return c("all")},children:"\u0412\u0441\u0435"})]})},U=a(39),Y=a.n(U),M=function(){var e={items:JSON.parse(localStorage.getItem("items"))||[],filter:"all"},t=Object(s.useState)(e.items),a=Object(u.a)(t,2),n=a[0],i=a[1],c=Object(s.useState)(e.filter),o=Object(u.a)(c,2),l=o[0],_=o[1];Object(s.useEffect)((function(){localStorage.setItem("items",JSON.stringify(n))}));var j=[];switch(l){case"active":j=n.filter((function(e){return!e.isDone}));break;case"done":j=n.filter((function(e){return e.isDone}));break;case"all":j=n;break;default:j=n}return Object(r.jsx)(m.a,{className:Y.a.wrap,children:Object(r.jsxs)(C.a,{onDragEnd:function(e){var t=e.destination,a=e.source;if(t){var r=Object(b.a)(n),s=r.splice(a.index,1),c=Object(u.a)(s,1)[0];r.splice(t.index,0,c),i(Object(b.a)(r))}},children:[Object(r.jsxs)("header",{className:Y.a.header,children:[Object(r.jsx)("h1",{className:Y.a.title,children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043c\u043e\u0438\u0445 \u0434\u0435\u043b"}),Object(r.jsx)(F,{items:n,filter:l,onClickFilter:function(e){_(e)}})]}),Object(r.jsxs)("div",{className:Y.a.items_section,children:[Object(r.jsx)(E,{items:j,onClickDone:function(e){var t=n.map((function(t){var a=Object(d.a)({},t);return t.id===e&&(a.isDone=!t.isDone),a}));i(t)},onClickDelete:function(e){var t=n.filter((function(t){return t.id!==e}));i(t)}}),Object(r.jsx)(w,{items:n,onClickAdd:function(e){i([].concat(Object(b.a)(n),[{value:e,isDone:!1,id:Date.now()}]))}})]})]})})},T=a(12),G=a.n(T),J=a(87),P=a(42),Z=a(4),z=a.n(Z),H=a.p+"static/media/Star.66a6657c.svg",q=a.p+"static/media/Stroke.a232545d.svg",K=a.p+"static/media/Error.09d96759.svg",Q=new P.a,X=function(e){Object(x.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,isError:!1,repoList:[],firstRepo:0,lastRepo:5},e.onClickBack=function(){e.setState({firstRepo:e.state.firstRepo-5,lastRepo:e.state.lastRepo-5})},e.onClickNext=function(){e.setState({firstRepo:e.state.firstRepo+5,lastRepo:e.state.lastRepo+5})},e}return Object(O.a)(a,[{key:"componentDidMount",value:function(){var e=this;Q.repos.listForUser({username:"AnnaUm17"}).then((function(t){var a=t.data;e.setState({repoList:a,isLoading:!1})})).catch((function(){e.setState({isLoading:!1,isError:!0})}))}},{key:"render",value:function(){var e,t,a=this,s=this.state,n=s.isLoading,i=s.isError,c=s.repoList,o=s.firstRepo,l=s.lastRepo;return Object(r.jsx)(m.a,{children:Object(r.jsxs)("div",{className:z.a.wrap,children:[Object(r.jsx)("h1",{className:z.a.title,children:"\u0420\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438 \u043d\u0430 github.com"}),n?Object(r.jsx)(J.a,{className:z.a.preloader}):Object(r.jsx)("div",{className:z.a.inner,children:i?Object(r.jsxs)("div",{className:z.a.error_container,children:[Object(r.jsx)("img",{src:K,alt:"Error",className:z.a.error_img}),Object(r.jsx)("h2",{className:z.a.error_subtitle,children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u0441\u043e\u0432\u0441\u0435\u043c \u043d\u0435 \u0442\u0430\u043a..."}),Object(r.jsxs)("p",{className:z.a.error_text,children:["\u041f\u043e\u043f\u044b\u0442\u043a\u0430",Object(r.jsx)("a",{href:"#",onClick:function(){return window.location.reload()},className:z.a.error_link,children:" \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c "}),"\u0435\u0449\u0435 \u0440\u0430\u0437"]})]}):Object(r.jsx)("div",{children:0===c.length?Object(r.jsxs)("div",{className:z.a.error_container,children:[Object(r.jsx)("img",{src:K,alt:"Error",className:z.a.error_img}),Object(r.jsx)("h2",{className:z.a.error_subtitle,children:"\u0420\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438 \u043e\u0442\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442"}),Object(r.jsxs)("p",{className:z.a.error_text,children:["\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043a\u0430\u043a \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u043e\u0434\u0438\u043d \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 \u043d\u0430\u2002",Object(r.jsx)("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",className:z.a.error_link,children:"github.com"})]})]}):Object(r.jsxs)("div",{children:[!n&&Object(r.jsx)("ol",{className:z.a.list,children:c.slice(o,l).map((function(e){var t;return Object(r.jsxs)("li",{className:z.a.list__item,children:[Object(r.jsx)("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer",className:z.a.name,children:e.name}),Object(r.jsxs)("div",{className:z.a.info,children:[Object(r.jsx)("div",{className:v()((t={},Object(p.a)(t,z.a.circle,!0),Object(p.a)(t,z.a.html,"HTML"===e.language),Object(p.a)(t,z.a.css,"CSS"===e.language),Object(p.a)(t,z.a.js,"JavaScript"===e.language),t))}),Object(r.jsx)("p",{className:z.a.language,children:e.language}),Object(r.jsxs)("div",{className:z.a.star,children:[Object(r.jsx)("img",{src:H,alt:"Star"}),Object(r.jsx)("p",{children:e.stargazers_count})]}),Object(r.jsxs)("div",{className:z.a.forks,children:[Object(r.jsx)("img",{src:q,alt:"Stroke"}),Object(r.jsx)("p",{children:e.forks})]}),Object(r.jsxs)("p",{className:z.a.update,children:["Updated on ",new Date(e.updated_at).toLocaleString("en-GB",{day:"numeric",month:"short",year:"numeric"})]})]})]},e.id)}))}),Object(r.jsxs)("div",{className:z.a.pagination,children:[Object(r.jsx)("button",{className:v()((e={},Object(p.a)(e,z.a.button,!0),Object(p.a)(e,z.a.disabled,0===o),e)),onClick:function(){return a.onClickBack()},disabled:0===o,children:"\u041d\u0430\u0437\u0430\u0434"}),Object(r.jsx)("button",{className:v()((t={},Object(p.a)(t,z.a.button,!0),Object(p.a)(t,z.a.disabled,c.length<=l),t)),onClick:function(){return a.onClickNext()},disabled:c.length<=l,children:"\u0414\u0430\u043b\u0435\u0435"})]})]})})})]})})}}]),a}(n.a.Component),W=a.p+"static/media/mail.f4eb023e.svg",$=a.p+"static/media/telefon.e3f0d75e.svg",ee=a.p+"static/media/github.263c290c.svg",te=new P.a,ae=function(e){Object(x.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,isError:!1,error:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a)",user:[]},e}return Object(O.a)(a,[{key:"componentDidMount",value:function(){var e=this;te.users.getByUsername({username:"AnnaUm17"}).then((function(t){var a=t.data;e.setState({user:a,isLoading:!1})})).catch((function(t){return e.setState({err:e.state.error,isError:!0,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.isError,s=e.error,n=e.user;return Object(r.jsxs)("div",{className:G.a.wrap,children:[Object(r.jsx)(m.a,{className:G.a.user_card,children:t?Object(r.jsx)(J.a,{className:G.a.preloader}):Object(r.jsx)("div",{children:a?Object(r.jsx)("div",{className:G.a.error,children:s}):Object(r.jsxs)("div",{className:G.a.inner,children:[Object(r.jsx)("img",{src:n.avatar_url,className:G.a.avatar,alt:"Avatar"}),Object(r.jsxs)("div",{className:G.a.info,children:[Object(r.jsxs)("div",{className:G.a.description,children:[Object(r.jsx)("p",{className:G.a.name,children:n.login}),Object(r.jsx)("p",{className:G.a.bio,children:n.bio}),Object(r.jsxs)("a",{className:G.a.contact,href:"mailto: annamt17@gmail.com",children:[Object(r.jsx)("img",{className:G.a.contact__img,src:W,alt:"Email"}),"annamt17@gmail.com"]}),Object(r.jsxs)("a",{className:G.a.contact,href:"#",children:[Object(r.jsx)("img",{className:G.a.contact__img,src:$,alt:"Telefon"}),"+7 (495) 999-99-99"]})]}),Object(r.jsx)("div",{className:G.a.social_networks,children:Object(r.jsx)("a",{href:"https://github.com/AnnaUm17",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)("img",{src:ee,alt:"Github",className:G.a.social_networks__img})})})]})]})})}),Object(r.jsx)(X,{})]})}}]),a}(n.a.Component),re=function(){return Object(r.jsx)(o.a,{children:Object(r.jsxs)("div",{className:j.a.wrap,children:[Object(r.jsxs)("header",{className:j.a.header,children:[Object(r.jsx)("a",{href:"https://webheroschool.ru/",target:"_blank",rel:"noopener noreferrer",className:j.a.school_link,children:Object(r.jsx)("div",{className:j.a.school_logo})}),Object(r.jsx)(o.b,{to:"/todo",exact:!0,className:j.a.header__link,activeClassName:j.a.header__link_active,children:"\u0414\u0435\u043b\u0430"}),Object(r.jsx)(o.b,{to:"/",exact:!0,className:j.a.header__link,activeClassName:j.a.header__link_active,children:"\u041e\u0431\u043e \u043c\u043d\u0435"})]}),Object(r.jsxs)("div",{className:j.a.content,children:[Object(r.jsx)(l.a,{path:"/",exact:!0,component:ae}),Object(r.jsx)(l.a,{path:"/todo",component:M})]})]})})};c.a.render(Object(r.jsx)(re,{}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.f9631319.chunk.js.map