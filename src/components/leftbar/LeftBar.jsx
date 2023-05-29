import "./leftBarStyles.css"
import { RssFeed } from "@mui/icons-material"

export default function LeftBar() {
	return (
		<div className="leftbar">
			<div className="leftbarWrapper">
				<ul className="leftbarList">
					<li className="leftbarListItem ">
						<RssFeed />
						<span className="leftbarListItemText">Feed</span>
					</li>
				</ul>
			</div>
		</div>
	)
}
