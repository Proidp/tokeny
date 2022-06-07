jQuery( document ).ready( function($){
	var x = '';
	var adminBarHeight = 0;
	if ( $("#wpadminbar").length != 0 ){
		adminBarHeight = $('#wpadminbar').height();
	}
	jQuery( '.mysticky-welcomebar-fixed' ).each( function(){
		var welcomebar_widget = jQuery( this ).data( 'welcomebar-widget' );

		if( jQuery( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).data('position') == 'top' ) {
			jQuery( '.mysticky-welcomebar-entry-effect-slide-in.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).css( 'top', '-' + $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).outerHeight() + 'px' );
		} else {
			jQuery( '.mysticky-welcomebar-entry-effect-slide-in.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).css( 'bottom', '-' + $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).outerHeight() + 'px' );
		}
		var welcombar_aftersubmission = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).data('aftersubmission');
		if( welcombar_aftersubmission == 'dont_show_welcomebar' ){
			var welcomebar_storage = localStorage.getItem("welcomebar_close_" + welcomebar_widget);
		} else if( welcombar_aftersubmission == 'show_welcomebar_next_visit' ) {
			var welcomebar_storage = sessionStorage.getItem("welcomebar_close_" + welcomebar_widget);
		} else {
			sessionStorage.removeItem('welcomebar_close_' + welcomebar_widget);
			localStorage.removeItem('welcomebar_close_' + welcomebar_widget);
			var welcomebar_storage = null;
		}
		if ( welcomebar_storage === null ){
			var after_trigger = jQuery( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).data('after-triger');
			if ( after_trigger == 'after_a_few_seconds' ) {
				if ( $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).hasClass( 'mysticky-welcomebar-display-desktop' ) ) {
					if ( $( window ).width() > 1024 ) {
						var trigger_sec = jQuery( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).data('triger-sec') * 1000;
						var welcombar_position = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).data('position');
						var welcombar_height = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).outerHeight();
						var divi_topbar_height = $( '.et_fixed_nav #top-header' ).outerHeight();
						var divi_total_height = welcombar_height + divi_topbar_height;

						setTimeout(function(){
							jQuery( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).addClass( 'mysticky-welcomebar-animation' );
							$( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).addClass( 'entry-effect' );
							$( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).removeClass( 'mysticky-welcomebar-notpresent' );
							jQuery( 'html,body' ).addClass( 'mysticky-welcomebar-apper' );
							var new_welcombar_height_top = new_welcombar_height_bottom = new_welcombar_margin_top = new_welcombar_padding_bottom = 0;
							/*set welcomebar position when welcombar display*/
							$( '.mysticky-welcomebar-fixed' ).each( function(){
								
								var welcomebar_widget_index = jQuery( this ).data( 'welcomebar-widget' );
								
								var welcomebar_widget_ready = $( this ).data( 'welcomebar-widget' );
								var welcombar_position_ready = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget_ready ).data( 'position' );
								var welcombar_height_ready = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget_ready ).outerHeight();
								if( ! $( this ).hasClass( 'mysticky-welcomebar-notpresent' ) && ! $( this ).hasClass( 'mysticky-welcomebar-notapper' ) ) {
									if ( welcombar_position_ready == 'top' ) {										
										
										var new_welcombar_position = adminBarHeight + welcomebar_widget_index + new_welcombar_height_top;
										if( welcomebar_widget_index != 0 ){
											var new_welcombar_position =   0 + new_welcombar_height_top;
										} else {
											var new_welcombar_position = adminBarHeight + 0 + new_welcombar_height_top;
										}
										
										$( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget_ready ).css( 'top', new_welcombar_position );
										jQuery( '.et_fixed_nav #top-header' ).css( 'top', new_welcombar_position + 'px' );
										new_welcombar_height_top = new_welcombar_position + $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget_ready ).outerHeight();

										var new_welcomebar_height = adminBarHeight + welcombar_height_ready + new_welcombar_margin_top;
										$( 'html.mysticky-welcomebar-apper' ).attr( 'style', 'margin-top: ' + new_welcomebar_height + 'px !important' );
										$( '#mysticky-nav' ).css( 'top', new_welcomebar_height + 'px' );
										new_welcombar_margin_top = new_welcombar_margin_top + $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget_ready ).outerHeight();
									} else {
										var new_welcombar_position = 0 + new_welcombar_height_bottom;
										jQuery( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget_ready ).css( 'bottom', new_welcombar_position );
										new_welcombar_height_bottom = new_welcombar_position + $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget_ready ).outerHeight();

										//$( 'html' ).attr( 'style', 'padding-bottom: ' + welcombar_height + 'px !important' );
										var new_welcomebar_height = welcombar_height_ready + new_welcombar_padding_bottom;
										jQuery( 'head' ).append( '<style class="mysticky_bottom_style" type="text/css">html.mysticky-welcomebar-apper {padding-bottom: ' + new_welcomebar_height + 'px}</style>' );
										new_welcombar_padding_bottom = new_welcombar_padding_bottom + $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget_ready ).outerHeight();
									}
								}
							} );

							if ( welcombar_position == 'top' ) {
								jQuery( '#mysticky_divi_style' ).remove();

								jQuery( 'head' ).append( '<style id="mysticky_divi_style" type="text/css">.et_fixed_nav #main-header {top: ' + welcombar_height + 'px !important}.et_fixed_nav #top-header + #main-header{top: ' + divi_total_height + 'px !important}</style>' );

								jQuery( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).css( 'opacity', '1' );

							} else {
								jQuery( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).css( 'opacity', '1' );
								//$( 'html' ).css( 'margin-top', '' );
								jQuery( '#mysticky_divi_style' ).remove();
								jQuery( '.et_fixed_nav #top-header' ).css( 'top', '' );
							}
							mysticky_welcombar_automatically_close( welcomebar_widget );
						}, trigger_sec );
					}
				}
			}
			if ( $( window ).width() <= 1024 ) {
				if ( after_trigger == 'after_a_few_seconds' ) {
					if ( $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).hasClass( 'mysticky-welcomebar-display-mobile' ) ) {
						var trigger_sec = jQuery( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).data('triger-sec') * 1000;
						var welcombar_position = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).data('position');
						var welcombar_height = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).outerHeight();
						setTimeout(function(){
							jQuery( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).addClass( 'mysticky-welcomebar-animation' );
							$( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).addClass( 'entry-effect' );
							$( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).removeClass( 'mysticky-welcomebar-notpresent' );
							jQuery( 'html,body' ).addClass( 'mysticky-welcomebar-apper' );
							jQuery( '#mysticky_divi_style' ).remove();
							jQuery( '.et_fixed_nav #top-header' ).css( 'top', '' );

							var new_welcombar_height_top = new_welcombar_height_bottom = new_welcombar_margin_top = new_welcombar_padding_bottom = 0;
							/*set welcomebar position when welcombar display*/
							$( '.mysticky-welcomebar-fixed' ).each( function(){
								var welcomebar_widget_ready = $( this ).data( 'welcomebar-widget' );
								var welcombar_position_ready = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget_ready ).data( 'position' );
								var welcombar_height_ready = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget_ready ).outerHeight();

								if( ! $( this ).hasClass( 'mysticky-welcomebar-notpresent' ) && ! $( this ).hasClass( 'mysticky-welcomebar-notapper' ) ) {
									if ( welcombar_position_ready == 'top' ) {
										if( welcomebar_widget_ready == 0 ){
											var new_welcombar_position = 0 + adminBarHeight + new_welcombar_height_top;
											var new_welcomebar_height = welcombar_height_ready + adminBarHeight + new_welcombar_margin_top;
										}else{
											var new_welcombar_position = 0  + new_welcombar_height_top;
											var new_welcomebar_height = welcombar_height_ready + new_welcombar_margin_top + adminBarHeight;
										}
										
										$( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget_ready ).css( 'top', new_welcombar_position );
										jQuery( '.et_fixed_nav #top-header' ).css( 'top', new_welcombar_position + 'px' );
										new_welcombar_height_top = new_welcombar_position + $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget_ready ).outerHeight();
										$( 'html.mysticky-welcomebar-apper' ).attr( 'style', 'margin-top: ' + ( new_welcomebar_height ) + 'px !important' );
										$( '#mysticky-nav' ).css( 'top', new_welcomebar_height + 'px' );
										new_welcombar_margin_top = new_welcombar_margin_top + $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget_ready ).outerHeight();
									} else {
										var new_welcombar_position = 0 + new_welcombar_height_bottom;
										jQuery( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget_ready ).css( 'bottom', new_welcombar_position );
										new_welcombar_height_bottom = new_welcombar_position + $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget_ready ).outerHeight();

										//$( 'html' ).attr( 'style', 'padding-bottom: ' + welcombar_height + 'px !important' );
										var new_welcomebar_height = welcombar_height_ready + new_welcombar_padding_bottom;
										jQuery( 'head' ).append( '<style class="mysticky_bottom_style" type="text/css">html.mysticky-welcomebar-apper {padding-bottom: ' + new_welcomebar_height + 'px}</style>' );
										new_welcombar_padding_bottom = new_welcombar_padding_bottom + $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget_ready ).outerHeight();
									}
								}
							} );

							if ( welcombar_position == 'top' ) {
								jQuery( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).addClass( 'mysticky-welcomebar-animation' );

								jQuery( 'head' ).append( '<style id="mysticky_divi_style" type="text/css">.et_fixed_nav #main-header {top: ' + welcombar_height + 'px !important}.et_fixed_nav #top-header + #main-header{top: ' + divi_total_height + 'px !important}</style>' );

								jQuery( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).css( 'opacity', '1' );

							} else {
								jQuery( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).css( 'opacity', '1' );
								//$( 'html' ).css( 'margin-top', '' );
								jQuery( '.et_fixed_nav #top-header' ).css( 'top', '' );
							}

							mysticky_welcombar_automatically_close( welcomebar_widget );
						}, trigger_sec );
					}
				}
			}
			mystickyelements_present( welcomebar_widget );
		}
		
		/*  start timer logic */
		function initialTimer(divId,timerTxtColor,timerBgColor){
			
			jQuery(divId).html( "<div class='counter-main-block'><div class='counter-timer' style='color:"+timerTxtColor+";'><span style='background-color:"+timerBgColor+";color:"+timerTxtColor+"'>0</span></div> <div class='counter-timer' style='color:"+timerTxtColor+";'><span style='background-color:"+timerBgColor+";color:"+timerTxtColor+"'>0</span></div><label>Days</label></div> : <div class='counter-main-block'><div class='counter-timer' style='color:"+timerTxtColor+";'> <span style='background-color:"+timerBgColor+";color:"+timerTxtColor+"'>0</span></div> <div class='counter-timer' style='color:"+timerTxtColor+";'> <span style='background-color:"+timerBgColor+";color:"+timerTxtColor+"'>0</span></div><label>Hours</label></div> : <div class='counter-main-block'><div class='counter-timer' style='color:"+timerTxtColor+";'><span style='background-color:"+timerBgColor+";color:"+timerTxtColor+"'>0</span></div> <div class='counter-timer' style='color:"+timerTxtColor+";'><span style='background-color:"+timerBgColor+";color:"+timerTxtColor+"'>0</span></div> <label>Minutes</label></div> : <div class='counter-main-block'><div class='counter-timer' style='color:"+timerTxtColor+";'><span style='background-color:"+timerBgColor+";color:"+timerTxtColor+"'>0</span></div> <div class='counter-timer' style='color:"+timerTxtColor+";'><span style='background-color:"+timerBgColor+";color:"+timerTxtColor+"'>0</span></div><label>Seconds</label></div>");
			
		}
		
		jQuery('.count-down-timer-box').each(function(){
			
			var timerBgColor = $(this).data('timerbgcolor');
			var timerTxtColor = $(this).data('timertxtcolor');
			var welcomebarTextColor = $(this).data('welcombar-textcolor');
			var divId = "#"+$(this).attr('id');
			var expiredDate = '';
			var expiredTime = '';
			var timer_from = $(this).data('timerfrom');
			var timezone = '';
			var data_endTime = '';
			
			if(timer_from == 'timer_apperance'){
				
				expiredDate = $(this).data('enddate');
				expiredTime = $(this).data('endtime');
				var dateArr = expiredDate.split("/");
				var year = dateArr[2];
				var month = dateArr[0];
				var day = dateArr[1];
				expiredDate = new Date(expiredDate + ' ' + expiredTime);
				data_endTime = $(this).data('endtime');
				timezone = $(this).data('timezone');
			}else{
				expiredDate = new Date();
				var expirHour = $(this).data('hour');
				var expirMinute = $(this).data('minute');
				var expirSecond = $(this).data('second');
				var expire_time = readMyStickyMenuCookie('welcombar-countdowntime-'+ welcomebar_widget);
				
				if( expire_time != null ) {					
					expiredDate = new Date(expire_time);
				} else {
					createMyStickyMenuCookie('welcombar-countdowntime-'+ welcomebar_widget, expiredDate, 1);
				}
				
				expirMinute = parseInt(expirMinute) + parseInt(expiredDate.getMinutes());
				expirSecond = parseInt(expirSecond) + parseInt(expiredDate.getSeconds());
				
				expiredDate.setHours(parseInt(expirHour));
				expiredDate.setMinutes(parseInt(expirMinute));
				expiredDate.setSeconds(parseInt(expirSecond));
			}
			
			var num = /^[-+]?[0-9]+\.[0-9]+$/;
			var plus_number = /^[-+]?[0-9]+$/;	
			timezone = timezone.toString().replace("-", "");
			if(expiredDate == 'Invalid Date'){
				//initialTimer(divId,timerTxtColor,timerBgColor);
				jQuery(window).trigger('resize');
				jQuery(divId).html("");
				return;
			}
			
			
			/* For Set Time out to check counter div class appear or not */
			
			//setTimeout(jQuery(window).trigger('resize'), 3000);
			
			var checkTimerSet = setInterval(function(){
				if(jQuery(divId + " .counter-main-block").length > 0){
					jQuery(window).trigger('resize');
					console.log(5555);
					clearInterval(checkTimerSet);
				}
				
			},1000);
			
			var timer = setInterval(function(){
				var nowDate = new Date();
				if(timer_from == 'timer_apperance'){
					if( num.test(timezone) == true || plus_number.test(timezone) == true ) {
						nowDate = getCurrentDateTimeGMT(timezone)
					}else{
						nowDate =  new Date(nowDate.toLocaleString('en-US', {timeZone: timezone}));	
					}	
				}
				
				var hourss = Math.abs(expiredDate.getTime() - nowDate.getTime()) / 3600000;
				var diffrenceDate = expiredDate - nowDate;
				var diffrenceDate = expiredDate - nowDate;
				
				if(diffrenceDate < 0){
					jQuery(window).trigger('resize');
					jQuery(divId).html("");
					clearInterval(timer);
					return;
				}
				var days = Math.floor(diffrenceDate / (1000*60*60*24));
				var hours = Math.floor((diffrenceDate % (1000*60*60*24))/ (1000*60*60));
				var minute = Math.floor((diffrenceDate %(1000*60*60)) / (1000*60));
				var seconds = Math.floor((diffrenceDate %(1000*60)) / 1000);
				if ( Math.floor(hourss) == 24 ) {
					hours= Math.floor(hourss);
					days = 0;
				}
				
				days = ( days > 9) ? days : '0' + days;
				hours = (hours > 9) ? hours : '0' + hours;
				minute = (minute > 9) ? minute : '0' + minute;
				seconds = (seconds > 9) ? seconds : '0' + seconds;
					
				
				if(timer_from == 'timer_apperance'){
					if(days == 0 && hours == 0 && minute == 0 && seconds == 0){
						jQuery(rightDivId).html("");
					}else{
						jQuery(divId).html( "<div class='counter-main-block'><div class='counter-timer' style='color:"+timerTxtColor+";'><span style='background-color:"+timerBgColor+";color:"+timerTxtColor+"'>" + parseInt(days/10) + "</span></div> <div class='counter-timer' style='color:"+timerTxtColor+";'><span style='background-color:"+timerBgColor+";color:"+timerTxtColor+"'>" + parseInt(days%10) + "</span></div><label>Days</label></div> : <div class='counter-main-block'><div class='counter-timer' style='color:"+timerTxtColor+";'> <span style='background-color:"+timerBgColor+";color:"+timerTxtColor+"'>" + parseInt(hours/10) + "</span></div> <div class='counter-timer' style='color:"+timerTxtColor+";'> <span style='background-color:"+timerBgColor+";color:"+timerTxtColor+"'>" + parseInt(hours%10) + "</span></div><label>Hours</label></div> : <div class='counter-main-block'><div class='counter-timer' style='color:"+timerTxtColor+";'><span style='background-color:"+timerBgColor+";color:"+timerTxtColor+"'>" + parseInt(minute/10) + "</span></div> <div class='counter-timer' style='color:"+timerTxtColor+";'><span style='background-color:"+timerBgColor+";color:"+timerTxtColor+"'>" +  parseInt(minute%10) + "</span></div> <label>Minutes</label></div> : <div class='counter-main-block'><div class='counter-timer' style='color:"+timerTxtColor+";'><span style='background-color:"+timerBgColor+";color:"+timerTxtColor+"'>" +  parseInt(seconds/10) + "</span></div> <div class='counter-timer' style='color:"+timerTxtColor+";'><span style='background-color:"+timerBgColor+";color:"+timerTxtColor+"'>" +  parseInt(seconds%10) + "</span></div><label>Seconds</label></div>");
					}
				}else{
					
					jQuery(divId).html( "<div class='counter-main-block'><div class='counter-timer' style='color:"+timerTxtColor+";'><span style='background-color:"+timerBgColor+";color:"+timerTxtColor+"'>" + parseInt(minute/10) + "</span></div> <div class='counter-timer' style='color:"+timerTxtColor+";'><span style='background-color:"+timerBgColor+";color:"+timerTxtColor+"'>" +  parseInt(minute%10) + "</span></div> <label>Minutes</label></div> : <div class='counter-main-block'><div class='counter-timer' style='color:"+timerTxtColor+";'><span style='background-color:"+timerBgColor+";color:"+timerTxtColor+"'>" +  parseInt(seconds/10) + "</span></div> <div class='counter-timer' style='color:"+timerTxtColor+";'><span style='background-color:"+timerBgColor+";color:"+timerTxtColor+"'>" +  parseInt(seconds%10) + "</span></div><label>Seconds</label></div>");
				}
				
				jQuery(divId + " span").css('color',timerTxtColor);
				jQuery(divId).css('color',welcomebarTextColor);
			},1000);	
		});
		/*  end timer logic */
		
	} );
	
	function createMyStickyMenuCookie(name, value, days){
		if (days) {
			var expiry = new Date();
			expiry.setTime(expiry.getTime()+(days*24*60*60*1000));
			var expires = "; expires=" + expiry.toGMTString();
		} else {
			var expires = "";
		}
		document.cookie = escape(name) + "=" + escape(value) + expires + "; path=/";
	}
	
	function readMyStickyMenuCookie(name){
		var nameEQ = escape(name) + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ')
			c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) == 0)
			return unescape(c.substring(nameEQ.length, c.length));
		}
		return null;
	}
	
	function getCurrentDateTimeGMT(timezone){
			var localDate = new Date();
			var localTime = localDate.getTime();
			var localOffset = localDate.getTimezoneOffset() * 60000;
			var utc = localTime + localOffset;
			var offset = timezone;  
			var utc_offset = utc + (3600000 * offset);
			localDate = new Date(utc_offset); 
			return localDate;
		}

	$( window ).resize( function(){
		var adminBarHeight = new_welcombar_height_top = new_welcombar_height_bottom = new_welcombar_margin_top = new_welcombar_padding_bottom = 0;
		if ( $("#wpadminbar").length != 0 ){
			adminBarHeight = $('#wpadminbar').height();
		}
		$( '.mysticky-welcomebar-fixed' ).each( function(){
			var welcomebar_widget = $( this ).data( 'welcomebar-widget' );
			var welcombar_aftersubmission = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).data('aftersubmission');
			if( welcombar_aftersubmission == 'dont_show_welcomebar' ){
				var welcomebar_storage = localStorage.getItem("welcomebar_close_" + welcomebar_widget);
			} else if( welcombar_aftersubmission == 'show_welcomebar_next_visit' ) {
				var welcomebar_storage = sessionStorage.getItem("welcomebar_close_" + welcomebar_widget);
			} else {
				sessionStorage.removeItem('welcomebar_close_' + welcomebar_widget);
				localStorage.removeItem('welcomebar_close_' + welcomebar_widget);
				var welcomebar_storage = null;
			}
			if ( welcomebar_storage === null ){
				var after_trigger = jQuery( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).data('after-triger');
				if ( after_trigger == 'after_a_few_seconds' ) {
					var trigger_sec = jQuery( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).data('triger-sec') * 1000;
					var welcombar_position = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).data('position');
					var welcombar_height = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).outerHeight();
					var divi_topbar_height = $( '.et_fixed_nav #top-header' ).outerHeight();
					var divi_total_height = welcombar_height + divi_topbar_height;
					if ( $( window ).width() <= 1024 ) {
						if ( $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).hasClass( 'mysticky-welcomebar-display-mobile' ) ) {
							setTimeout(function(){
								jQuery( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).addClass( 'mysticky-welcomebar-animation' );
								$( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).addClass( 'entry-effect' );
								$( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).removeClass( 'mysticky-welcomebar-notpresent' );
								jQuery( '#mysticky_divi_style' ).remove();
								jQuery( '.et_fixed_nav #top-header' ).css( 'top', '' );
								if ( ! $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).hasClass( 'mysticky-welcomebar-notapper' ) ) {
									jQuery( 'html,body' ).addClass( 'mysticky-welcomebar-apper' );
								} else {
									jQuery( 'html,body' ).removeClass( 'mysticky-welcomebar-apper' );
								}

								var new_welcombar_height_top = new_welcombar_height_bottom = new_welcombar_margin_top = new_welcombar_padding_bottom = 0;
								/*set welcomebar position when welcombar display*/
								$( '.mysticky-welcomebar-fixed' ).each( function(){
									var welcomebar_widget_ready = $( this ).data( 'welcomebar-widget' );
									var welcombar_position_ready = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget_ready ).data( 'position' );
									var welcombar_height_ready = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget_ready ).outerHeight();

									if( ! $( this ).hasClass( 'mysticky-welcomebar-notpresent' ) && ! $( this ).hasClass( 'mysticky-welcomebar-notapper' ) ) {
										if ( welcombar_position_ready == 'top' ) {
											if( welcomebar_widget_ready == 0 ){
												if ( $( window ).width() <= 600 ) {
													if( $(window).scrollTop() > 0 ) {
														var new_welcombar_position = 0 + new_welcombar_height_top;
													} else {
														var new_welcombar_position = adminBarHeight + 0 + new_welcombar_height_top;	
													}
												} else {
													var new_welcombar_position = adminBarHeight + 0 + new_welcombar_height_top;
												}
												//var new_welcombar_position = adminBarHeight + 0 + new_welcombar_height_top;
												var new_welcomebar_height = welcombar_height_ready + adminBarHeight + new_welcombar_margin_top;	
												new_welcombar_margin_top = new_welcombar_margin_top + adminBarHeight + $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget_ready ).outerHeight();

												
											} else {
												var new_welcombar_position =  0 + new_welcombar_height_top;
												var new_welcomebar_height = welcombar_height_ready  + new_welcombar_margin_top;
												new_welcombar_margin_top = new_welcombar_margin_top +  $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget_ready ).outerHeight();
											}
											
											$( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget_ready ).css( 'top', new_welcombar_position );
											jQuery( '.et_fixed_nav #top-header' ).css( 'top', new_welcombar_position + 'px' );
											new_welcombar_height_top = new_welcombar_position + $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget_ready ).outerHeight();

											
											$( 'html.mysticky-welcomebar-apper' ).attr( 'style', 'margin-top: ' + new_welcomebar_height + 'px !important' );
											$( '#mysticky-nav' ).css( 'top', new_welcomebar_height + 'px' );
											
										} else {
											var new_welcombar_position = 0 + new_welcombar_height_bottom;
											jQuery( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget_ready ).css( 'bottom', new_welcombar_position );
											new_welcombar_height_bottom = new_welcombar_position + $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget_ready ).outerHeight();

											//$( 'html' ).attr( 'style', 'padding-bottom: ' + welcombar_height + 'px !important' );
											var new_welcomebar_height = welcombar_height_ready + new_welcombar_padding_bottom;
											jQuery( 'head' ).append( '<style class="mysticky_bottom_style" type="text/css">html.mysticky-welcomebar-apper {padding-bottom: ' + new_welcomebar_height + 'px}</style>' );
											new_welcombar_padding_bottom = new_welcombar_padding_bottom + $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget_ready ).outerHeight();
										}
									}
								} );

								if ( welcombar_position == 'top' ) {
									jQuery( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).addClass( 'mysticky-welcomebar-animation' );

									jQuery( 'head' ).append( '<style id="mysticky_divi_style" type="text/css">.et_fixed_nav #main-header {top: ' + welcombar_height + 'px !important}.et_fixed_nav #top-header + #main-header{top: ' + divi_total_height + 'px !important}</style>' );

									jQuery( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).css( 'opacity', '1' );

								} else {
									jQuery( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).css( 'opacity', '1' );
									//$( 'html' ).css( 'margin-top', '' );
									jQuery( '.et_fixed_nav #top-header' ).css( 'top', '' );
								}

								mysticky_welcombar_automatically_close( welcomebar_widget );
							}, 0 ); // trigger_sec
						}
					} else {
						if ( $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).hasClass( 'mysticky-welcomebar-display-desktop' ) ) {
							setTimeout(function(){
								jQuery( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).addClass( 'mysticky-welcomebar-animation' );
								$( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).addClass( 'entry-effect' );
								$( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).removeClass( 'mysticky-welcomebar-notpresent' );
								if ( ! $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).hasClass( 'mysticky-welcomebar-notapper' ) ) {
									jQuery( 'html,body' ).addClass( 'mysticky-welcomebar-apper' );
								} else {
									jQuery( 'html,body' ).removeClass( 'mysticky-welcomebar-apper' );
								}

								var new_welcombar_height_top = new_welcombar_height_bottom = new_welcombar_margin_top = new_welcombar_padding_bottom = 0;
								/*set welcomebar position when welcombar display*/
								$( '.mysticky-welcomebar-fixed' ).each( function(){
									var welcomebar_widget_ready = $( this ).data( 'welcomebar-widget' );
									var welcombar_position_ready = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget_ready ).data( 'position' );
									var welcombar_height_ready = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget_ready ).outerHeight();
									if( ! $( this ).hasClass( 'mysticky-welcomebar-notpresent' ) && ! $( this ).hasClass( 'mysticky-welcomebar-notapper' ) ) {
										if ( welcombar_position_ready == 'top' ) {
											if( welcomebar_widget_ready == 0 ){
												var new_welcombar_position = adminBarHeight + 0 + new_welcombar_height_top;
												var new_welcomebar_height = welcombar_height_ready + adminBarHeight + new_welcombar_margin_top;	
												new_welcombar_margin_top = new_welcombar_margin_top + adminBarHeight + $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget_ready ).outerHeight();

												
											} else {
												var new_welcombar_position =  0 + new_welcombar_height_top;
												var new_welcomebar_height = welcombar_height_ready  + new_welcombar_margin_top;
												new_welcombar_margin_top = new_welcombar_margin_top +  $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget_ready ).outerHeight();
											}											
											
											$( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget_ready ).css( 'top', new_welcombar_position );
											jQuery( '.et_fixed_nav #top-header' ).css( 'top', new_welcombar_position + 'px' );
											new_welcombar_height_top = new_welcombar_position + $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget_ready ).outerHeight();
											
											jQuery( '.mysticky-welcomebar-apper.et_fixed_nav #top-header' ).css( 'top', new_welcomebar_height + 'px' );
											jQuery( 'head' ).append( '<style id="mysticky_divi_style" type="text/css">.mysticky-welcomebar-apper.et_fixed_nav #main-header {top: ' + new_welcomebar_height + 'px !important}.mysticky-welcomebar-apper.et_fixed_nav #top-header + #main-header{top: ' + divi_total_height + 'px !important}</style>' );
											
											$( 'html.mysticky-welcomebar-apper' ).attr( 'style', 'margin-top: ' + new_welcomebar_height + 'px !important' );
											$( '#mysticky-nav' ).css( 'top', new_welcomebar_height + 'px' );
											new_welcombar_margin_top = new_welcombar_margin_top + $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget_ready ).outerHeight();
										} else {
											var new_welcombar_position = 0 + new_welcombar_height_bottom;
											jQuery( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget_ready ).css( 'bottom', new_welcombar_position );
											new_welcombar_height_bottom = new_welcombar_position + $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget_ready ).outerHeight();

											//$( 'html' ).attr( 'style', 'padding-bottom: ' + welcombar_height + 'px !important' );
											var new_welcomebar_height = welcombar_height_ready + new_welcombar_padding_bottom;
											jQuery( 'head' ).append( '<style class="mysticky_bottom_style" type="text/css">html.mysticky-welcomebar-apper {padding-bottom: ' + new_welcomebar_height + 'px}</style>' );
											new_welcombar_padding_bottom = new_welcombar_padding_bottom + $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget_ready ).outerHeight();
										}
									}
								} );

								if ( welcombar_position == 'top' ) {
									jQuery( '#mysticky_divi_style' ).remove();

									jQuery( 'head' ).append( '<style id="mysticky_divi_style" type="text/css">.et_fixed_nav #main-header {top: ' + welcombar_height + 'px !important}.et_fixed_nav #top-header + #main-header{top: ' + divi_total_height + 'px !important}</style>' );

									jQuery( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).css( 'opacity', '1' );

								} else {
									jQuery( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).css( 'opacity', '1' );
									//$( 'html' ).css( 'margin-top', '' );
									jQuery( '#mysticky_divi_style' ).remove();
									jQuery( '.et_fixed_nav #top-header' ).css( 'top', '' );
								}

								mysticky_welcombar_automatically_close( welcomebar_widget );
							}, 0 ); // trigger_sec
						}
					}
				} else {
					if ( $( window ).width() <= 600 ) {
						var new_welcombar_height_top = 0;
						$( '.mysticky-welcomebar-fixed' ).each( function(){
							var new_welcomebar_widget = $( this ).data( 'welcomebar-widget' );
							var test_welcombar_position = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + new_welcomebar_widget ).data('position');
							
							if( ! $( this ).hasClass( 'mysticky-welcomebar-notpresent' ) && ! $( this ).hasClass( 'mysticky-welcomebar-notapper' ) ) {
								if ( test_welcombar_position == 'top' ) {
									if( $(window).scrollTop() > 0 ) {
										var new_welcombar_position = 0 + new_welcombar_height_top;
									} else {
										if( new_welcomebar_widget == 0 ){
											var new_welcombar_position = 0 + adminBarHeight + new_welcombar_height_top;
										}else{
											var new_welcombar_position = 0  + new_welcombar_height_top;
										}
									}
									$( '.mysticky-welcomebar-apper .mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + new_welcomebar_widget ).css( 'top', new_welcombar_position );
								}
							}
						} );
					}
				}
				mystickyelements_present( welcomebar_widget );
			}
		} );
	} );

	
	$( window ).on('scroll', function(){	
		if ( $("#wpadminbar").length != 0 ){
		 	adminBarHeight = $('#wpadminbar').height();
		}	
		$( '.mysticky-welcomebar-fixed' ).each( function(){
			var welcomebar_widget = $( this ).data( 'welcomebar-widget' );
			var welcombar_aftersubmission = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).data('aftersubmission');
			var after_trigger = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).data('after-triger');
			if( welcombar_aftersubmission == 'dont_show_welcomebar' ){
				var welcomebar_storage = localStorage.getItem("welcomebar_close_" + welcomebar_widget);
			} else if( welcombar_aftersubmission == 'show_welcomebar_next_visit' ) {
				var welcomebar_storage = sessionStorage.getItem("welcomebar_close_" + welcomebar_widget);
			} else {
				sessionStorage.removeItem('welcomebar_close_' + welcomebar_widget);
				localStorage.removeItem('welcomebar_close_' + welcomebar_widget);
				var welcomebar_storage = null;
			}
			if ( welcomebar_storage === null ){
				var welcombar_height   = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).outerHeight();
				var welcombar_position = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).data('position');
				var divi_topbar_height = $( '.et_fixed_nav #top-header' ).outerHeight();
				var divi_total_height  = welcombar_height + divi_topbar_height;
				
				if ( after_trigger === 'after_scroll' ) {					
					var scroll = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
					var after_scroll_val = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).data('triger-sec');

					if( scroll > after_scroll_val ) {
						if ( ! $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).hasClass( 'mysticky-welcomebar-notapper' ) ) {
							$( 'html,body' ).addClass( 'mysticky-welcomebar-apper' );
						} else {
							$( 'html,body' ).removeClass( 'mysticky-welcomebar-apper' );
						}
						if ( $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).hasClass( 'mysticky-welcomebar-display-desktop' ) ) {
							if ( $( window ).width() > 1024 ) {
								$( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).addClass( 'mysticky-welcomebar-animation' );
								$( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).addClass( 'entry-effect' );
								if( $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).hasClass( 'mysticky-welcomebar-notpresent' ) ) {
									var new_welcombar_height_top = new_welcombar_height_bottom = new_welcombar_margin_top = new_welcombar_padding_bottom = 0;
									
									$( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).removeClass( 'mysticky-welcomebar-notpresent' );

									/*set welcomebar position when welcombar display*/								
									$( '.mysticky-welcomebar-fixed' ).each( function(){
										var new_welcomebar_widget = $( this ).data( 'welcomebar-widget' );
										var test_welcombar_position = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + new_welcomebar_widget ).data('position');
										var welcombar_height_scroll   = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + new_welcomebar_widget ).outerHeight();

										if( ! $( this ).hasClass( 'mysticky-welcomebar-notpresent' ) && ! $( this ).hasClass( 'mysticky-welcomebar-notapper' ) ) {
											if ( test_welcombar_position == 'top' ) {
												
												new_welcombar_margin_top = new_welcombar_margin_top + adminBarHeight + $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + new_welcomebar_widget ).outerHeight();
												if( $(window).scrollTop() == 0 ) {
													var new_welcombar_position = 0 + new_welcombar_height_top;
												} else {
													if( new_welcomebar_widget != 0 ){
														var new_welcombar_position =   0 + new_welcombar_height_top;
													} else {
														var new_welcombar_position = adminBarHeight + 0 + new_welcombar_height_top;
													}
													//var new_welcombar_position = 0 + new_welcombar_height_top + adminBarHeight;
												}
												$( '.mysticky-welcomebar-apper .mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + new_welcomebar_widget ).css( 'top', new_welcombar_position );
												new_welcombar_height_top = new_welcombar_position + $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + new_welcomebar_widget ).outerHeight();

												//var new_welcomebar_height = welcombar_height_scroll + new_welcombar_margin_top;
												var new_welcomebar_height = new_welcombar_margin_top;
												jQuery( '.mysticky-welcomebar-apper.et_fixed_nav #top-header' ).css( 'top', new_welcomebar_height + 'px' );
												jQuery( 'head' ).append( '<style id="mysticky_divi_style" type="text/css">.mysticky-welcomebar-apper.et_fixed_nav #main-header {top: ' + new_welcomebar_height + 'px !important}.mysticky-welcomebar-apper.et_fixed_nav #top-header + #main-header{top: ' + divi_total_height + 'px !important}</style>' );
												$( 'html.mysticky-welcomebar-apper' ).attr( 'style', 'margin-top: ' + new_welcomebar_height + 'px !important' );
												$( '.mysticky-welcomebar-apper #mysticky-nav' ).css( 'top', new_welcomebar_height + 'px' );
												new_welcombar_margin_top = new_welcombar_margin_top + $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + new_welcomebar_widget ).outerHeight();
											} else {
												var new_welcombar_position = 0 + new_welcombar_height_bottom;
												$( '.mysticky-welcomebar-apper .mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + new_welcomebar_widget ).css( 'bottom', new_welcombar_position );
												new_welcombar_height_bottom = new_welcombar_position + $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + new_welcomebar_widget ).outerHeight();
												var new_welcomebar_height = welcombar_height_scroll + new_welcombar_padding_bottom;
												$( 'head' ).append( '<style class="mysticky_bottom_style" type="text/css">html.mysticky-welcomebar-apper {padding-bottom: ' + new_welcomebar_height + 'px}</style>' );
												new_welcombar_padding_bottom = new_welcombar_padding_bottom + $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + new_welcomebar_widget ).outerHeight();
											}
										}
									} );
								}
								
								if ( welcombar_position == 'top' ) {
									$( '.mysticky-welcomebar-apper .mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).css( 'opacity', '1' );
									//$( 'html' ).css( 'padding-bottom', '' );
									jQuery( '#mysticky_divi_style' ).remove();
								} else {
									jQuery( '.mysticky-welcomebar-apper .mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).css( 'opacity', '1' );
									jQuery( '#mysticky_divi_style' ).remove();
									jQuery( '.et_fixed_nav #top-header' ).css( 'top', '' );
									//$( 'html' ).css( 'margin-top', '' );
									//$( 'html.mysticky-welcomebar-apper' ).attr( 'style', 'padding-bottom: ' + welcombar_height + 'px !important' );
								}
							}
						}
						if ( $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).hasClass( 'mysticky-welcomebar-display-mobile' ) ) {
							if ( $( window ).width() <= 1024 ) {
								$( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).addClass( 'mysticky-welcomebar-animation' );
								$( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).addClass( 'entry-effect' );
								$( '#mysticky_divi_style' ).remove();
								$( '.et_fixed_nav #top-header' ).css( 'top', '' );
								
								if( $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).hasClass( 'mysticky-welcomebar-notpresent' ) ) {
									$( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).removeClass( 'mysticky-welcomebar-notpresent' );
									var new_welcombar_height_top = new_welcombar_height_bottom = new_welcombar_margin_top = new_welcombar_padding_bottom = 0;
									$( '.mysticky-welcomebar-fixed' ).each( function(){
										var new_welcomebar_widget = $( this ).data( 'welcomebar-widget' );
										var test_welcombar_position = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + new_welcomebar_widget ).data('position');
										var welcombar_height_scroll   = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + new_welcomebar_widget ).outerHeight();
										
										if( ! $( this ).hasClass( 'mysticky-welcomebar-notpresent' ) && ! $( this ).hasClass( 'mysticky-welcomebar-notapper' ) ) {
											if ( test_welcombar_position == 'top' ) {
												if( new_welcomebar_widget == 0 ){
													if ( $( window ).width() <= 600 ) {
														var new_welcombar_position = 0 + new_welcombar_height_top;
													} else {
														var new_welcombar_position = 0 + new_welcombar_height_top + adminBarHeight;
													}
													new_welcombar_height_top = new_welcombar_position + $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + new_welcomebar_widget ).outerHeight();
													var new_welcomebar_height = welcombar_height_scroll + new_welcombar_margin_top + adminBarHeight;
												}else{
													var new_welcombar_position = 0  + new_welcombar_height_top;
													new_welcombar_height_top =   new_welcombar_position + $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + new_welcomebar_widget ).outerHeight();
													var new_welcomebar_height =   welcombar_height_scroll + new_welcombar_margin_top;
												}
												$( '.mysticky-welcomebar-apper .mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + new_welcomebar_widget ).css( 'top', new_welcombar_position );

												jQuery( '.mysticky-welcomebar-apper.et_fixed_nav #top-header' ).css( 'top', new_welcomebar_height + 'px' );
												jQuery( 'head' ).append( '<style id="mysticky_divi_style" type="text/css">.mysticky-welcomebar-apper.et_fixed_nav #main-header {top: ' + new_welcomebar_height + 'px !important}.mysticky-welcomebar-apper.et_fixed_nav #top-header + #main-header{top: ' + divi_total_height + 'px !important}</style>' );

												$( 'html.mysticky-welcomebar-apper' ).attr( 'style', 'margin-top: ' + new_welcomebar_height + 'px !important' );
												$( '.mysticky-welcomebar-apper #mysticky-nav' ).css( 'top', new_welcomebar_height + 'px' );
												new_welcombar_margin_top = new_welcombar_margin_top + $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + new_welcomebar_widget ).outerHeight();
											} else {
												var new_welcombar_position = 0 + new_welcombar_height_bottom;
												$( '.mysticky-welcomebar-apper .mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + new_welcomebar_widget ).css( 'bottom', new_welcombar_position );
												new_welcombar_height_bottom = new_welcombar_position + $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + new_welcomebar_widget ).outerHeight();
												var new_welcomebar_height = welcombar_height_scroll + new_welcombar_padding_bottom;
												jQuery( 'head' ).append( '<style class="mysticky_bottom_style" type="text/css">html.mysticky-welcomebar-apper {padding-bottom: ' + new_welcomebar_height + 'px}</style>' );
												new_welcombar_padding_bottom = new_welcombar_padding_bottom + $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + new_welcomebar_widget ).outerHeight();
											}
										}
									} );
								}
								if ( welcombar_position == 'top' ) {
									jQuery( '.mysticky-welcomebar-apper .mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).css( 'opacity', '1' );
									//$( 'html' ).css( 'padding-bottom', '' );
								} else {
									jQuery( '.mysticky-welcomebar-apper .mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).css( 'opacity', '1' );
									//$( 'html' ).css( 'margin-top', '' );
									//$( 'html' ).attr( 'style', 'padding-bottom: ' + welcombar_height + 'px !important' );
								}
							}
						}
						mysticky_welcombar_automatically_close( welcomebar_widget );
					} else if( $(window).scrollTop() == 0 ) {
						if ( $( window ).width() <= 600 ) {
							if ( $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).hasClass( 'mysticky-welcomebar-display-mobile' ) ) {
								$( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).addClass( 'mysticky-welcomebar-notpresent' );
								var new_welcombar_height_top = 0;
								$( '.mysticky-welcomebar-fixed' ).each( function(){
									var new_welcomebar_widget = $( this ).data( 'welcomebar-widget' );
									var test_welcombar_position = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + new_welcomebar_widget ).data('position');
									
									//if( ! $( this ).hasClass( 'mysticky-welcomebar-notpresent' ) && ! $( this ).hasClass( 'mysticky-welcomebar-notapper' ) ) {
										if ( test_welcombar_position == 'top' ) {
											if( new_welcomebar_widget == 0 ){
												var new_welcombar_position = 0 + adminBarHeight + new_welcombar_height_top;
											}else{
												var new_welcombar_position = 0  + new_welcombar_height_top;
											}
											$( '.mysticky-welcomebar-apper .mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + new_welcomebar_widget ).css( 'top', new_welcombar_position );
											new_welcombar_height_top = new_welcombar_position + $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + new_welcomebar_widget ).outerHeight();
										}
									//}
								} );
							}
						}
					}
				} else {
					if ( $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).hasClass( 'mysticky-welcomebar-display-mobile' ) ) {
						if ( $( window ).width() <= 600 ) {
							var new_welcombar_height_top = 0;
							$( '.mysticky-welcomebar-fixed' ).each( function(){
								var new_welcomebar_widget = $( this ).data( 'welcomebar-widget' );
								var test_welcombar_position = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + new_welcomebar_widget ).data('position');
								
								if( ! $( this ).hasClass( 'mysticky-welcomebar-notpresent' ) && ! $( this ).hasClass( 'mysticky-welcomebar-notapper' ) ) {
									if ( test_welcombar_position == 'top' ) {
										if( $(window).scrollTop() > 0 ) {
											var new_welcombar_position = 0 + new_welcombar_height_top;
										} else {
											if( new_welcomebar_widget == 0 ){
												var new_welcombar_position = 0 + adminBarHeight + new_welcombar_height_top;
											}else{
												var new_welcombar_position = 0  + new_welcombar_height_top;
											}
										}
										$( '.mysticky-welcomebar-apper .mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + new_welcomebar_widget ).css( 'top', new_welcombar_position );
										new_welcombar_height_top = new_welcombar_position + $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + new_welcomebar_widget ).outerHeight();
									}
								}
							} );
						}
					}
				}
				mystickyelements_present( welcomebar_widget );
			}
		} );
	});

	$( '.mysticky-welcomebar-close, .mysticky-welcomebar-btn a' ).on( 'click', function(){
		var new_welcombar_margin_top_close = new_welcombar_height_top_close = 0;
		var new_welcombar_padding_bottom_close = new_welcombar_height_bottom_close = 0;
		var welcomebar_widget = $( this ).data( 'welcomebar-widget' );
		var welcombar_rediect = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).data('rediect');
		var welcombar_height  = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).outerHeight();
		var welcombar_aftersubmission = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).data('aftersubmission');
		$( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).addClass( 'mysticky-welcomebar-notapper' );
		$( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).addClass( 'mysticky-welcomebar-notpresent' );

		if( $( '.mysticky-welcomebar-notapper' ).length == $( '.mysticky-welcomebar-fixed' ).length ) {
			$( 'html,body' ).removeClass( 'mysticky-welcomebar-apper' );
		}
		if( welcombar_rediect != 'thankyou_screen' || $( this ).attr( 'class' ) == 'mysticky-welcomebar-close' ) {
			if( welcombar_aftersubmission != 'show_welcomebar_every_page' ){
				if( welcombar_aftersubmission == 'dont_show_welcomebar' ){
					sessionStorage.removeItem('welcomebar_close_' + welcomebar_widget);
					localStorage.setItem('welcomebar_close_' + welcomebar_widget, 'close');
				} else if( welcombar_aftersubmission == 'show_welcomebar_next_visit' ) {
					localStorage.removeItem('welcomebar_close_' + welcomebar_widget);
					sessionStorage.setItem('welcomebar_close_' + welcomebar_widget, 'close');
				}
			}

			var welcombar_position = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).data('position');

			$( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).slideUp( 'slow' );
			if ( welcombar_position == 'top' ) {
				$( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).css( 'top', '-' + welcombar_height + 'px' );
			} else {
				$( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).css( 'bottom', '-' + welcombar_height + 'px' );
			}
			/*set welcomebar position when other welcombar close*/
			$( '.mysticky-welcomebar-fixed' ).each( function(){
				var common_welcombar_position = $( this ).data( 'position' );
				var common_welcomebar_widget  = $( this ).data( 'welcomebar-widget' );
				if ( common_welcombar_position == 'top' ) {
					if( common_welcomebar_widget != welcomebar_widget && ! $( this ).hasClass( 'mysticky-welcomebar-notapper' ) && ! $( this ).hasClass( 'mysticky-welcomebar-notpresent' ) ) {
					
						var common_welcombar_height = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + common_welcomebar_widget ).outerHeight();
						var new_welcomebar_height = common_welcombar_height + new_welcombar_margin_top_close;
						var new_welcombar_position = 0 + new_welcombar_height_top_close + adminBarHeight;

						$( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + common_welcomebar_widget ).css( 'top', new_welcombar_position );
						
						new_welcombar_height_top_close = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + common_welcomebar_widget ).outerHeight() - new_welcombar_position;

						$( 'html.mysticky-welcomebar-apper' ).attr( 'style', 'margin-top: ' + new_welcomebar_height + 'px !important' );
						$( '#mysticky-nav' ).css( 'top', new_welcomebar_height + 'px' );
						new_welcombar_margin_top_close = new_welcombar_margin_top_close + $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + common_welcomebar_widget ).outerHeight();
					} else {
						var welcomebar_fixed_length = $( '.mysticky-welcomebar-fixed' ).length;
						var welcomebar_notapper_length = $( '.mysticky-welcomebar-notapper' ).length;
						var welcomebar_notapper_top_length = $( '.mysticky-welcomebar-position-top.mysticky-welcomebar-notapper' ).length;
						var welcomebar_notpresent_top_length = $( '.mysticky-welcomebar-position-top.mysticky-welcomebar-notpresent' ).length;
						var welcomebar_top_length = $( '.mysticky-welcomebar-position-top' ).length;
						if( welcomebar_notapper_length == welcomebar_fixed_length || welcomebar_top_length == welcomebar_notapper_top_length || welcomebar_top_length == welcomebar_notpresent_top_length ) {
							$( 'html' ).css( 'margin-top', '' );
							$( '#mysticky-nav' ).css( 'top', '0px' );
						}
					}

				} else {
					if( common_welcomebar_widget != welcomebar_widget && ! $( this ).hasClass( 'mysticky-welcomebar-notapper' ) && ! $( this ).hasClass( 'mysticky-welcomebar-notpresent' ) ) {
							
						var common_welcombar_height = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + common_welcomebar_widget ).outerHeight();
						var new_welcomebar_height  = common_welcombar_height + new_welcombar_padding_bottom_close;
						var new_welcombar_position = 0 + new_welcombar_height_bottom_close;

						$( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + common_welcomebar_widget ).css( 'bottom', new_welcombar_position );
						new_welcombar_height_bottom_close = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + common_welcomebar_widget ).outerHeight() - new_welcombar_position;
						$( 'head' ).append( '<style class="mysticky_bottom_style" type="text/css">html.mysticky-welcomebar-apper {padding-bottom: ' + new_welcomebar_height + 'px}</style>' );
						new_welcombar_padding_bottom_close = new_welcombar_padding_bottom_close + $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + common_welcomebar_widget ).outerHeight();
					} else {
						var welcomebar_fixed_length = $( '.mysticky-welcomebar-fixed' ).length;
						var welcomebar_notapper_length = $( '.mysticky-welcomebar-notapper' ).length;
						var welcomebar_notapper_bottom_length = $( '.mysticky-welcomebar-position-bottom.mysticky-welcomebar-notapper' ).length;
						var welcomebar_notpresent_bottom_length = $( '.mysticky-welcomebar-position-bottom.mysticky-welcomebar-notpresent' ).length;
						var welcomebar_bottom_length = $( '.mysticky-welcomebar-position-bottom' ).length;
						if( welcomebar_notapper_length == welcomebar_fixed_length || welcomebar_bottom_length == welcomebar_notapper_bottom_length || welcomebar_bottom_length == welcomebar_notpresent_bottom_length ) {
							$( 'head' ).append( '<style class="mysticky_bottom_style" type="text/css">html.mysticky-welcomebar-apper {padding-bottom: 0px}</style>' );
						}
					}
				}
			} );
			//jQuery( 'html' ).css( 'margin-top', '' );
			jQuery( '#mysticky_divi_style' ).remove();
			jQuery( '.et_fixed_nav #top-header' ).css( 'top', '' );
			jQuery( 'html' ).css( 'padding-bottom', '' );
			//$( '#mysticky-nav' ).css( 'top', '0px' );
			/*if mystickyelements show*/
			var mystickyelements_show = $( '.mystickyelements-fixed' ).length;
			if( mystickyelements_show && $( window ).width() <= 1024 && $( '.mystickyelements-fixed' ).hasClass( 'mystickyelements-position-mobile-top' ) && welcombar_position == 'top' ) {
				var mystickyelements_height 	  = adminBarHeight + $( '.mystickyelements-fixed' ).height();
				$( '.mystickyelements-fixed' ).css( 'top', '' );
				$( 'html' ).attr( 'style', 'margin-top: ' + mystickyelements_height + 'px !important' );
			}
		} else {
			var thankyou_content_height = jQuery('.mysticky-welcomebar-thankyou-content').height();
			if( thankyou_content_height > 60 ) {
				$( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).css({ 'min-height': thankyou_content_height + 'px', 'height' : 'auto' });
			}
			$( '.mysticky-welcomebar-thankyou-content' ).show();
			$( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget- .mysticky-welcomebar-content > p' ).hide();
			$( '.mysticky-welcomebar-btn' ).hide();
		}
	} );

	/*function*/
	function mystickyelements_present( welcomebar_widget ) {
		var after_trigger 		  = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).data('after-triger');
		var mystickyelements_show = $( '.mystickyelements-fixed' ).length;
		
		var welcombar_position 		= $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).data('position');
		
		if( mystickyelements_show ) {
			var welcombar_position 		= $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).data('position');
			var welcombar_height 		= $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).outerHeight();
			var mystickyelements_height = $( '.mystickyelements-fixed' ).height();
			var mystickyelements_total_height =  adminBarHeight + welcombar_height + mystickyelements_height;
			if ( $( window ).width() <= 1024 && $( '.mystickyelements-fixed' ).hasClass( 'mystickyelements-position-mobile-top' ) ) {
				if ( after_trigger == 'after_a_few_seconds' ) {
					if ( $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).hasClass( 'mysticky-welcomebar-display-mobile' ) ) {
						var trigger_sec = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).data('triger-sec') * 1000;
						setTimeout(function(){
							if ( welcombar_position == 'top' ) {
								if ( jQuery( window ).width() <= 600 && jQuery(window).scrollTop() != 0 && welcombar_position == 'top') {
									welcombar_height = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).outerHeight() - adminBarHeight;
									mystickyelements_total_height =   ( welcombar_height + mystickyelements_height) - adminBarHeight;
									$( '.mystickyelements-fixed' ).css( 'top', welcombar_height );
									$( 'html' ).attr( 'style', 'margin-top: ' + mystickyelements_total_height + 'px !important' );
									
								} else {
									$( '.mystickyelements-fixed' ).css( 'top', welcombar_height );
									$( 'html' ).attr( 'style', 'margin-top: ' + mystickyelements_total_height + 'px !important' );
									
								}
							} else {
								$( '.mystickyelements-fixed' ).css( 'top', '' );
								//$( 'html' ).attr( 'style', 'padding-bottom: ' + welcombar_height + 'px !important' );
								if( ! jQuery( 'style' ).hasClass( 'mysticky_bottom_style' ) ) {
									jQuery( 'head' ).append( '<style class="mysticky_bottom_style" type="text/css">html.mysticky-welcomebar-apper {padding-bottom: ' + welcombar_height + 'px}</style>' );
								}
							}
						}, trigger_sec );
					}
				} else if ( after_trigger === 'after_scroll' ) {
					var scroll = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
					var after_scroll_val = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).data('triger-sec');
					if( scroll > after_scroll_val ) {
						if ( $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).hasClass( 'mysticky-welcomebar-display-mobile' ) ) {
							if ( welcombar_position == 'top' ) {
								$( '.mystickyelements-fixed' ).css( 'top', welcombar_height );
								$( 'html' ).attr( 'style', 'margin-top: ' + mystickyelements_total_height + 'px !important' );
								
							} else {
								$( '.mystickyelements-fixed' ).css( 'top', '' );
								//$( 'html' ).attr( 'style', 'padding-bottom: ' + welcombar_height + 'px !important' );
								if( ! $( 'style' ).hasClass( 'mysticky_bottom_style' ) ) {
									$( 'head' ).append( '<style class="mysticky_bottom_style" type="text/css">html.mysticky-welcomebar-apper {padding-bottom: ' + welcombar_height + 'px}</style>' );
								}
							}
						}
					}
				}
			}
		}
		
		/*if ( jQuery( window ).width() <= 600 && jQuery(window).scrollTop() != 0 && welcombar_position == 'top') {
			
			var new_welcomebar_widget = (welcomebar_widget != 0 ) ? welcomebar_widget-1 : 0;
			welcombar_height = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + new_welcomebar_widget ).outerHeight() ;
			var mystickyelements_height = ( $( '.mystickyelements-fixed' ).length != 0 ) ? $( '.mystickyelements-fixed' ).height() : 0;
			
			if ( welcomebar_widget == 0) {
				$( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).css( 'top', '0px');
			} else {
				$( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).css( 'top', welcombar_height + 'px');
			}
			var mystickyelements_total_height = 0;
			jQuery( '.mysticky-welcomebar-fixed' ).each( function(){				
				new_welcomebar_widget = $( this ).data( 'welcomebar-widget' );
				var welcombar_position 		= $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + new_welcomebar_widget ).data('position');
				if (welcombar_position == 'top'){
					mystickyelements_total_height =   $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + new_welcomebar_widget ).outerHeight() + mystickyelements_total_height;					
				}
			});
			$( 'html' ).attr( 'style', 'margin-top: ' + mystickyelements_total_height + 'px !important' );
		} else if (welcombar_position == 'top' ) {
			var adminBarHeight = 0;
			if ( jQuery("#wpadminbar").length != 0 ){
				var adminBarHeight = jQuery('#wpadminbar').height();
			}
			if ( welcomebar_widget == 0) {
				welcombar_height = adminBarHeight;
			} else {
				new_welcomebar_widget = welcomebar_widget- 1;
				welcombar_height = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + new_welcomebar_widget ).outerHeight() + adminBarHeight;
			}
			$( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).css( 'top', welcombar_height + 'px');
			var mystickyelements_total_height = 0;
			jQuery( '.mysticky-welcomebar-fixed' ).each( function(){				
				new_welcomebar_widget = $( this ).data( 'welcomebar-widget' );
				var welcombar_position 		= $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + new_welcomebar_widget ).data('position');
				if (welcombar_position == 'top'){
					mystickyelements_total_height =   $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + new_welcomebar_widget ).outerHeight() + mystickyelements_total_height;	
				}
			});	
			$( 'html' ).attr( 'style', 'margin-top: ' + ( mystickyelements_total_height + adminBarHeight )  + 'px !important' );
		}*/
	}

	function mysticky_welcombar_automatically_close( welcomebar_widget ) {
		var welcombar_automatically_enabled = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).data( 'automatically-enabled' );
		var automatically_triggersec = jQuery( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).data('automatically-triggersec') * 1000;
		var welcombar_aftersubmission = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).data('aftersubmission');
		var welcombar_height = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).outerHeight();
		if( welcombar_automatically_enabled == 1 ) {
			
			setTimeout(function(){
				jQuery( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).addClass( 'mysticky-welcomebar-notapper' );
				$( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).addClass( 'mysticky-welcomebar-notpresent' );
				if( jQuery( '.mysticky-welcomebar-notapper' ).length == jQuery( '.mysticky-welcomebar-fixed' ).length ) {
					jQuery( 'html,body' ).removeClass( 'mysticky-welcomebar-apper' );
				}
				if( welcombar_aftersubmission != 'show_welcomebar_every_page' ){
					if( welcombar_aftersubmission == 'dont_show_welcomebar' ){
						sessionStorage.removeItem('welcomebar_close_' + welcomebar_widget);
						localStorage.setItem('welcomebar_close_' + welcomebar_widget, 'close');
					} else if( welcombar_aftersubmission == 'show_welcomebar_next_visit' ) {
						localStorage.removeItem('welcomebar_close_' + welcomebar_widget);
						sessionStorage.setItem('welcomebar_close_' + welcomebar_widget, 'close');
					}
				}
				var welcombar_position = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).data('position');

				jQuery( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).slideUp( 'slow' );
				if ( welcombar_position == 'top' ) {
					jQuery( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).css( 'top', '-' + welcombar_height + 'px' );
				} else {
					jQuery( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + welcomebar_widget ).css( 'bottom', '-' + welcombar_height + 'px' );
				}
				var new_welcombar_margin_top_close = new_welcombar_height_top_close = 0;
				var new_welcombar_padding_bottom_close = new_welcombar_height_bottom_close = 0;
				/*set welcomebar position when other welcombar close*/
				$( '.mysticky-welcomebar-fixed' ).each( function(){
					var common_welcombar_position = $( this ).data( 'position' );
					var common_welcomebar_widget  = $( this ).data( 'welcomebar-widget' );
					if ( common_welcombar_position == 'top' ) {
						if( ! $( this ).hasClass( 'mysticky-welcomebar-notapper' ) && ! $( this ).hasClass( 'mysticky-welcomebar-notpresent' ) ) {
							var common_welcombar_height = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + common_welcomebar_widget ).outerHeight();
							var new_welcomebar_height = common_welcombar_height + new_welcombar_margin_top_close;
							var new_welcombar_position = 0 + new_welcombar_height_top_close;

							$( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + common_welcomebar_widget ).css( 'top', new_welcombar_position );
							new_welcombar_height_top_close = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + common_welcomebar_widget ).outerHeight() - new_welcombar_position;

							$( 'html.mysticky-welcomebar-apper' ).attr( 'style', 'margin-top: ' + new_welcomebar_height + 'px !important' );
							
							$( '#mysticky-nav' ).css( 'top', new_welcomebar_height + 'px' );
							new_welcombar_margin_top_close = new_welcombar_margin_top_close + $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + common_welcomebar_widget ).outerHeight();
						} else {
							var welcomebar_fixed_length = $( '.mysticky-welcomebar-fixed' ).length;
							var welcomebar_notapper_length = $( '.mysticky-welcomebar-notapper' ).length;
							var welcomebar_notapper_top_length = $( '.mysticky-welcomebar-position-top.mysticky-welcomebar-notapper' ).length;
							var welcomebar_notpresent_top_length = $( '.mysticky-welcomebar-position-top.mysticky-welcomebar-notpresent' ).length;
							var welcomebar_top_length = $( '.mysticky-welcomebar-position-top' ).length;
							if( welcomebar_notapper_length == welcomebar_fixed_length || welcomebar_top_length == welcomebar_notapper_top_length || welcomebar_top_length == welcomebar_notpresent_top_length ) {
								$( 'html' ).css( 'margin-top', '' );
								$( '#mysticky-nav' ).css( 'top', '0px' );
							}
						}
					} else {
						if( ! $( this ).hasClass( 'mysticky-welcomebar-notapper' ) && ! $( this ).hasClass( 'mysticky-welcomebar-notpresent' ) ) {
							var common_welcombar_height = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + common_welcomebar_widget ).outerHeight();
							var new_welcomebar_height  = common_welcombar_height + new_welcombar_padding_bottom_close;
							var new_welcombar_position = 0 + new_welcombar_height_bottom_close;

							$( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + common_welcomebar_widget ).css( 'bottom', new_welcombar_position );
							new_welcombar_height_bottom_close = $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + common_welcomebar_widget ).outerHeight() - new_welcombar_position;

							$( 'head' ).append( '<style class="mysticky_bottom_style" type="text/css">html.mysticky-welcomebar-apper {padding-bottom: ' + new_welcomebar_height + 'px}</style>' );
							new_welcombar_padding_bottom_close = new_welcombar_padding_bottom_close + $( '.mysticky-welcomebar-fixed.mysticky-welcomebar-widget-' + common_welcomebar_widget ).outerHeight();
						} else {
							var welcomebar_fixed_length = $( '.mysticky-welcomebar-fixed' ).length;
							var welcomebar_notapper_length = $( '.mysticky-welcomebar-notapper' ).length;
							var welcomebar_notapper_bottom_length = $( '.mysticky-welcomebar-position-bottom.mysticky-welcomebar-notapper' ).length;
							var welcomebar_notpresent_bottom_length = $( '.mysticky-welcomebar-position-bottom.mysticky-welcomebar-notpresent' ).length;
							var welcomebar_bottom_length = $( '.mysticky-welcomebar-position-bottom' ).length;

							if( welcomebar_notapper_length == welcomebar_fixed_length || welcomebar_bottom_length == welcomebar_notapper_bottom_length || welcomebar_bottom_length == welcomebar_notpresent_bottom_length ) {
								$( 'head' ).append( '<style class="mysticky_bottom_style" type="text/css">html.mysticky-welcomebar-apper {padding-bottom: 0px}</style>' );
							}
						}
					}
				} );

				//jQuery( 'html' ).css( 'margin-top', '' );
				jQuery( '#mysticky_divi_style' ).remove();
				jQuery( '.et_fixed_nav #top-header' ).css( 'top', '' );
				//jQuery( 'html' ).css( 'padding-bottom', '' );
				//$( '#mysticky-nav' ).css( 'top', '0px' );
				/*if mystickyelements show*/
				var mystickyelements_show = $( '.mystickyelements-fixed' ).length;
				if( mystickyelements_show && $( window ).width() <= 1024 && $( '.mystickyelements-fixed' ).hasClass( 'mystickyelements-position-mobile-top' ) && welcombar_position == 'top' ) {
					var mystickyelements_height 	  = $( '.mystickyelements-fixed' ).height();
					$( '.mystickyelements-fixed' ).css( 'top', '' );
					$( 'html' ).attr( 'style', 'margin-top: ' + mystickyelements_height + 'px !important' );
				}
			}, automatically_triggersec );
		}
	}

});
jQuery(".mysticky-welcomebar-fixed").on(
	"animationend MSAnimationEnd webkitAnimationEnd oAnimationEnd",
	function() {
		jQuery(this).removeClass("animation-start");
	}
);
jQuery( document ).ready( function() {
	var container = jQuery( ".mysticky-welcomebar-fixed" );
	var refreshId = setInterval( function() {
		container.addClass( "animation-start" );
	}, 3500 );
});