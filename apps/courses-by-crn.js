  query Section(
    $crn: String!
    $term: String!
    $includeSummer: Boolean
    $includeWinter: Boolean
  ) {
    course(
      termCode: $term
      crn: $crn
      includeSummer: $includeSummer
      includeWinter: $includeWinter
    ) {
      courseTitle
      courseDescription
      courseNumber
      subject {
        code
        description
      }
      crn
      section
      creditHours
      instructors {
        displayName
        isPrimary
        lastName
      }
      maximumEnrollment
      schedule {
        code
        description
      }
      term {
        code
        description
      }
      instructorNotes {
        syllabus
      }
      meetings {
        buildingDescription
        daysToMeet
        endDate
        endTime
        roomCode
        startDate
        startTime
      }
    }
  }
`;function Ia({section:t}){const{creditHours:n,instructors:i,maximumEnrollment:o,term:a,instructorNotes:c,meetings:s}=t,l=i&&i.find((e=>e.isPrimary)),u=l&&`${r.e}?search_string=${l.displayName}`,f=c&&c.syllabus;return e.createElement("div",{className:"course_item_rows_body course_item_rows_body_overflow"},e.createElement(fa,{label:"Course Syllabus",value:f?"View Syllabus":null,href:f?c.syllabus:null,defaultValue:"Course Syllabus Data Not Available."}),e.createElement(fa,{label:"Term",value:a.description,defaultValue:"Term Details Not Available."}),e.createElement(fa,{label:"Credit Hours",value:null!==n&&n.toString(),defaultValue:"Term Details Not Available."}),e.createElement(fa,{label:"Maximum Enrollment",value:o&&o.toString(),defaultValue:"Maximum Enrollment Details Not Available."}),e.createElement(fa,{label:"Primary Instructor",href:u,value:l?l.displayName:null,defaultValue:"Instructor Details Not Available."}),e.createElement(pa,{meetings:s.filter((e=>e.buildingCode||e.startDate))}))}function Da({term:t,crn:n,includeSummer:r,includeWinter:i}){const{selectedSection:o,setSelectedSection:a}=(0,e.useContext)(ha),{loading:c,error:s,data:l}=Ma(Ra,{variables:{crn:n,term:t.code,includeSummer:r,includeWinter:i}}),u=o===n,f=t=>e.createElement("span",{dangerouslySetInnerHTML:{__html:t}});if(c)return e.createElement("p",null,"Loading...");if(s)return e.createElement("p",null,"Error fetching course details!");const{course:d}=l,{courseTitle:p,courseDescription:h,subject:y,courseNumber:m,section:v,instructors:g}=d,b=g.find((e=>e.isPrimary)),{code:x}=y;return e.createElement("div",{className:"course"},e.createElement("div",{className:"course_header"},e.createElement("h3",{className:"course_title"},f(p)),e.createElement("p",{className:"course_caption"},f(h))),e.createElement("div",{className:"course_item"},e.createElement("button",{className:"course_item_trigger "+(u?"fs-swap-active":""),"aria-label":"Show course details",onClick:()=>a(u?null:n),type:"button"},e.createElement("span",{className:"course_item_trigger_label"},x," ",m," ",v),e.createElement("span",{className:"course_item_trigger_icon"},e.createElement("svg",{className:"icon icon_chevron_down"},e.createElement(Wi.PJ,{icon:"ChevronDown"})))),e.createElement("div",{className:"course_item_rows "+(u?"fs-swap-active":"")},e.createElement("div",{className:"course_item_rows_body course_item_rows_body_shown"},e.createElement(fa,{label:"Instructor",value:b&&b.lastName,defaultValue:"Instructor Details Not Available."})),u&&e.createElement(Ia,{section:d}))))}function Na({drupalCtx:t}){const{term:n,crns:r,includeSummer:i,includeWinter:o}=t,{loading:a,error:c,data:s}=Ma(ma);if(a)return e.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},e.createElement(Wi.aN,null));if(c)return e.createElement("p",null,"Error fetching terms!");const{terms:l}=s,u="auto"===n?{code:"auto"}:l.find((e=>e.description===n));return e.createElement(ya,null,r.map((t=>e.createElement(Da,{term:u,crn:t,includeSummer:"true"===i,includeWinter:"true"===o,key:t}))))}Ia.propTypes={section:xa.isRequired},Da.propTypes={term:(0,va.shape)({code:va.string.isRequired,description:va.string}).isRequired,crn:va.string.isRequired,includeSummer:va.bool.isRequired,includeWinter:va.bool.isRequired},Na.propTypes={drupalCtx:wa.isRequired};const ja=new zr({uri:"https://webservices-proxy.brown.edu",cache:new Bi});function La({drupalCtx:t}){return e.createElement(Vi,{client:ja},e.createElement(Na,{drupalCtx:t}))}La.propTypes={drupalCtx:wa.isRequired};const qa=JSON.parse(window.drupalCtx);qa.crns=qa.crns.split(" "),delete window.drupalCtx;const Fa=document.querySelectorAll(`.${r.i}`),za=document.createElement("div");for(let e=0;e<Fa.length;e+=1)Fa[e].hasChildNodes()||(za.setAttribute("class","crns_dreact"),Fa[e].appendChild(za));const Ba=za;(0,n.s)(Ba).render(e.createElement(La,{drupalCtx:qa}))})()})();