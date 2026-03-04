import { NavLink } from "react-router";

export default function TopNavigationBar() {
	return(
		<nav className="mt-5 flex gap-5 border-b border-[#EDEDED]">
			<NavLink 
				to="/" 
				className={({isActive}) => isActive ? "border-b-2 border-[#6534FF]" : "text-[#97979B]"}
			>Все</NavLink>
			<NavLink 
				to="/designers"
				className={({isActive}) => isActive ? "border-b-2 border-[#6534FF]" : "text-[#97979B]"}
			>Designers</NavLink>
			<NavLink 
				to="/analysts"
				className={({isActive}) => isActive ? "border-b-2 border-[#6534FF]" : "text-[#97979B]"}
			>Analysts</NavLink>
			<NavLink 
				to="/managers"
				className={({isActive}) => isActive ? "border-b-2 border-[#6534FF]" : "text-[#97979B]"}
			>Managers</NavLink>
			<NavLink 
				to="/ios"
				className={({isActive}) => isActive ? "border-b-2 border-[#6534FF]" : "text-[#97979B]"}
			>IOS</NavLink>
			<NavLink 
				to="/android"
				className={({isActive}) => isActive ? "border-b-2 border-[#6534FF]" : "text-[#97979B]"}
			>Android</NavLink>
		</nav>
	)
}