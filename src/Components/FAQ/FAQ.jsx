import React from 'react'
import '../FAQ/FAQ.css'

function FAQ() {
  return (
    <div className='Faq-container'>
        <h2>Frequently Asked Questions?</h2>
        <div className="tab">
            <input type="radio" name='acc' id='acc1' />
            <label htmlFor="acc1">
                <h2>01</h2>
                <h3>How to I apply?</h3>
            </label>
            <div className="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non in nobis ratione, corrupti magni dignissimos possimus saepe repellat sit optio temporibus assumenda voluptatem quae reiciendis dolorem veniam architecto mollitia aut.</p>
            </div>
        </div>
        <div className="tab">
            <input type="radio" name='acc' id='acc2' />
            <label htmlFor="acc2">
                <h2>02</h2>
                <h3>How to I apply?</h3>
            </label>
            <div className="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non in nobis ratione, corrupti magni dignissimos possimus saepe repellat sit optio temporibus assumenda voluptatem quae reiciendis dolorem veniam architecto mollitia aut.</p>
            </div>
        </div>
        <div className="tab">
            <input type="radio" name='acc' id='acc3' />
            <label htmlFor="acc3">
                <h2>03</h2>
                <h3>How to I apply?</h3>
            </label>
            <div className="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non in nobis ratione, corrupti magni dignissimos possimus saepe repellat sit optio temporibus assumenda voluptatem quae reiciendis dolorem veniam architecto mollitia aut.</p>
            </div>
        </div>
        <div className="tab">
            <input type="radio" name='acc' id='acc4' />
            <label htmlFor="acc4">
                <h2>04</h2>
                <h3>How to I apply?</h3>
            </label>
            <div className="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non in nobis ratione, corrupti magni dignissimos possimus saepe repellat sit optio temporibus assumenda voluptatem quae reiciendis dolorem veniam architecto mollitia aut.</p>
            </div>
        </div>
      
    </div>
  )
}

export default FAQ
