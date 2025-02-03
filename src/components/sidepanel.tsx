import { OutboundLink } from "gatsby-plugin-google-gtag"
import * as React from "react"
import { useContext } from "react"
import Switch from "react-switch"
import { SidePanelContext, SidePanelType } from "../context/SidePanelContext"
import ArrowbicsImage from "../images/arrowbics.png"
import PFP from "../images/pfp4.jpeg"
import PFPNotion from "../images/pfpNotion.png"
import RR from "../images/rankedrecords.jpg"

import "../styles/sidepanel.css"

interface CurrentSideQuestsProps {
	forHome?: boolean
}

const CurrentSideQuests: React.FC<CurrentSideQuestsProps> = ({
	forHome = true,
}) => {
	return (
		<>
			{!forHome && (
				<>
					<span className="list-indent">
						🧶 I'm crocheting bolero sleeves.
					</span>
					<span className="list-indent">
						🪡 I'm learning how to needle-felt by making a chicken.
					</span>
					<span className="list-indent">
						⛸️ I'm trying to do backwards crossovers and lunges
						while skating.
					</span>
					<span className="list-indent">
						🥑 I'm experimenting with toppings to add to avocado
						toast. Lately it's been a combination of olive oil,
						lemon juice, chili powder, and grated cheese.
					</span>
					<span className="list-indent">
						🪜 I'm in the early stages of translating a diary piece
						into a short interactive online story.
					</span>
					<span className="list-indent">
						💻 I'm doing web development for{" "}
						<OutboundLink
							target="_blank"
							href="https://www.uwwistem.com/"
							className="outboundLink"
						>
							UW WiSTEM
						</OutboundLink>
						{" and "}
						<OutboundLink
							target="_blank"
							href="https://www.instagram.com/uw_ux/"
							className="outboundLink"
						>
							UW/UX
						</OutboundLink>
						.
					</span>
				</>
			)}
			<span className="list-indent">
				🧋 {!forHome ? "I'm building a" : "My latest code project is"} a
				boba discount tracker for Waterloo,{" "}
				<OutboundLink
					target="_blank"
					href="https://so-boba-after.web.app/"
					className="outboundLink"
				>
					...so, boba after?
				</OutboundLink>
			</span>
			<span className="list-indent">
				💸 I've recently taken an interest in event organizing,
				logistics and finances, and am the VP Finance for the{" "}
				<OutboundLink
					href="https://www.instagram.com/uwsesoc/"
					target="_blank"
					className="outboundLink"
				>
					Software Engineering Society
				</OutboundLink>{" "}
				at Waterloo this winter.
			</span>
			<span className="list-indent">
				🎓 Finally, I'm leading a wonderful team to build our university
				program cohort's class profile, which will be releasing in April
				2025.
			</span>
		</>
	)
}

const AboutMeSidePanel = () => {
	// Unchecked = Notion Avatar, Checked = Photo
	const [checked, setChecked] = React.useState(false)

	const handleChange = (nextChecked: boolean) => {
		setChecked(nextChecked)
	}

	return (
		<div className="sidePanel-content">
			<h2>About Me</h2>
			{checked ? (
				<img
					src={PFP}
					className="pfp"
				/>
			) : (
				<img
					src={PFPNotion}
					className="pfpNotion"
				/>
			)}
			<div id="pfpSwitcher">
				<div>Notion Avatar</div>
				<Switch
					onChange={handleChange}
					checked={checked}
					checkedIcon={false}
					uncheckedIcon={false}
					onColor="#C1783C"
					offColor="#000000"
				/>
				<div>A Real Photo</div>
			</div>
			<div className="sidePanel-content-divider" />
			<span>👋 Hi, I'm Hannah!</span>
			<span>
				I'm currently a 4th year Software Engineering student at the
				University of Waterloo.
			</span>
			<span>
				I like working on long-lasting high-impact projects (both with
				code and without) and learning along the way.
			</span>
			<CurrentSideQuests forHome={true} />
			<span>
				Professionally, I'll be returning to Notion as a SWE later this
				year, where I formally interned. I’m super excited to work on
				redefining software tools on the Internet - learn more about us{" "}
				<OutboundLink
					target="_blank"
					href="https://www.notion.so/about"
					className="outboundLink"
				>
					here
				</OutboundLink>
				!
			</span>
			<span>
				Previous to that, I also interned at Figma and Stripe (x2).
			</span>
		</div>
	)
}

