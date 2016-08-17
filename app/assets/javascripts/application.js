// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


function renderHouseUser(house){
  let h = house.response.results.result

  $container = $('#house-stat')
  $div1 = $('<div class="row">')
  $div2 = $('<div class="col s12 m6">')
  $div3 = $('<div class="card blue-grey darken-1">')
  $div4 = $('<div class="card-content white-text">')
  $div5 = $('<div class="card-action">')
  $a    = $('<a target="_blank">')
  $Button = $('<button id="addme">').text('Add Me')
  $span = $('<span class="card-title" id="houseaddress">')
  $ul   = $('<ul>')
  $liFamilySize   = $('<li id="useCode">').text('House type: '+ h.useCode)
  $liYearBuilt    = $('<li id="yearBuilt">').text('Year built: '+ h.yearBuilt)
  $lilotSizeSqFt  = $('<li id="lotSizeSqFt">').text('Square Foot: ' +h.lotSizeSqFt)
  $lilastSoldDate = $('<li id="lastSoldDate">').text('Last Sold Date: '+h.lastSoldDate)
  $lilastSoldPrice= $('<li id="lastSoldPrice">').text('Last Sold Price: $' +h.lastSoldPrice)
  $litaxAssessmentYear = $('<li id="taxAssessmentYear">').text('Tax Assessment Year: ' +h.taxAssessmentYear)
  $litaxAssessment = $('<li id="taxAssessment">').text('Tax Assessment: $' +h.taxAssessment)
  $a.attr('href', h.localRealEstate.region.links.forSaleByOwner).text('For Sale By Owner');



  $div5.append($a, $Button)
  $ul.append($liFamilySize, $liYearBuilt, $lilotSizeSqFt, $lilastSoldDate, $lilastSoldPrice, $litaxAssessmentYear, $litaxAssessment)
  $span.text(h.address.street + ' ' + h.address.city + ' '+h.address.state + ' ' +h.address.zipcode)

  $div4.append($span, $ul)
  $div3.append($div4, $div5)
  $div2.append($div3)
  $div1.append($div2)
  $container.append($div1)

}

function getUserSearch(){
  let params = {}

  $('#search-user').on('click', function(){
    //get values from the input field
    $address  = $('#address').val()
    $city     = $('#city').val()
    $state    = $('#state').val()
    $zip      = $('#zip').val()

    //add key value pair to object
    params['address'] = $address
    params['citystatezip'] = $city+' '+$state+ ' ' +$zip
    console.log(params)

    //ajax call with url and console log the data
    $url = '/houses?' +'address='+params['address'] + '&citystatezip='+params['citystatezip']
    console.log('Logging from javascript', $url)
    $.getJSON($url).done(function(house) {
      // console.log(house["SearchResults:searchresults"].request.address)
                console.log(house)
                renderHouseUser(house["SearchResults:searchresults"])
        })

  })
}










function renderHouseGuest(house){
  let h = house.response.results.result

  $container = $('#house-stat')
  $div1 = $('<div class="row">')
  $div2 = $('<div class="col s12 m6">')
  $div3 = $('<div class="card blue-grey darken-1">')
  $div4 = $('<div class="card-content white-text">')
  $div5 = $('<div class="card-action">')
  $a    = $('<a target="_blank">')
  $span = $('<span class="card-title" id="houseaddress">')
  $ul   = $('<ul>')
  $liFamilySize   = $('<li id="useCode">').text('House type: '+ h.useCode)
  $liYearBuilt    = $('<li id="yearBuilt">').text('Year built: '+ h.yearBuilt)
  $lilotSizeSqFt  = $('<li id="lotSizeSqFt">').text('Square Foot: ' +h.lotSizeSqFt)
  $lilastSoldDate = $('<li id="lastSoldDate">').text('Last Sold Date: '+h.lastSoldDate)
  $lilastSoldPrice= $('<li id="lastSoldPrice">').text('Last Sold Price: $' +h.lastSoldPrice)
  $litaxAssessmentYear = $('<li id="taxAssessmentYear">').text('Tax Assessment Year: ' +h.taxAssessmentYear)
  $litaxAssessment = $('<li id="taxAssessment">').text('Tax Assessment: $' +h.taxAssessment)
  $a.attr('href', h.localRealEstate.region.links.forSaleByOwner).text('For Sale By Owner');

  $div5.append($a)
  $ul.append($liFamilySize, $liYearBuilt, $lilotSizeSqFt, $lilastSoldDate, $lilastSoldPrice, $litaxAssessmentYear, $litaxAssessment)
  $span.text(h.address.street + ' ' + h.address.city + ' '+h.address.state + ' ' +h.address.zipcode)

  $div4.append($span, $ul)
  $div3.append($div4, $div5)
  $div2.append($div3)
  $div1.append($div2)
  $container.append($div1)

}

function getGuestSearch(){
  let params = {}

  $('#search-guest').on('click', function(){
    //get values from the input field
    $address  = $('#address').val()
    $city     = $('#city').val()
    $state    = $('#state').val()
    $zip      = $('#zip').val()

    //add key value pair to object
    params['address'] = $address
    params['citystatezip'] = $city+' '+$state+ ' ' +$zip
    // console.log(params)

    //ajax call with url and console log the data
    $url = '/houses?' +'address='+params['address'] + '&citystatezip='+params['citystatezip']
    console.log('Logging from javascript', $url)
    $.getJSON($url).done(function(house) {
      // console.log(house["SearchResults:searchresults"].request.address)
                // console.log(house)
                renderHouseGuest(house["SearchResults:searchresults"])
        })
  })
}


function addHouse(){
  // $('#addme').on('click', function(){
    console.log('Clicked')
    let $address            = $('#houseaddress').text()
    let $useCode            = $('#useCode').text()
    let $yearBuilt          = $('#yearBuilt').text()
    let $lotSizeSqFt        = $('#lotSizeSqFt').text()
    let $lastSoldDate       = $('#lastSoldDate').text()
    let $lastSoldPrice      = $('#lastSoldPrice').text()
    let $taxAssessmentYear  = $('#taxAssessmentYear').text()
    let $taxAssessment      = $('#taxAssessment').text()

    console.log($address, $useCode, $yearBuilt, $lotSizeSqFt, $lastSoldDate, $lastSoldPrice, $taxAssessmentYear, $taxAssessment)

    let house = {
      'address': $address,
      'type': $useCode,
      'built': $yearBuilt,
      'sqft' : $lotSizeSqFt,
      'last_sold_date': $lastSoldDate,
      'last_sold_price': $lastSoldPrice,
      'tax_assessment_year': $taxAssessmentYear,
      'tax_assessment': $taxAssessment
    }
    $.post('/houses',house, function(data){
      console.log(data)
    });

  // })
}



$(document).on('turbolinks:load', function() {
  console.log("Connected")
  getGuestSearch()
  getUserSearch()
  $('#addme').on('click', addHouse)

});
