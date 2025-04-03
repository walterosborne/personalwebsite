import React, { useEffect, useState } from "react"
import Navbar from './Navbar.jsx';
import './Styles/styles.css'
import './Styles/box.css'
import './Styles/Finance.css'
import { Link } from 'react-router-dom';


const FinanceHandbook = () => {

    const [ccview, setCcview] = useState('See Less');
    const [invview, setInvview] = useState('See Less');
    const [fidview, setFidview] = useState('See Less');
    const [mode, setMode] = useState('Easy');

    useEffect(() => {
        const seemore = document.getElementById('ccinfoseemore')
        const ccinfo = document.getElementById('ccinfo')
        seemore.addEventListener("click", function () {
            if (ccview == 'See Less') {
                ccinfo.classList.add('fullsize');
                seemore.textContent = 'See Less'
                setCcview('See More')
            }
            if (ccview == 'See More') {
                ccinfo.classList.remove('fullsize');
                seemore.textContent = 'See More'
                setCcview('See Less')
            }
        })
    })
    useEffect(() => {
        const invseemore = document.getElementById('invinfoseemore')
        const invinfo = document.getElementById('invinfo')
        invseemore.addEventListener("click", function () {
            if (invview == 'See Less') {
                invinfo.classList.add('fullsize');
                invseemore.textContent = 'See Less'
                setInvview('See More')
            }
            if (invview == 'See More') {
                invinfo.classList.remove('fullsize');
                invseemore.textContent = 'See More'
                setInvview('See Less')
            }
        })
    })
    useEffect(() => {
        const fidseemore = document.getElementById('fidseemore')
        const fidinfo = document.getElementById('fidinfo')
        fidseemore.addEventListener("click", function () {
            if (fidview == 'See Less') {
                fidinfo.classList.add('fullsize');
                fidseemore.textContent = 'See Less'
                setFidview('See More')
            }
            if (fidview == 'See More') {
                fidinfo.classList.remove('fullsize');
                fidseemore.textContent = 'See More'
                setFidview('See Less')
            }
        })
    })

    useEffect(() => {

        let experienced = document.querySelector('.experienced');
        let pro = document.querySelector('.pro');
        if (mode == 'Easy') {
            console.log('easy')
            experienced.classList.remove('show');
            pro.classList.remove('show');
        }
        if (mode == 'Experienced') {
            console.log(experienced.classList)
            experienced.classList.add('show');
            pro.classList.remove('show');
        }
        if (mode == 'Pro') {
            experienced.classList.add('show');
            pro.classList.add('show');
        }
    }, [mode]/*Runs on change in mode*/);

    const ModeSelect = (event) => {
        setMode(event.target.value)
    };

    return (
        <>
            <Navbar></Navbar>
            <img className='bg' src='/Images/meandmike.png' alt="Background" />
            <div className="scrollable">
                <div className="col">
                    <div className="rowbox">
                        <div className="col">
                            <h1>Walt's Finance Handbook</h1>
                            <p style={{ fontSize: 'small', fontStyle: 'italic' }}>I am not a qualified licensed investment advisor, and the following are strictly my opinions.</p>
                            <h6>A lot of people seem interested in how I do my finances, and every time I try to refer them to resources I realize they assume a lot of previous knowledge and intimidate people. So, here's my foolproof outline of how to get the most out of your finances based on what I do.</h6>
                        </div>
                        <div className="col">
                            <h4>Mode</h4>
                            <select name="Medium" id="medium" onChange={ModeSelect}>
                                <option value={'Easy'}>Easy</option>
                                <option value={'Experienced'}>Experienced</option>
                                <option value={'Pro'}>Pro</option>
                            </select>
                        </div>

                    </div>
                    <div className="colbox">
                        <h2>Credit Cards</h2>
                        <p id="ccinfo">Credit cards are important in building credit, and can also provide great perks to save money. Building credit is important because when you buy something like a house, you'll likely have to take out a loan, which is when the bank gives you a large sum of money and you back it back monthly over a long time with additional fees called interest. That interest fee is a percent of your payment, and with a higher credit score you can get lower percents, which means with an average priced home a great credit score could save you $50-100k.
                            Your credit score is based on 6 factors, which
                            opening a credit card can significantly improve the statistics of as long as you always pay your bills. It's a good idea to keep cards with no fees around forever, as they increase the age of your credit.
                        </p>
                        <h5 id="ccinfoseemore" style={{ textDecoration: 'underline' }}>See more</h5>
                        <div className="col">
                            <h3>The Basics</h3>
                            <div className="row">
                                <div className="innerrowbox">
                                    <img src="/Images/disc.png" alt="" />
                                    <span>
                                        <h2>Discover It</h2>
                                        <p>This card should be first; they'll accept anyone with no credit history and their cashback categories are usually very helpful; restaurants, groceries, etc. </p>

                                        <ul>
                                            <li><a href="https://www.discover.com/credit-cards/cash-back/cashback-calendar.html" target="_blank">5% Cashback Categories</a></li>
                                            <li>1% cashback overall</li>
                                            <li>Double cashback for your first year</li>
                                            <li>No annual fee</li>
                                            <li>Keep forever</li>
                                            <form action="https://refer.discover.com/willow30850!5043362166!a" target="_blank">
                                                <input type="submit" value="Referral Link" style={{ backgroundColor: 'orange' }} />
                                            </form>
                                        </ul>
                                    </span>
                                </div>
                                <div className="innerrowbox">
                                    <img src="/Images/citidc.png" alt="" />
                                    <span>
                                        <span>
                                            <h2>Citi Double Cash</h2>
                                            <p>I recomending this one too for after you've had the Discover It for a year because of the 2% back on everything and wider acceptance of Visa. I chose Citi because of the $200 bonus, but really any card like this will work, including the <a href="https://www.fidelity.com/spend-save/visa-signature-card" target="_blank">Fidelity Signature,</a><a href="https://creditcards.wellsfargo.com/cards/active-cash-credit-card/" target="_blank"> Wells Fargo Active Cash,</a>
                                                and Apple Card. Somehow none of these have referrals though so choose whichever you want.</p>
                                        </span>
                                        <ul>
                                            <li>2% cashback on everything</li>
                                            <li>$200 bonus</li>
                                            <li>No annual fee</li>
                                            <li>Keep forever</li>
                                            <form action="https://www.citi.com/usc/LPACA/Citi/Cards/DoubleCash/ps_A/" target="_blank">
                                                <input type="submit" value="Link" style={{ backgroundColor: 'green' }} />
                                            </form>
                                        </ul>
                                    </span>
                                </div>
                            </div>
                            <p>TL;DR Between these two you should be able build credit and get some decent rewards while never paying a fee.</p>

                        </div>
                        <div className="experienced">
                            <div className="col">
                                <h3>More Credit Cards</h3>
                                <p>These cards can be used to accrue bonuses and additonal cashback categories, but don't require fiddling around with rewards points and have no/minimal fees.
                                    If you've had the first two cards at least a year with no late payments you should easily be approved for them all. The cashback is really only a small percent of your spending; the really profitable move would be opening one of these up every couple months for the bonus.</p>

                                <div className="row">
                                    <div className="innerrowbox">
                                        <img src="/Images/freeflex.png" alt="" />
                                        <span>
                                            <h2>Chase Freedom Flex</h2>
                                            <p>This should probably be your third card; it'll give you more 5% categories and has a good bonus</p>

                                            <ul>
                                                <li><a href="https://www.cnbc.com/select/chase-freedom-cash-back-calendar/" target="_blank">5% Cashback Categories</a></li>
                                                <li>Always 3% at restuarants and drugstores</li>
                                                <li>1% cashback overall</li>
                                                <li>No annual fee</li>
                                                <li>Keep forever</li>
                                                <form action="https://www.referyourchasecard.com/18J/A885MWUU3I" target="_blank">
                                                    <input type="submit" value="Referral Link" style={{ backgroundColor: 'skyblue' }} />
                                                </form>
                                            </ul>
                                        </span>
                                    </div>
                                    <div className="innerrowbox">
                                        <img src="/Images/cashplus.png" alt="" />
                                        <span>
                                            <span>
                                                <h2>US Bank Cash+</h2>
                                                <p>One of my personal favorites, you get to choose the cashback every quarter, and it has a good bonus.</p>
                                            </span>
                                            <ul>
                                                <li>5% cashback on two categories you choose</li>
                                                <li>2% cashback on one category you choose</li>
                                                <li>$200 bonus</li>
                                                <li>No annual fee</li>
                                                <li>Keep forever</li>
                                                <form action="https://www.amazon.com/dp/BT00LN946S?externalReferenceId=2e82b88f-b9ff-487f-8070-83ae8c59d39d" target="_blank">
                                                    <input type="submit" value="Link" style={{ backgroundColor: 'white' }} />
                                                </form>
                                            </ul>
                                        </span>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="innerrowbox">
                                        <img src="/Images/prime.png" alt="" />
                                        <span>
                                            <span>
                                                <h2>Amazon Visa</h2>
                                                <p>This is helpful for getting 5% off on Amazon forever, as well as Whole Foods, with a good bonus.</p>
                                            </span>
                                            <ul>
                                                <li>5% cashback on Amazon and Whole Foods</li>
                                                <li>2% cashback at Restaurants and Gas Stations</li>
                                                <li>$200 bonus</li>
                                                <li>No annual fee</li>
                                                <li>Keep forever</li>
                                                <form action="https://www.amazon.com/dp/BT00LN946S?externalReferenceId=2e82b88f-b9ff-487f-8070-83ae8c59d39d" target="_blank">
                                                    <input type="submit" value="Referral Link" style={{ backgroundColor: 'navy', color: 'white' }} />
                                                </form>
                                            </ul>
                                        </span>
                                    </div>
                                    <div className="innerrowbox">
                                        <img src="/Images/savor.png" alt="" />
                                        <span>
                                            <span>
                                                <h2>Savor One</h2>
                                                <p>You'll get nice cashback on both dining and restuarants, with a good bonus.</p>
                                            </span>
                                            <ul>
                                                <li>3% cashback on dining and groceries</li>
                                                <li>$200 bonus</li>
                                                <li>No annual fee</li>
                                                <li>No foreign transaction fees</li>
                                                <li>Keep forever</li>
                                                <form action="https://www.amazon.com/dp/BT00LN946S?externalReferenceId=2e82b88f-b9ff-487f-8070-83ae8c59d39d" target="_blank">
                                                    <input type="submit" value="Link" style={{ backgroundColor: 'orange' }} />
                                                </form>
                                            </ul>
                                        </span>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="pro">
                            <div className="col">
                                <h3>Travel Cards</h3>
                                <p>The final boss; these cards provide lucrative bonuses of thousands of dollars worth of travel, but require extra effort, income, and credit scores to achieve.</p>
                                <p>This section will developed more, but currently I'd recomend the Amex Platinum/Gold series, which will give you points that can be redeemed through Delta or British airways, the Amtrak card if it goes back up to 40k points because this can buy you 10-20 round trips on the east coast, and the IHG Premier card for 175k points, which is enough for at least 5 nights at their lower range hotels but this can be extended to 8 between the 3 nights for 4 bonus and anniversary night. I'd say all but the amtrak card are not worth keeping after a year because of the annual fee.</p>

                            </div>
                        </div>
                    </div>
                    <div className="colbox">
                        <h2>Investing</h2>
                        <p id="invinfo"> Investing is a very easy way to make sure your money grows in value. Money that is sitting in cash is not only not growing, but is decreasing in value with factors like inflation. Investing may make some nervous,
                            but with a long term approach it's very easy and reliable - the stock market has never had a 20 year period without growth even after The Great Depression, and the S&P 500 has averaged over a 10% return since its inception in 1957.
                        </p>
                        <h5 id="invinfoseemore" style={{ textDecoration: 'underline' }}>See more</h5>
                        <div className="row">
                            <img src="/Images/fidelity.png" alt="" />
                            <span>
                                <h2>Fidelity </h2>
                                <p id="fidinfo">For someone who wants the easiest experience possible, I recomend opening up two accounts at Fidelity, and splitting the money in them to buy two assets, which will both be index funds.
                                    Think of index funds like a scaled down version of all the companies included in the index they're capturing; instead of having to buy each companies stock, you instead buy one share of an index fund which will give you slices of each of the index's companies, with the size of the slice based on how large the comapny is.
                                    The two funds to buy are FZROX, which will act as a proportional slice of the entire stock market, and FNILX which tracks only large companies. These are what I use - feel free to research others if you want a different or more aggresive strategy.
                                </p>
                                <h5 id="fidseemore" style={{ textDecoration: 'underline' }}>See more</h5>
                                <div className="row">
                                    <div className="innercolbox">
                                        <h3><a href="https://www.fidelity.com/retirement-ira/roth-ira" target="_blank">Roth IRA</a></h3>
                                        <ul>
                                            <li>Maximum Contribution of $7000/year (2025; goes up by $500 with inflation every couple years)</li>
                                            <li>All the money can be withdrawn at 59.5 years old, or later, with no taxes paid on earnings.</li>
                                            <li>The initial money you put in (the principal) can also be withdrawn without paying taxes at any age; any earnings (stock growth) from that contribution will be taxed like a regular stock if you take it out before 59.5.</li>
                                            <li>7% growth (which is pretty conservative) with $7000 in contributions for 35 years will make you a tax-free millionaire on $245k invested. It's just an absurdly good deal.</li>
                                            <li>No fees</li>
                                        </ul>
                                    </div>
                                    <div className="innercolbox">
                                        <h3><a href="https://www.fidelity.com/spend-save/fidelity-cash-management-account/overview" target="_blank">Cash Management</a></h3>
                                        <ul>
                                            <li>This is just a normal investment account if you want to save more than $7000 a year or just want to buy stock without thinking of timelines.</li>
                                            <li>When you sell stock, you pay capital gains tax;<a href="https://www.nerdwallet.com/article/taxes/capital-gains-tax-rates"> it's a little complicated and the rates depend on your income and how long you hold the stock,</a>
                                                but the basic idea is this; if you invest $100, sell it when it gets to $120, and pay 20% in capital gains, you'll pay $4 on the $20 increase.</li>
                                            <li>No fees</li>
                                        </ul>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default FinanceHandbook
