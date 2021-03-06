// Libraries
import * as React from "react";
import { PoolsidePlaylists } from "data/constants";
import MediaPlayer from "components/player/media-player";
import TopBar from "components/top-bar";
import Select from "components/select/select";
import PlayerVisualizer from "components/player/visualizer";
import PlayerController from "components/player/controller";
import { PlayerControllerContext } from "contexts/player-controller-context";

/**
 * @description Home page
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent}
 */
const Homepage: React.FunctionComponent = () => {
	const { currentIndex, onChangeOption, audio, status } = React.useContext(PlayerControllerContext);

	/**
	 * Renders the playlist visualizer component.
	 * It is based on the context state.
	 *
	 * @returns {JSX.Element}
	 */
	function renderPlayerVisualizer() {
		return <PlayerVisualizer status={status} audio={audio} />;
	}

	return (
		<>
			<TopBar />
			<main id="main-content" className="window__main row">
				<PlayerController>
					{renderPlayerVisualizer()}
					<Select
						id="channel"
						label="Channel:"
						placeholder="Choose a radio channel"
						options={PoolsidePlaylists}
						currentIndex={currentIndex}
						onChange={index => onChangeOption(index)}
					/>
					<MediaPlayer />
				</PlayerController>
			</main>
		</>
	);
};

export default React.memo(Homepage);
