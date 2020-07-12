$(function() {

  $(".flexboxCard a[href^='http']").each(function() {
    $(this).css({
      background: "url(http://g.etfv.co/" + this.href + ") left center no-repeat",
	  "background-size": "16px 16px",
      "padding-left": "30px"
    });
  });
  
});