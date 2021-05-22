   
   
   window.onload = function(){document.getElementById("core-members").style.display = "block";
    document.getElementById("default-team-tab").className+=" team-active";};



    function TeamDomain(domain) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" team-active", "");
      }
      document.getElementById(domain).style.display = "block";
      
    }
   
