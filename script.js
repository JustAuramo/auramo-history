jwplayer("my-video").setup({
	file: "trailer.mp4",
	image: "https://www.themoviedb.org/t/p/original/4nXqYVnUJImG0HOAQ2QIryknuMC.jpg",
	primary: "html5",
	advertising: {
		client: "vast",
	schedule: {
		"myAds":{
		"offset":"pre",
		"tag":"https://ad-stage.visiblemeasures.com/a/2/?pl=218579"}
		}
	}
});