const MyProjectsSidePanel = () => {
	return (
		<div className="sidePanel-content">
			<h2>My Projects</h2>
			<em>the code ones, specifically</em>
			<span>
				I tend to work on side projects in bursts - I'll tunnel-vision
				for a week or so to produce something out that I'm excited
				about, and then take a break for a while (... a long while).
				Here are a few of my favourites:
			</span>
			<div className="sidePanel-content-divider" />
			<h3>
				<OutboundLink
					target="_blank"
					href="https://so-boba-after.web.app/"
					className="outboundLink"
				>
					...so, boba after?
				</OutboundLink>{" "}
				| 2024
			</h3>
			<span>
				A boba discount tracker (for Waterloo specifically), inspired by
				many conversations with friends. I learned React Native for this
				and learned a lot about mobile UX along the way (APK coming
				soon...).
			</span>
			<iframe
				className="project-embed"
				height="400"
				width={window.innerWidth > 600 ? "600" : "300"}
				src="https://www.youtube.com/embed/Fs-VIzRi6lU"
				title="...so, boba after? demo"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen={true}
			/>
			<div className="sidePanel-content-divider" />
			<h3>
				<OutboundLink
					target="_blank"
					href="https://ranked-records.onrender.com/"
					className="outboundLink"
				>
					Ranked Records
				</OutboundLink>{" "}
				| 2022, 2023
			</h3>
			<span>
				A web tool that generates Spotify playlists with all an artist's
				songs - with various sort methods and filters. It also allows
				you to to include multiple artists on the same playlist.
			</span>
			<span>
				It still receives hundreds of users per year from around the
				world (including myself). I also get the occasional message from
				new and existing users.
			</span>
			<span>
				The hosted site might take a while to load, but this is my
				favorite project to date. There were two iterations of Ranked
				Records, and I learned so so much about product releases. I'd
				like to do a writeup one day...
			</span>
			<img
				src={RR}
				id="rankedRecordsImage"
			/>
			<span className="list-indent"></span>
			<div className="sidePanel-content-divider" />
			<h3>
				<OutboundLink
					target="_blank"
					href="https://cssi2020-culminating.glitch.me/"
					className="outboundLink"
				>
					Arrowbics
				</OutboundLink>{" "}
				| 2020
			</h3>
			<span>
				My final project during Google CSSI:Online. It's a fun mini-game
				inspired by one I used to play when I was little, called
				Fantage.
			</span>
			<span>
				I kind of forgot I made this, but Glitch has been hosting it
				this whole time so... you can still play it!
			</span>
			<img
				src={ArrowbicsImage}
				id="arrowbicsImage"
			/>
		</div>
	)
}

const MyWorkSidePanel = () => {
	return (
		<div className="sidePanel-content">
			<h2>My Work</h2>
			<span>
				My resume is the place to go to for the technical overview and
				impact of my internships - I wanted this to be a place to share
				a subset of other things I did during these times.
			</span>
			<div className="sidePanel-content-divider" />
			<h3>Notion | May 2024 - August 2024</h3>
			<span>
				I worked on the Collaboration team and shipped a feature that
				impacts every comment created in Notion.
			</span>
			<span className="list-indent">
				🤝 Did lots of cross-team collaboration (and started using the
				🤝 emoji way too much)
			</span>
			<span className="list-indent">
				⚠️ Caused an incident in my second week (and implemented the fix
				to prevent it from repeating in the future)
			</span>
			<span className="list-indent">
				🍓 Jammed with a product designer to shape the direction of my
				project
			</span>
			<span className="list-indent">
				👆 Felt it finally click that I'm a real SWE and not just an
				intern
			</span>
			<div className="sidePanel-content-divider" />
			<h3>Figma | January 2024 - April 2024</h3>
			<span>
				I worked on the Workflow team and shipped a handful of projects,
				both user-facing and internal.
			</span>
			<span className="list-indent">
				🔎 Learned a lot about investigating historical context behind
				features and design decisions, and finding the right people to
				talk to
			</span>
			<span className="list-indent">
				📝 Realized the importance of copywriting in software products
			</span>
			<span className="list-indent">
				🐛 Ran bug bashes and actively participated in the ones for
				other projects on my team
			</span>
			<span className="list-indent">
				🖊️ Worked with a product designer for the first time and
				realized just how much thought goes behind features that I take
				for granted as a user
			</span>
			<div className="sidePanel-content-divider" />
			<h3>Stripe | May 2023 - August 2023</h3>
			<span>
				I worked on the Queue Infrastructure team where I worked on
				improving internal developer tools.
			</span>
			<span className="list-indent">
				🚲 Got to quickly iterate on feedback because my users were in
				my Slack
			</span>
			<span className="list-indent">
				📝 Jumped into a completely seperate project for a while, wrote
				in programming languages I'd never touched before
			</span>
		</div>
	)
}

const SideQuestsSidePanel = () => {
	return (
		<div className="sidePanel-content">
			<h2>Side Quests</h2>
			<span>
				My main quest tends to be either academics or work, and I define
				a side quest as "things I'm working on apart from my main
				quest".
			</span>
			<span>As of February 2025:</span>
			<CurrentSideQuests forHome={false} />
		</div>
	)
}

export const SidePanel = React.forwardRef<HTMLDivElement>((props, ref) => {
	const { isOpen, handleSidePanelChange, panelID } =
		useContext(SidePanelContext)

	const choosePanelContent = (type: SidePanelType) => {
		switch (type) {
			case "about-me":
				return <AboutMeSidePanel />
			case "my-projects":
				return <MyProjectsSidePanel />
			case "my-work":
				return <MyWorkSidePanel />
			case "side-quests":
				return <SideQuestsSidePanel />
			default:
				return <div>Unknown Panel</div>
		}
	}

	const resetSidePanel = () => {
		handleSidePanelChange(panelID, "none")
	}

	return (
		<div
			ref={ref}
			className={`sidePanel ${
				isOpen ? "sidePanel-open" : "sidePanel-closed"
			}`}
		>
			<div className="sidePanel-header">
				<div
					className="close-sidePanel"
					role="button"
					tabIndex={0}
					onClick={resetSidePanel}
				/>
				{choosePanelContent(panelID)}
			</div>
		</div>
	)
})
