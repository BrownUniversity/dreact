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
`;function Na({section:t}){const{creditHours:n,instructors:i,maximumEnrollment:o,term:a,instructorNotes:c,meetings:s}=t,l=i&&i.find((e=>e.isPrimary)),u=l&&`${r.e}?search_string=${l.displayName}`,f=c&&c.syllabus;return e.createElement("div",{className:"course_item_rows_body course_item_rows_body_overflow"},e.createElement(pa,{label:"Course Syllabus",value:f?"View Syllabus":null,href:f?c.syllabus:null,defaultValue:"Course Syllabus Data Not Available."}),e.createElement(pa,{label:"Term",value:a.description,defaultValue:"Term Details Not Available."}),e.createElement(pa,{label:"Credit Hours",value:null!==n&&n.toString(),defaultValue:"Term Details Not Available."}),e.createElement(pa,{label:"Maximum Enrollment",value:o&&o.toString(),defaultValue:"Maximum Enrollment Details Not Available."}),e.createElement(pa,{label:"Primary Instructor",href:u,value:l?l.displayName:null,defaultValue:"Instructor Details Not Available."}),e.createElement(ya,{meetings:s.filter((e=>e.buildingCode||e.startDate))}))}function ja({term:t,crn:n,includeSummer:r,includeWinter:i}){const{selectedSection:o,setSelectedSection:a}=(0,e.useContext)(ma),{loading:c,error:s,data:l}=Ra(Da,{variables:{crn:n,term:t.code,includeSummer:r,includeWinter:i}}),u=o===n,f=t=>e.createElement("span",{dangerouslySetInnerHTML:{__html:t}});if(c)return e.createElement("p",null,"Loading...");if(s)return e.createElement("p",null,"Error fetching course details!");const{course:d}=l,{courseTitle:p,courseDescription:h,subject:y,courseNumber:m,section:v,instructors:g}=d,b=g.find((e=>e.isPrimary)),{code:x}=y;return e.createElement("div",{className:"course"},e.createElement("div",{className:"course_header"},e.createElement("h3",{className:"course_title"},f(p)),e.createElement("p",{className:"course_caption"},f(h))),e.createElement("div",{className:"course_item"},e.createElement("button",{className:"course_item_trigger "+(u?"fs-swap-active":""),"aria-label":"Show course details",onClick:()=>a(u?null:n),type:"button"},e.createElement("span",{className:"course_item_trigger_label"},x," ",m," ",v),e.createElement("span",{className:"course_item_trigger_icon"},e.createElement("svg",{className:"icon icon_chevron_down"},e.createElement(Vi.PJ,{icon:"ChevronDown"})))),e.createElement("div",{className:"course_item_rows "+(u?"fs-swap-active":"")},e.createElement("div",{className:"course_item_rows_body course_item_rows_body_shown"},e.createElement(pa,{label:"Instructor",value:b&&b.lastName,defaultValue:"Instructor Details Not Available."})),u&&e.createElement(Na,{section:d}))))}function La({drupalCtx:t}){const{term:n,crns:r,includeSummer:i,includeWinter:o,showTermHeader:a}=t,{loading:c,error:s,data:l}=Ra(ga);if(c)return e.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},e.createElement(Vi.aN,null));if(s)return e.createElement("p",null,"Error fetching terms!");const{terms:u}=l,f="auto"===n?{code:"auto"}:u.find((e=>e.description===n));return e.createElement(va,null,e.createElement("div",{className:"courses"},"true"===a&&e.createElement("div",{className:"section_break"},e.createElement("header",{className:"section_break_header"},e.createElement("h2",{className:"section_break_header_title"},n," Courses"))),e.createElement(da,null,e.createElement("div",{className:"wysiwyg_block_inner"},r.map((t=>e.createElement(ja,{term:f,crn:t,includeSummer:"true"===i,includeWinter:"true"===o,key:t})))))))}Na.propTypes={section:Sa.isRequired},ja.propTypes={term:(0,ba.shape)({code:ba.string.isRequired,description:ba.string}).isRequired,crn:ba.string.isRequired,includeSummer:ba.bool.isRequired,includeWinter:ba.bool.isRequired},La.propTypes={drupalCtx:Ea.isRequired};const qa=new Fr({uri:"https://webservices-proxy.brown.edu",cache:new zi});function Fa({drupalCtx:t}){return e.createElement(Ki,{client:qa},e.createElement(La,{drupalCtx:t}))}Fa.propTypes={drupalCtx:Ea.isRequired};const za=JSON.parse(window.drupalCtx);za.crns=za.crns.split(" "),delete window.drupalCtx;const Ba=document.querySelectorAll(`.${r.i}`),Ua=document.createElement("div");for(let e=0;e<Ba.length;e+=1)Ba[e].hasChildNodes()||(Ua.setAttribute("class","crns_dreact"),Ba[e].appendChild(Ua));const Ka=Ua;(0,n.s)(Ka).render(e.createElement(Fa,{drupalCtx:za}))})()})();