import "./navbarStyles.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material"

export default function () {
	return (
		<div className="navbarContainer">
			<div className="navbarLeft">
				<span className="logo">mychat</span>
			</div>
			<div className="navbarCenter">
				<div className="searchbar">
					<Search className="searchIcon" />
					<input
						placeholder="search for friends,posts and videos"
						className="searchInput"
					></input>
				</div>
			</div>
			<div className="navbarRight">
				<div className="topbarLinks">
					<span className="topbarLink">Homepage</span>
					<span className="topbarLink">Timeline</span>
				</div>
				<div className="topbarIcons">
					<div className="topbarIconItem">
						<Person />
						<span className="topbarIconBadge">1</span>
					</div>
					<div className="topbarIconItem">
						<Chat />
						<span className="topbarIconBadge">2</span>
					</div>
					<div className="topbarIconItem">
						<Notifications />
						<span className="topbarIconBadge">1</span>
					</div>
				</div>
				<img
					src="\assets\profile picture\person1.jpeg"
					className="topbarImg"
					alt="profile pic"
				></img>
			</div>
		</div>
	)
}
