webpackJsonp([2],{"8Yzv":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("TVG1");var n={props:{value:{type:Object}},methods:{change:function(){this.$refs.img.style.transform="scale(1.1)"},back:function(){this.$refs.img.style.transform="scale(1)"}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"person-item",on:{mouseover:function(t){e.change()},mouseout:function(t){e.back()}}},[a("div",{staticClass:"left-image"},[a("img",{ref:"img",attrs:{src:e.value.image,id:"img"}})]),e._v(" "),a("div",{staticClass:"right"},[a("h2",[e._v(e._s(e.value.name))]),e._v(" "),a("p",[e._v(e._s(e.value.college))]),e._v(" "),a("p",[e._v(e._s(e.value.introduce))])])])},staticRenderFns:[]};var o={data:function(){return{persons:[{name:"Bryan Ayre",image:"http://139.199.230.213/photo/BryanAyre.jpg",college:"University of North Texas",introduce:"Research in His laboratory revolves around the phloem transport system of plants and how it functions as a whole-plant communication network to enable disparate organs to function as an integrated complete organism."},{name:"Peter Balint-Kurti",image:"http://139.199.230.213/photo/PeterBalint-Kurti.jpg",college:"North Carolina State University",introduce:"He is interested in understanding the genetic and mechanistic bases of disease resistance in maize. He hopes that findings made will improve the resilience of the maize crop and will  be extrapolated to other plant systems"},{name:"Jacqueline Batley",image:"http://139.199.230.213/photo/JacquelineBatley.jpg",college:"University of Western Australia, Australia ",introduce:"Her research is centered on three topics:1) Plant pathogen interactions;2) Genetics and genomics of Brassica crops;3) Pathogen population genomics"},{name:"Thomas Dresselhaus",image:"https://www.uni-regensburg.de/biologie-vorklinische-medizin/cell-biology-and-plant-biochemistry/medien/research-dresselhaus/team/fittosize_191_191_d6e223c01cdc0bccc5cf574d0745dd42_thomas_neu__3_.jpeg",college:"Regensberg",introduce:"Thomas Dresselhaus currently works at the Department of Cell Biology & Plant Biochemistry, Universität Regensburg. Thomas does research in Plant Molecular Biology, Developmental Biology and Cell Biology. Their current project is 'plant gamete fusion'."},{name:"Andrea Gallavotti",image:"http://139.199.230.213/photo/AndreaGallavotti.png",college:"Rutgers University",introduce:"His  research focuses on identifying the genes and gene networks regulating reproductive meristem development in maize, whose activity is ultimately responsible for producing the majority of world’s grain."},{name:"Bill Gordon Kamm",image:"http://139.199.230.213/photo/BillGordonKamm.jpg",college:"Pioneer",introduce:"BBM-WUS enhanced maize transformation"},{name:"David Jackson",image:"http://139.199.230.213/photo/DavidJackson.jpg",college:"Cold Spring Harbor Laboratory",introduce:"His lab studies genes and signals in cells that regulate the growth and shape of plants. They have discovered several genes that control plant architecture by exerting an influence on stem cells."},{name:"Beat Keller",image:"http://139.199.230.213/photo/BeatKeller.jpg",college:"University of Zurich, Switzerland ",introduce:"Wheat functional genomics"},{name:"Rosa Lozano-Duran",image:"http://139.199.230.213/photo/RosaLozano-Duran.jpg",college:"Chinese Academy of Sciences",introduce:"Her research aims at deciphering the network of plant-geminivirus interactions at the molecular and physiological levels, using state-of-the-art technologies in a multi-disciplinary approach. "},{name:"Gary J. Muehlbauer",image:"http://139.199.230.213/photo/GaryJ.Muehlbauer.jpg",college:"University of Minnesota",introduce:"His work is focused on wheat and barley molecular genetics. His researchs are directed towards Fusarium head blight (FHB) of wheat and barley and identifying genetic variation in wild barleys for use in germplasm enhancement, and to genetically characterize a collection of barley tillering mutants."},{name:"Michael Purugganan",image:"http://as.nyu.edu/content/dam/nyu-as/faculty/images/purugganan-michael-photo.jpg",college:"New York University",introduce:"Research in the laboratory is focused on evolutionary, ecological and functional genomics of plants."},{name:"Isobel AP Parkin",image:"https://research-repository.uwa.edu.au/assets/no-portrait-473c6d005990baa1f418d9c668dcd4ec.png",college:"Agriculture and Agri-Food Canada",introduce:"Her expertise is centered on Brassica genomics, comparative genome organisation, global gene expression analysis, abiotic stress responses."},{name:"Jeffrey Ross-Ibarra",image:"https://biology.ucdavis.edu/sites/g/files/dgvnsk2646/files/styles/sf_profile/public/images/person/Ross-IbarraJeffrey14290.jpg?h=0a12c941&itok=MQBHMVA4",college:"UC Davis",introduce:"His lab is working on a number of projects using maize and its wild realtives to understand the genetic basis of adaptation. "},{name:"Nathan Springer",image:"http://139.199.230.213/photo/NathanSpringer.jpg",college:"University of Minnesota",introduce:"The Springer lab studies basic aspects of genetics using maize as a model system.  They are involved in a number of projects to better understand the molecular sources of variation within a species and to connect this heritable variation with changes in phenotype."},{name:"Bing Yang",image:"http://139.199.230.213/photo/BingYang.jpg",college:"Danforth Center",introduce:"The main foci of Bing’s research are on 1) gaining a molecular understanding of host disease susceptibility and resistance to pathogenic microbes by using bacterial blight of rice as a disease model, and 2) developing and applying genome editing technologies for gene/trait discovery and for engineering improved traits such as disease resistance in crop plants. "},{name:"Jianbing Yan",image:"http://139.199.230.213/photo/JianbingYan.jpg",college:"Huazhong Agricultural University",introduce:"His Lab is interested in three research topics: 1) Genetic basis of quantitative traits; 2)QTL fine mapping and cloning; and 3) Molecular Breeding in maize."},{name:"Xiaoyu Zhang",image:"http://www.plantbio.uga.edu/sites/default/files/styles/square_400x400/public/zhang_xx260.jpg?itok=kPmA3nfb",college:"University of Georgia",introduce:"His research is directed to understand the establishment and maintenance of histone modifications in plants, their roles in regulating gene expression and development, and how they have contributed to the evolution of gene and genome functions. "}]}},components:{Person:a("VU/8")(n,i,!1,function(e){a("rEnw")},"data-v-532c700a",null).exports},created:function(){}},s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"speakers"},[this._m(0),this._v(" "),t("div",{staticClass:"content"},[this._l(this.persons,function(e,a){return[t("div",{key:a},[t("person",{attrs:{value:e}})],1)]})],2)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"routerTitle"},[t("span",[this._v("Speakers")])])}]};var r=a("VU/8")(o,s,!1,function(e){a("IZP7")},"data-v-4b598728",null);t.default=r.exports},IZP7:function(e,t){},rEnw:function(e,t){}});
//# sourceMappingURL=2.10ac858847d2fb7166b5.js.map