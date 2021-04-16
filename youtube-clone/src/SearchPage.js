import React from 'react';
import ChannelRow from './ChannelRow.js';
import VideoRow from './VideoRow.js';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import './SearchPage.css';

function SearchPage() {
    return (
        <div className="searchPage">
          <div className="searchPage_filter"> 
            <TuneOutlinedIcon />
            <h2>Filter</h2>
          </div>
          <hr />
          <ChannelRow 
          image="https://i.pinimg.com/originals/91/bf/8a/91bf8a9d2e76ad5861391cbdad9ff629.jpg"
          channel="fallenINSIDER"
          verified
          subs="660K"
          noOfVideos={392}
          description="PRO Player of CSGO. 5x Champion PRO Player of CSGO. 5x Champion PRO Player of CSGO. 5x Champion PRO Player of CSGO. 5x Champion "
          />

          <hr />

          <VideoRow
          views="1.4M"
          subs="659K"
          description="Do you want a FREE knife?"
          timestamp="59 seconds ago"
          channel="fallenINSIDER"
          title="Let's play de game"
          image = "https://i.pinimg.com/originals/91/bf/8a/91bf8a9d2e76ad5861391cbdad9ff629.jpg"
          />

          <VideoRow
          views="1.4M"
          subs="659K"
          description="Do you want a FREE knife?"
          timestamp="59 seconds ago"
          channel="fallenINSIDER"
          title="Let's play de game"
          image = "https://i.pinimg.com/originals/91/bf/8a/91bf8a9d2e76ad5861391cbdad9ff629.jpg"
          />

          <VideoRow
          views="1.4M"
          subs="659K"
          description="Do you want a FREE knife?"
          timestamp="59 seconds ago"
          channel="fallenINSIDER"
          title="Let's play de game"
          image = "https://i.pinimg.com/originals/91/bf/8a/91bf8a9d2e76ad5861391cbdad9ff629.jpg"
          />

          <VideoRow
          views="1.4M"
          subs="659K"
          description="Do you want a FREE knife?"
          timestamp="59 seconds ago"
          channel="fallenINSIDER"
          title="Let's play de game"
          image = "https://i.pinimg.com/originals/91/bf/8a/91bf8a9d2e76ad5861391cbdad9ff629.jpg"
          />

          <VideoRow
          views="1.4M"
          subs="659K"
          description="Do you want a FREE knife?"
          timestamp="59 seconds ago"
          channel="fallenINSIDER"
          title="Let's play de game"
          image = "https://i.pinimg.com/originals/91/bf/8a/91bf8a9d2e76ad5861391cbdad9ff629.jpg"
          />
        </div>
    )
}

export default SearchPage;
