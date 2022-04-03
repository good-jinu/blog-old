import React from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import { Link } from 'react-router-dom';
import shuffle from '../jslib/Shuffle';
import './CSS/Club.css';

class Club extends React.Component {
    constructor(props) {
        super(props);
        this.handlePass = this.handlePass.bind(this);
        this.whenMusicEnds = this.whenMusicEnds.bind(this);
        this.state ={
            main_box: (
                <div>
                    <input id="pwforclub" type="password" name="pw" placeholder="Password"/>
                    <button onClick={this.handlePass}>Pass</button>
                </div>
            ),
            img_box: null,
            playlist: null,
            current_track_num: null
        };
    }

    handlePass(e) {
        const pw_target = document.getElementById("pwforclub");
        axios.get('https://raw.githubusercontent.com/good-jinu/good-jinu/main/privateEnc/certifypw.txt')
        .then((res) => {
            var bytes = CryptoJS.AES.decrypt(res.data,pw_target.value);
            var dec = bytes.toString(CryptoJS.enc.Utf8);
            if(dec === '0YouPassedMyClub!0')
            {
                axios.get("https://raw.githubusercontent.com/good-jinu/good-jinu/main/privateEnc/cllst.aesenc")
                .then((res0)=>{
                    var bytes0 = CryptoJS.AES.decrypt(res0.data,pw_target.value);
                    var dec0 = shuffle(JSON.parse(bytes0.toString(CryptoJS.enc.Utf8)));
                    this.setState({
                        main_box: (
                            <audio autoPlay src={dec0[0]} preload="auto" type="audio/mpeg" onEnded={this.whenMusicEnds}/>
                        ),
                        img_box: (
                            <img src="https://i.giphy.com/media/MZ6YXwBmYRY1W/giphy.webp" alt="dancing"/>
                        ),
                        playlist: dec0,
                        current_track_num: 0
                    });
                })
                .catch((err)=>{
                    console.error(err);
                });
            }
            else {
                console.error('failed!');
            }
        })
        .catch((err)=>{
            console.error(err);
        });
    }

    whenMusicEnds(e) {
        var newi = this.state.current_track_num+1
        if(newi>=this.state.playlist.length)
        {
            this.setState({
                main_box: (
                    <audio autoPlay src={this.state.playlist[0]} preload="auto" type="audio/mpeg" onEnded={this.whenMusicEnds}/>
                ),
                current_track_num: 0
            });
        }
        else
        {
            this.setState({
                main_box: (
                    <audio autoPlay src={this.state.playlist[newi]} preload="auto" type="audio/mpeg" onEnded={this.whenMusicEnds}/>
                ),
                current_track_num: newi
            });
        }
    }

    render() {
        return (
            <section id="club_section">
                <article className="close responsive-font">
                    <h1><Link to="/">&times;</Link></h1>
                </article>
                <article className="main_stage">
                    {this.state.main_box}
                    {this.state.img_box}
                </article>
            </section>
        );
    }
}

export default Club;