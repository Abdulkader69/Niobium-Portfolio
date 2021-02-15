import React, { Component } from 'react';
import ask from '../../assets/images/icon-talk.png';
import askgif from '../../assets/images/icon-talk.gif';
import think from '../../assets/images/icon-think.png';
import thinkgif from '../../assets/images/icon-think.gif';
import design from '../../assets/images/icon-design.png';
import designgif from '../../assets/images/icon-design.gif';
import develop from '../../assets/images/icon-develop.png';
import developgif from '../../assets/images/icon-develop.gif';
import deploy from '../../assets/images/icon-deploy.png';
import deploygif from '../../assets/images/icon-deploy.gif';
import support from '../../assets/images/icon-support.png';
import supportgif from '../../assets/images/icon-support.gif';

import WDID from './../../components/02-WDID/index';

class Home extends Component {
    render() {
      return(
          <div className="ak-work-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ak-work-progress-headline ak-headline-wrap">
                            <h2 className="primary-headline">How I <span>Work?</span></h2>
                            <div className="ak-divider-inn"></div>
                        </div>
                        <div className="ak-work-progress-wrap">
                            <div className="ak-work-progress-items">
                                <div className="ak-work-progress-inner text-center">
                                    <span className="work-progress-icon">
                                        <img data-alt-src={askgif} src={ask} alt="Ask" />
                                    </span>
                                    <div className="work-progress-title">
                                        <h3><sup>1</sup>Ask</h3>
                                    </div>
                                    <div className="work-progress-content">
                                        <p>We start with a few simple questions. Through thoughtful consideration of your responses, we're able to craft the essential guidelines that will shape your brand's online experience.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ak-work-progress-items">
                                <div className="ak-work-progress-inner text-center">
                                    <span className="work-progress-icon">
                                        <img data-alt-src={thinkgif} src={think} alt="Think" />
                                    </span>
                                    <div className="work-progress-title">
                                        <h3><sup>2</sup>Think</h3>
                                    </div>
                                    <div className="work-progress-content">
                                        <p>We're solution oriented people - what others call problems, we see as challenges and opportunities. We find innovative solutions through creative thinking and open feedback loops. We keep it real - we'll promise to always tell you the truth, and that your feedback will never hurt our feelings.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ak-work-progress-items">
                                <div className="ak-work-progress-inner text-center">
                                    <span className="work-progress-icon">
                                        <img data-alt-src={designgif} src={design} alt="Design" />
                                    </span>
                                    <div className="work-progress-title">
                                        <h3><sup>3</sup>Design</h3>
                                    </div>
                                    <div className="work-progress-content">
                                        <p>We make data-driven decisions about UX while innovating every step of the way. From mobile to tablet to full wall projections, our digital creations are designed to make an impact on any sized screen.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ak-work-progress-items">
                                <div className="ak-work-progress-inner text-center">
                                    <span className="work-progress-icon">
                                        <img data-alt-src={developgif} src={develop} alt="Develop" />
                                    </span>
                                    <div className="work-progress-title">
                                        <h3><sup>4</sup>Develop</h3>
                                    </div>
                                    <div className="work-progress-content">
                                        <p>Our engineers are artists - they can breathe life into designs and make websites move in ways you never thought possible. The products and platforms we develop are modular, so they can easily evolve over time, extending their life cycle in an ever-changing digital landscape.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ak-work-progress-items">
                                <div className="ak-work-progress-inner text-center">
                                    <span className="work-progress-icon">
                                        <img data-alt-src={deploygif} src={deploy} alt="Deploy" />
                                    </span>
                                    <div className="work-progress-title">
                                        <h3><sup>5</sup>Deploy</h3>
                                    </div>
                                    <div className="work-progress-content">
                                        <p>Our rigorous and thorough quality assurance process ensures that every product we deploy has been extensively road-tested and is ready to go. We kill more bugs than a Coney Island Superintendent. [Fact.]</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ak-work-progress-items">
                                <div className="ak-work-progress-inner text-center">
                                    <span className="work-progress-icon">
                                        <img data-alt-src={supportgif} src={support} alt="Support" />
                                    </span>
                                    <div className="work-progress-title">
                                        <h3><sup>6</sup>Support</h3>
                                    </div>
                                    <div className="work-progress-content">
                                        <p>We're here to help you. Reach out to us anytime, for anything you need. Ongoing technical support is part of the deal, so you can focus on growing your business—worry-free.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      )
    }
  }
  export default Home;