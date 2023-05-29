import "./homeStyles.css"
import Navbar from "../../components/navbar/Navbar"
import LeftBar from "../../components/leftbar/LeftBar"
import Rightbar from "../../components/rightbar/Rightbar"
import Feeds from "../../components/feeds/Feeds"

export default function Home() {
	return (
		<div>
			<Navbar />
			<div className="home-container">
				<LeftBar />
				<Feeds />
				<Rightbar />
			</div>
		</div>
	)
}
