(this.webpackJsonpquizreact=this.webpackJsonpquizreact||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var s=t(3),n=t(4),o=t(8),i=t(6),r=t(1),c=t(5),u=t.n(c),l=(t(13),t(0));var d=function(){return Object(l.jsx)("header",{children:Object(l.jsx)("nav",{children:Object(l.jsx)("h1",{style:{textAlign:"left"},children:"Lucas SCH | React JS"})})})},p=[{question:"Quelle est la capitale du Portugal ?",answers:["Dublin","Lisbonne","Managua","Rome"],correct:"Lisbonne",questionId:"1"},{question:"Quelle est la capitale de la Turquie ?",answers:["Istanbul","Antalya","Ankara","Izmir"],correct:"Ankara",questionId:"2"},{question:"Quel pays a pour capitale Addis-Abeba",answers:["Soudan","\xc9thiopie","\xc9gypte","Nigeria"],correct:"\xc9thiopie",questionId:"3"},{question:"Quelle est la capitale de l\u2019Uruguay ?",answers:["Belmopan","Asunci\xf3n","Santiago","Montevideo"],correct:"Montevideo",questionId:"4"},{question:"Quel pays a pour capitale Bakou ?",answers:["Azerba\xefdjan","Tadjikistan","Turkm\xe9nistan","Lettonie"],correct:"Azerba\xefdjan",questionId:"5"},{question:"Quelle est la capitale de la Mac\xe9doine ?",answers:["Apia","Skopje","Chisinau","Monrovia"],correct:"Skopje",questionId:"6"},{question:"Quelle est la capitale politique de la C\xf4te d\u2019Ivoire ?",answers:["Abidjan","Niamey","Yamoussoukro","Accra"],correct:"Yamoussoukro",questionId:"7"},{question:"Quelle est la capitale du Bangladesh ?",answers:["Manama","Dhaka","Rangoun","Thimphou"],correct:"Dhaka",questionId:"8"},{question:"Quel pays a pour capitale Dodoma ?",answers:["\xc9mirats Arabes Unis","Mozambique","Tanzanie","Ouganda"],correct:"Tanzanie",questionId:"9"},{question:"Quelle est la capitale des Pays-Bas ?",answers:["Amsterdam","Londres","Paris","Nouille"],correct:"Amsterdam",questionId:"10"},{question:"Quelle est la capitale de l'Andorre ?",answers:["Andora","Andorre la Veille","Andorresse","Andorre-la-Vieille"],correct:"Andorre-la-Vieille",questionId:"11"},{question:"Quelle est la capitale de Cor\xe9e du Nord ?",answers:["Dakar","Gitega","Vaduz","Pyongyang"],correct:"Pyongyang",questionId:"12"},{question:"Quelle est la capitale de Afghanistan ?",answers:["Managua","La Havane","Kaboul","Delap-Uliga-Darrit"],correct:"Kaboul",questionId:"13"},{question:"Quelle est la capitale de Tadjikistan ?",answers:["Quito","Belmopan","Douchanb\xe9","Dakar"],correct:"Douchanb\xe9",questionId:"14"},{question:"Quelle est la capitale de Venezuela ?",answers:["Thimphou","Berlin","Melekeok","Caracas"],correct:"Caracas",questionId:"15"},{question:"Quelle est la capitale de Cor\xe9e du Sud ?",answers:["Mexico","Kigali","S\xe9oul","Islamabad"],correct:"S\xe9oul",questionId:"16"},{question:"Quelle est la capitale de Monaco ?",answers:["Helsinki","Accra","Madrid","Monaco"],correct:"Monaco",questionId:"17"}],q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return Promise.resolve(p.sort((function(){return.5-Math.random()})).slice(0,e))},h=t(7),j=function(e){var a=e.question,t=e.options,s=e.selected,n=Object(r.useState)(t),o=Object(h.a)(n,2),i=o[0],c=o[1];return Object(l.jsxs)("div",{className:"QuestionBox",children:[Object(l.jsxs)("div",{className:"question",children:[" ",a," "]}),i.map((function(e,a){return Object(l.jsx)("button",{className:"answerBtn",onClick:function(){c([e]),s(e)},children:e},a)}))]})},b=function(e){var a=e.score,t=e.playAgain;return Object(l.jsxs)("div",{className:"score-board",children:[Object(l.jsxs)("div",{className:"score",children:[" Votre score final est ",a," / 10 ! "]}),Object(l.jsx)("button",{className:"playBtn",onClick:t,children:"Rejouez !"})]})},m=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=a.call.apply(a,[this].concat(o))).state={quizSelect1:[],score:0,responses:0},e.getQuestionDatas=function(){q().then((function(a){e.setState({quizSelect1:a})}))},e.computeAnswer=function(a,t){a===t&&e.setState({score:e.state.score+1}),e.setState({responses:e.state.responses<10?e.state.responses+1:10})},e.playAgain=function(){e.getQuestionDatas(),e.setState({score:0,responses:0})},e}return Object(n.a)(t,[{key:"componentDidMount",value:function(){this.getQuestionDatas()}},{key:"render",value:function(){var e=this;return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(d,{}),Object(l.jsx)("div",{className:"title",children:" Quiz en React "}),this.state.quizSelect1.length>0&&this.state.responses<10&&this.state.quizSelect1.map((function(a){var t=a.question,s=a.answers,n=a.correct,o=a.questionId;return Object(l.jsx)(j,{question:t,options:s,selected:function(a){return e.computeAnswer(a,n)}},o)})),10===this.state.responses?Object(l.jsx)(b,{score:this.state.score,playAgain:this.playAgain}):null]})}}]),t}(r.Component);u.a.render(Object(l.jsx)(m,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.83f99703.chunk.js.map