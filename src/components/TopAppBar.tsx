import TopNavigationBar from "./TopNavigationBar";

export default function TopAppBar() {
	return(
		<div>
			<h2 className="font-bold text-3xl mt-5">Поиск</h2>
			
			<input type="text" placeholder="Введи имя, тег, почту..."/>

			<TopNavigationBar />
		</div>
	)
}