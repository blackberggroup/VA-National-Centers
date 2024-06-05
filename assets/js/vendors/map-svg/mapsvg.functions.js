jQuery(document).ready(function() {
	jQuery("#mapsvg").mapSvg({
		markerLastID: 7,
		disableAll: true,
		width: 593.3779761904764,
		height: 318.2870370370371,
		colors: {
			baseDefault: "#000000",
			selected: 40,
			hover: 20,
			directory: "#fafafa",
			status: {},
			base: "#FEF6F1",
			stroke: "#E52E27"
		},
		viewBox: [477, 421, 593.3779761904764, 318.2870370370371],
		tooltips: {
			mode: "off",
			on: false,
			priority: "local",
			position: "left"
		},
		popovers: {
			mode: "off",
			on: false,
			priority: "local",
			position: "top",
			centerOn: true,
			width: 230,
			maxWidth: 50,
			maxHeight: 120,
			resetViewboxOnClose: true,
			mobileFullscreen: "1"
		},
		menuMarkers: {
			on: true,
			containerId: "mapsvg-menu-markers",
			template: function(marker) {
				// return '<li><a href="#' + marker.id + '">' + marker.tooltip + '<br />' + marker.id + '</a></li>'
				return '<li><a href="#' + marker.id + '">' + marker.tooltip + '</a><br />' + marker.id + '</li>'
			}
		},
		source: "assets/img/map-svg/usa.svg",
		title: "Site Location Map",
		markers: [{
			id: "VA Puget Sound health Care System<br />\nSeattle, WA",
			attached: true,
			isLink: false,
			tooltip: "<strong>VA Ventures</strong>",
			popover: "<strong>VA Ventures</strong>\n<br /><br />\nSeattle, WA\n<br />\n<a href=\"https://www.innovation.va.gov/oam/views/programs/va-ventures.html\">Visit Website</a>",
			data: {},
			src: "assets/img/map-svg/default-pin.svg",
			width: 26,
			height: 30,
			x: 529.6547009588819,
			y: 464.3699853100326,
			geoCoords: [47.613378, -122.194597]
		}, {
			id: "VA Palo Alto Health Care System<br />\nPalo Alto, CA",
			attached: true,
			isLink: false,
			tooltip: "<strong>National Center for Collaborative Healthcare Innovation</strong>",
			popover: "<strong>National Center for Collaborative Healthcare Innovation</strong>\n<br /><br />\nVA Palo Alto Health Care System\n<br />\n<a href=\"https://www.innovation.va.gov/ecosystem/views/national-centers/ncchi/\">Visit Website</a>",
			data: {},
			src: "assets/img/map-svg/default-pin.svg",
			width: 26,
			height: 30,
			x: 846.9330272495802,
			y: 520.3999876124325,
			geoCoords: [37.426471, -122.275474]
		}, {
			id: "Office of Connected Care, Veteran Integrated Service Network (VISN) 10<br />\nCincinnati, OH",
			attached: true,
			isLink: false,
			tooltip: "<strong>Digital and Remote Health Center for Innovation</strong>",
			popover: "<strong>Digital and Remote Health Center for Innovation</strong>\n<br /><br />\nCincinnati, OH\n<br />\n<a href=\"https://www.innovation.va.gov/ecosystem/views/national-centers/drhci\">Visit Website</a>",
			data: {},
			src: "assets/img/map-svg/default-pin.svg",
			width: 26,
			height: 30,
			x: 881.2815928922919,
			y: 573.6668890049117,
			// geoCoords: [37.18878, -83.830697]
			geoCoords: [39.2, -84.5]
		}, {
			id: "Veterans Integrated Service Network (VISN) 1<br />\nManchester, NH",
			attached: true,
			isLink: false,
			tooltip: "<strong>New England Center for Innovation Excellence</strong>",
			popover: "<strong>New England Center for Innovation Excellence</strong>\n<br /><br />\nManchester, NH\n<br />\n<a href=\"https://www.innovation.va.gov/ecosystem/views/national-centers/necie.html\">Visit Website</a>",
			data: {},
			src: "assets/img/map-svg/default-pin.svg",
			width: 26,
			height: 30,
			x: 927.2651992253102,
			y: 556.8532421224277,
			// geoCoords: [42.47555, -71.241815]
			geoCoords: [43, -71.241815]
		}, {
			id: "Central Virginia VA Health Care System<br />\nRichmond, VA",
			attached: true,
			isLink: false,
			tooltip: "<strong>Innovation, Development, Education, Advanced Implementation, Solutions (IDEAS) Center</strong>",
			popover: "<strong>Innovation, Development, Education, Advanced Implementation, Solutions (IDEAS) Center</strong>\n<br /><br />\nRichmond, VA\n<br />\n<a href=\"https://www.innovation.va.gov/ecosystem/views/national-centers/ideas/\">Visit Website</a>",
			data: {},
			src: "assets/img/map-svg/default-pin.svg",
			width: 26,
			height: 30,
			x: 940.7664045993826,
			y: 592.6314363637191,
			geoCoords: [37.633674, -78.311069]
		}],
		responsive: true
	});

    $('#mapsvg').css('background','');
});