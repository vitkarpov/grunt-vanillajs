var s = document.getElementById('thing').style;
s.opacity = 1;
(function(){(s.opacity-=.1)<0?s.display="none": setTimeout(arguments.callee,40)})();