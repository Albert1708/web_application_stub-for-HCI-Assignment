
function prepareLocalStorage(inDevelopment){
  hasPrepared = localStorage['prepareLocalStorage'];
  if (hasPrepared != 'done' || inDevelopment){
    console.debug('Initalsing LocalStorage');
    
    // ****  Prepare Local Storage for Home Screen
    // prepare JSON data structure and put in local storage 
    var home_externalLinks = {
      uniba: {
       title: "University of Bamberg",
       href: "https://www.uni-bamberg.de/en/"
      },
      wiai: {
       title: "WIAI.de",
       href: "http://www.wiai.de"
      },
      feki: {
       title: "Feki.de",
       href: "http://www.feki.de"
      }
    };
    localStorage.setItem('home_externalLinks', JSON.stringify(home_externalLinks));
    
    
    // ****  Prepare Local Storage for Other Screens
    // you can fill the local storage with your data
    //Localhost links for studies>undergraduate>application prerequisites
    var ap_externalLinks = {
      unieq: {
       title: "University Entry Qualifications",
       href: "https://www.uni-bamberg.de/en/studies/non-exchange-students-undergraduate/prior-to-applying-prerequisites/#c369400"
      },
      glp: {
       title: "German Language Proficiency",
       href: "https://www.uni-bamberg.de/en/studies/non-exchange-students-undergraduate/prior-to-applying-prerequisites/#c369394"
      }
    };
    localStorage.setItem('ap_externalLinks', JSON.stringify(ap_externalLinks));
    //Localhost links for studies>undergraduate>How Do I Apply
    var howtoapply_externalLinks = {
      hta1: {
       title: "Application Check List",
       href: "https://www.uni-bamberg.de/en/studies/non-exchange-students-undergraduate/how-do-i-apply/#c369380"
      },
      hta2: {
       title: "Officially Certified Photocopies",
       href: "https://www.uni-bamberg.de/en/studies/non-exchange-students-undergraduate/how-do-i-apply/#c369377"
      },
      hta3: {
       title: "Translations",
       href: "https://www.uni-bamberg.de/en/studies/non-exchange-students-undergraduate/how-do-i-apply/#c369375"
      },
      hta4: {
       title: "Application Deadlines",
       href: "https://www.uni-bamberg.de/en/studies/non-exchange-students-undergraduate/how-do-i-apply/#c369373"
      },
      hta5: {
       title: "Where Do I Apply?",
       href: "https://www.uni-bamberg.de/en/studies/non-exchange-students-undergraduate/how-do-i-apply/#c369371"
      }
    };
    localStorage.setItem('howtoapply_externalLinks', JSON.stringify(howtoapply_externalLinks));
    //Localhost links for studies>undergraduate>After the Application
    var ata_externalLinks = {
      ata1: {
       title: "What are the Next Steps?",
       href: "https://www.uni-bamberg.de/en/studies/non-exchange-students-undergraduate/after-the-application/#c369343"
      },
      ata2: {
       title: "Enrolments",
       href: "https://www.uni-bamberg.de/en/studies/non-exchange-students-undergraduate/after-the-application/#c369341"
      },
      ata3: {
       title: "Formalities",
       href: "https://www.uni-bamberg.de/en/studies/non-exchange-students-undergraduate/after-the-application/#c369339"
      },
      ata4: {
       title: "Important Information",
       href: "https://www.uni-bamberg.de/en/studies/non-exchange-students-undergraduate/after-the-application/#c369334"
      },
      ata5: {
       title: "Arriving in Bamberg",
       href: "https://www.uni-bamberg.de/en/studies/non-exchange-students-undergraduate/after-the-application/#c369327"
      }
      
    };
    localStorage.setItem('ata_externalLinks', JSON.stringify(ata_externalLinks));
    
    //Localhost links for Master Degree
    var md_externalLinks = {
      md1: {
       title: "Application process",
       href: "https://www.uni-bamberg.de/en/studies/non-exchange-students-masters-degree/application-process"
      },
      md2: {
       title: "Application deadlines",
       href: "https://www.uni-bamberg.de/en/studies/non-exchange-students-masters-degree/application-deadlines"
      },
      md3: {
       title: "Required Application Documents",
       href: "https://www.uni-bamberg.de/en/studies/non-exchange-students-masters-degree/required-application-documents"
      },
      md4: {
       title: "Online application form",
       href: "https://www.uni-bamberg.de/en/studies/non-exchange-students-masters-degree/online-application-form/"
      },
      md5: {
       title: "Frequently Asked Questions",
       href: "https://www.uni-bamberg.de/en/studies/non-exchange-students-masters-degree/faq/"
      },
      md6: {
       title: "Contact and Further Information",
       href: "https://www.uni-bamberg.de/en/studies/non-exchange-students-masters-degree/contact-and-further-information/"
      }

      
    };
    localStorage.setItem('md_externalLinks', JSON.stringify(md_externalLinks));
    //Localhost links for Exchange Students
    var ex_externalLinks = {
      ex1: {
       title: "How do I apply?",
       href: "https://www.uni-bamberg.de/en/studies/exchange-students-eg-erasmus/how-do-i-apply/"
      },
      ex2: {
       title: "Next steps",
       href: "https://www.uni-bamberg.de/en/studies/exchange-students-eg-erasmus/next-steps/"
      },
      ex3: {
       title: "Before Leaving Bamberg",
       href: "https://www.uni-bamberg.de/en/studies/exchange-students-eg-erasmus/before-leaving-bamberg/"
      }
    };
    localStorage.setItem('ex_externalLinks', JSON.stringify(ex_externalLinks));
    //Localhost links for faculty
    var faculty_externalLinks = {
      uniba: {
       title: "University of Bamberg",
       href: "https://www.uni-bamberg.de/en/"
      },
      wiai: {
       title: "WIAI.de",
       href: "http://www.wiai.de"
      }
    };
    localStorage.setItem('faculty_externalLinks', JSON.stringify(faculty_externalLinks));

    //Localhost links for studies
    var studies_externalLinks = {
      uniba: {
       title: "Studying as a disabled person",
       href: "https://www.studying-in-germany.org/studying-in-germany-as-a-disabled-student/"
      }
    };
    localStorage.setItem('studies_externalLinks', JSON.stringify(studies_externalLinks));
    // ****  Finally
    localStorage.setItem('prepareLocalStorage', 'done');
  }
  else {
    console.debug('Leaving LocalStorage untouched');
  }
}

