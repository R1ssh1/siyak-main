
import React from 'react';
import Slider from '../components/Slider';
import FeaturedProducts from '../components/FeaturedProducts';
import Industries from '../components/Industries';

export default function Home() {
  return (
    <>
      <Slider />
      <div dangerouslySetInnerHTML={{ __html: `

<section class="page-content background-black">
    <div class="container">
        <div class="row">
            <article class="grid_12">
                <div class="triggerAnimation animated" data-animate="fadeInUp">
                    <div class="note no-bottom-margin">
                        <h5>Exporters of Steel with huge stocks &mdash; Siyak Steel became one of the most reliable source.</h5>
<h2 style="color:#000; font-weight:600;">&quot;Steel is not our Business, its our Tradition&quot;</h2>
                    </div>
                </div>
            </article>
        </div>
    </div>
</section>

<div class="clrspace"></div>

<section class="page-content">
<div class="container">
<div class="row">
<div class="grid_12"><div class="heading-bordered"><h3>WHY US</h3></div>
</div>
<div class="grid_3"><img src="img/why-us-th.jpg" alt="Why Us" title="Why Us"></div>
<div class="grid_9"><p>At Siyak Steel International, we are completely focused in our approach and it reflects in our business process. Due to our committed approach, we are highly trusted by our clients. It has further helped us to achieve a respectful position among our competitors.<br><br>
Siyak Steel International is a young, dynamic company which began trading in steel products and quickly established itself as a leader on the National &amp; International markets through its two primary strategies namely: Total quality &amp; Flexibility. Any size of order at a competitive price in all types of steel including Nickel Alloys, Stainless steel, Carbon steel, Alloy steel, Exotic materials like Duplex, Super Duplex, SMO and other alloys demonstrates our flexibility. Adherence to customer&apos;s delivery needs and technical specifications demonstrates our total quality.</p>
<a href="about-us.php" class=" button btn-medium black" style="float:right">read more</a></div>
</div>
<div class="clear"></div>

<section class="page-content parallax ">
    <div class="container">
        <div class="row">
            <section class="grid_12">
                <div class="box-pro1" style="background:#005d65">
<div class="bphead">OUR SPECIAL PRODUCTS</div>
</div>
            </section>
        </div>
<br><br>
        <div class="grid_12">
        <div class="row">
            <article class="grid_4">
                <a href="cladded-plates.php"><img src="img/cladded-plates.jpg" alt="Cladded Plates Supplier" title="Cladded Plates Manufacturer"></a>
            </article>
            <article class="grid_4">
                <a href="/nickel-alloy-catalogue" target="_blank"><img src="img/nickel-alloy-products.jpg" alt="Nickel Alloy Products" title="Nickel Alloy Products Exporter"></a>
            </article>
            <article class="grid_4 right">
               <a href="tube-sheet.php"><img src="img/tube-sheet.jpg" alt="Tube Sheet Supplier" title="Tube Sheet Supplier"></a>
            </article>
        </div>
    </div>
    </div>
</section>

</div>
</section>

<a href="https://wa.me/919833461810?text=I%20want%20to%20enquire%20about" class="float" target="_blank">
   <i class="fa-brands fa-whatsapp"></i>
</a>

` }} />
      <FeaturedProducts />
      <Industries />
    </>
  );
}
