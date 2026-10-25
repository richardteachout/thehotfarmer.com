(function () {
  var KEY = 'thf_age_ok';
  var DAYS = 30;
  var gate = document.getElementById('gate');
  if (!gate) return;

  function ok() {
    try {
      var v = localStorage.getItem(KEY);
      return v && Number(v) > Date.now();
    } catch (e) { return false; }
  }

  function enter() {
    try { localStorage.setItem(KEY, String(Date.now() + DAYS * 864e5)); } catch (e) {}
    gate.hidden = true;
    document.body.classList.remove('gated');
  }

  if (ok()) {
    gate.hidden = true;
  } else {
    document.body.classList.add('gated');
  }

  var btn = document.getElementById('gate-enter');
  if (btn) btn.addEventListener('click', enter);
})();
