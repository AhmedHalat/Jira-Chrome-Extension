// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

(function() {

  var color = [];
  var fav_colors = [2, 5, 6, 8, 13]
  var sums = document.getElementsByClassName('ghx-summary');

  [...sums].forEach((sum) =>{
      res = sum.innerText.match(/-(.*)-/s);
      if (res && res.length > 1 && res[1].length < 15) {
          var str = res[1];
          if (!color.includes(str)) color.push(str)
          if (color.length > fav_colors.length) fav_colors.push(fav_colors[fav_colors.length -1] + 1);
          var c = fav_colors[color.indexOf(str)];
          var inner = sum.innerText;
          sum.innerText = '';
          sum.innerHTML = `<span class="aui-lozenge ghx-label-${c}" title="${str}">${str}</span> - ${inner}`
      }
  })

})();
