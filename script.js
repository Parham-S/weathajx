$(".city-btn").click(function () {
	// alert('button clicked');
	$(".city-form").css({
		left: "0",
		opacity: "1",
		visibility: "visible",
		transition: "all 0.5s",
	});
});
$(".go-back").click(function () {
	$("#main").css({
		opacity: "1",
		visibility: "visible",
		position: "relative",
		transition: "all 0.5s",
	});
	$("#header").css({
		opacity: "0",
		visibility: "hidden",
		zIndex: "-1",
		transition: "all 0.5s",
	});
});
const city_input = $("#city-input");
const mykey = ""; // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< insert key in empty string
$(".city-form-btn").click(function () {
	console.log(city_input.val());
	$.ajax({
		url: `https://api.openweathermap.org/data/2.5/forecast?q=${city_input.val()}&units=imperial&appid=${mykey}`,
		method: "GET",
		cache: false,
		success: function (data) {
			$("#main").css({
				opacity: "0",
				visibility: "hidden",
				position: "absolute",
				transition: "all 0.5s",
			});
			$("#header").css({
				opacity: "1",
				visibility: "visible",
				zIndex: "1",
				transition: "all 0.5s",
			});
			console.log(data);
			renderToBody(data);
		},
		error: function (data, status) {
			console.log(data, status);
		},
	});
});

const countrycode_input = $("#countrycode-input"),
	date = new Date(),
	newDate = date.toDateString();
function renderToBody(data) {
	$(".date-time").html(`${newDate}`);
	$(".country").html(`${data.city.name},${data.city.country}`);
	$(".weather-img").html(
		`<img src=http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png >`
	);
	$(".weather-desc").html(` ${data.list[0].weather[0].description}`);
	$(".wind").html(`${data.list[0].wind.speed} kmph `);
	$(".hum").html(`${data.list[0].main.humidity} mm `);
	$(".pre").html(`${data.list[0].main.pressure} mb `);
	$(".current-temp").html(
		`<h1>${Math.round(data.list[0].main.temp)}<b>&deg;</b><b>F</b></h1>`
	);
	$(".min-temp").html(
		`<h3>${Math.round(data.list[0].main.temp_min)}<b>&deg;</b><b>F</b></h3>`
	);
	$(".max-temp").html(
		`<h3>${Math.round(data.list[0].main.temp_max)}<b>&deg;</b><b>F</b></h3>`
	);
	$(".tm1").html(
		`<p class="dt-txt">${
			data.list[1].dt_txt
		}</p><img src=http://openweathermap.org/img/wn/${
			data.list[1].weather[0].icon
		}@2x.png> <div class="next-day-temp"><h3>${Math.round(
			data.list[1].main.temp_min
		)}<b>&deg;</b><b>F</b></h3>/<h3>${Math.round(
			data.list[1].main.temp_max
		)}<b>&deg;</b><b>C</b></h3></div> `
	);
	$(".tm2").html(
		`<p class="dt-txt">${
			data.list[2].dt_txt
		}</p><img src=http://openweathermap.org/img/wn/${
			data.list[2].weather[0].icon
		}@2x.png> <div class="next-day-temp"><h3>${Math.round(
			data.list[2].main.temp_min
		)}<b>&deg;</b><b>F</b></h3>/<h3>${Math.round(
			data.list[2].main.temp_max
		)}<b>&deg;</b><b>C</b></h3></div>`
	);
	$(".tm3").html(
		`<p class="dt-txt">${
			data.list[3].dt_txt
		}</p><img src=http://openweathermap.org/img/wn/${
			data.list[3].weather[0].icon
		}@2x.png> <div class="next-day-temp"><h3>${Math.round(
			data.list[3].main.temp_min
		)}<b>&deg;</b><b>F</b></h3>/<h3>${Math.round(
			data.list[3].main.temp_max
		)}<b>&deg;</b><b>C</b></h3></div>`
	);
	$(".tm4").html(
		`<p class="dt-txt">${
			data.list[4].dt_txt
		}</p><img src=http://openweathermap.org/img/wn/${
			data.list[4].weather[0].icon
		}@2x.png> <div class="next-day-temp"><h3>${Math.round(
			data.list[4].main.temp_min
		)}<b>&deg;</b><b>F</b></h3>/<h3>${Math.round(
			data.list[4].main.temp_max
		)}<b>&deg;</b><b>C</b></h3></div>`
	);
	$(".tm5").html(
		`<p class="dt-txt">${
			data.list[5].dt_txt
		}</p><img src=http://openweathermap.org/img/wn/${
			data.list[5].weather[0].icon
		}@2x.png> <div class="next-day-temp"><h3>${Math.round(
			data.list[5].main.temp_min
		)}<b>&deg;</b><b>F</b></h3>/<h3>${Math.round(
			data.list[5].main.temp_max
		)}<b>&deg;</b><b>C</b></h3></div>`
	);

	if (
		data.list[0].weather[0].icon == "01d" &&
		data.list[0].weather[0].icon == "01n"
	) {
		$(".clear-sky-gif").css({
			opacity: "1",
			visibility: "visible",
			transition: "all 0.5s",
		});
		console.log(data.list[0].weather[0].icon);
	} else if (
		data.list[0].weather[0].icon == "02d" &&
		data.list[0].weather[0].icon == "02n"
	) {
		$(".clouds-gif").css({
			opacity: "1",
			visibility: "visible",
			transition: "all 0.5s",
		});
		console.log(data.list[0].weather[0].icon);
	} else if (
		data.list[0].weather[0].icon == "03d" &&
		data.list[0].weather[0].icon == "03n"
	) {
		$(".clouds-gif").css({
			opacity: "1",
			visibility: "visible",
			transition: "all 0.5s",
		});
		console.log(data.list[0].weather[0].icon);
	} else if (
		data.list[0].weather[0].icon == "04d" &&
		data.list[0].weather[0].icon == "04n"
	) {
		$(".clouds-gif").css({
			opacity: "1",
			visibility: "visible",
			transition: "all 0.5s",
		});
		console.log(data.list[0].weather[0].icon);
	} else if (
		data.list[0].weather[0].icon == "09d" &&
		data.list[0].weather[0].icon == "09n"
	) {
		$(".rain-gif").css({
			opacity: "1",
			visibility: "visible",
			transition: "all 0.5s",
		});
		console.log(data.list[0].weather[0].icon);
	} else if (
		data.list[0].weather[0].icon == "10d" &&
		data.list[0].weather[0].icon == "10n"
	) {
		$(".rain-gif").css({
			opacity: "1",
			visibility: "visible",
			transition: "all 0.5s",
		});
		console.log(data.list[0].weather[0].icon);
	} else if (
		data.list[0].weather[0].icon == "11d" &&
		data.list[0].weather[0].icon == "11n"
	) {
		$(".rain-gif").css({
			opacity: "1",
			visibility: "visible",
			transition: "all 0.5s",
		});
		console.log(data.list[0].weather[0].icon);
	} else if (
		data.list[0].weather[0].icon == "13d" &&
		data.list[0].weather[0].icon == "13n"
	) {
		$(".snow-gif").css({
			opacity: "1",
			visibility: "visible",
			transition: "all 0.5s",
		});
		console.log(data.list[0].weather[0].icon);
	} else if (
		data.list[0].weather[0].icon == "50d" &&
		data.list[0].weather[0].icon == "50n"
	) {
		$(".clear-sky-gif").css({
			opacity: "1",
			visibility: "visible",
			transition: "all 0.5s",
		});
		console.log(data.list[0].weather[0].icon);
	}
}
