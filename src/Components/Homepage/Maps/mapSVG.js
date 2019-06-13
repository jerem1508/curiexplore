import React from 'react';
import PropTypes from 'prop-types';

const SVG = props => (
  <svg
    width={props.width}
    style={props.style}
    height={props.height}
    className={props.className || ''}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g id="admin0">
      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="GL" d="M283.1,53.0 L286.9,51.8 L287.6,53.3 L282.3,54.1 Z M302.9,17.0 L300.7,18.2 L299.0,17.4 L302.1,16.5 Z M230.8,54.3 L234.0,54.9 L236.4,56.2 L236.2,57.3 L233.8,57.5 L230.7,56.6 Z M250.3,7.3 L246.3,6.1 L243.5,4.1 L244.7,4.8 L247.3,4.6 L251.0,6.0 L250.4,7.3 L252.3,5.9 L248.4,4.2 L257.6,4.2 L248.6,3.7 L246.3,3.2 L247.9,2.6 L249.6,3.1 L250.5,2.2 L255.4,1.9 L259.5,2.3 L258.5,1.3 L261.7,2.2 L262.0,1.0 L265.7,0.5 L273.8,0.0 L277.4,0.2 L286.9,1.6 L286.1,2.1 L277.2,2.4 L269.1,3.5 L275.1,3.1 L278.4,2.5 L283.6,2.8 L287.8,2.3 L289.2,3.6 L292.7,4.0 L295.2,4.9 L293.1,6.2 L278.9,7.2 L273.3,8.6 L275.4,8.6 L282.9,7.5 L288.9,7.9 L288.8,8.8 L285.7,9.6 L285.5,10.5 L290.6,9.0 L291.7,7.7 L295.1,7.4 L295.4,10.1 L291.8,12.8 L294.0,12.3 L300.4,8.7 L303.4,9.8 L305.8,8.6 L309.4,8.7 L313.1,9.5 L314.3,10.3 L310.5,12.3 L308.2,12.5 L308.7,13.4 L306.6,14.0 L303.4,13.9 L305.8,15.1 L304.6,15.9 L300.1,16.4 L297.1,17.4 L299.3,18.1 L298.6,19.5 L299.8,20.6 L297.9,21.1 L298.9,22.4 L296.9,21.8 L294.8,25.8 L299.0,25.8 L299.0,26.5 L301.8,26.9 L299.0,27.4 L296.2,26.8 L296.9,27.9 L301.0,28.7 L300.2,31.5 L299.6,30.2 L296.8,29.7 L294.5,30.9 L294.5,32.5 L297.9,32.5 L299.0,35.8 L302.8,37.3 L300.8,37.4 L299.0,40.2 L295.3,40.9 L296.7,43.2 L294.8,43.1 L293.3,44.0 L290.1,42.7 L286.0,44.0 L287.0,44.3 L286.8,44.2 L289.2,43.3 L292.2,44.8 L294.1,46.1 L292.1,45.7 L294.0,47.1 L293.5,48.1 L289.7,46.6 L289.2,45.5 L290.7,45.5 L289.1,45.3 L288.2,44.8 L289.1,47.0 L293.0,48.9 L291.9,49.6 L294.3,51.1 L294.9,53.7 L291.4,54.0 L289.6,51.8 L286.5,50.1 L287.1,51.4 L282.6,52.5 L282.0,54.3 L284.9,53.9 L282.6,55.2 L283.8,55.6 L287.6,54.1 L291.0,55.2 L293.2,55.2 L291.6,56.7 L289.9,57.2 L285.7,60.0 L282.4,60.4 L279.8,61.6 L274.8,62.1 L272.2,63.7 L272.3,64.6 L269.7,67.6 L266.4,69.3 L263.5,70.1 L263.3,68.0 L262.3,69.8 L259.2,70.5 L260.4,70.9 L258.5,72.4 L258.5,75.8 L255.5,79.0 L253.6,78.9 L255.1,80.1 L254.0,85.1 L252.9,85.5 L253.4,86.8 L251.7,87.4 L249.1,86.3 L248.0,84.8 L243.7,84.4 L244.7,83.9 L242.3,83.2 L241.6,80.6 L239.7,79.6 L240.0,78.2 L238.4,77.5 L237.3,76.0 L237.8,72.7 L236.3,74.6 L236.4,72.0 L235.1,69.6 L234.1,69.8 L233.3,67.2 L235.9,65.8 L232.7,65.3 L234.2,61.6 L236.6,62.1 L234.1,60.9 L238.1,60.4 L238.7,56.8 L237.5,55.7 L232.9,54.2 L231.5,53.1 L235.6,53.1 L237.3,54.1 L238.6,53.3 L236.7,53.1 L236.8,51.8 L233.8,51.5 L235.3,49.6 L232.7,50.5 L230.1,50.7 L229.0,49.7 L229.8,48.0 L229.4,44.7 L230.2,43.5 L228.6,42.8 L229.3,41.8 L228.0,40.9 L228.5,39.8 L226.7,37.7 L224.6,37.1 L223.7,35.9 L224.1,34.6 L219.4,32.9 L214.4,32.0 L213.4,33.0 L209.2,32.4 L208.7,33.7 L204.9,33.2 L201.9,31.3 L203.2,30.7 L199.4,29.5 L200.2,27.6 L202.9,26.7 L199.4,26.4 L196.4,24.8 L197.0,23.2 L203.2,22.0 L205.7,20.9 L209.7,20.8 L211.8,19.0 L211.4,16.8 L207.6,16.6 L206.8,15.4 L208.5,14.1 L210.5,13.9 L211.9,12.5 L215.4,11.4 L218.1,12.1 L219.6,10.1 L218.3,9.0 L223.8,7.3 L231.8,6.1 L233.5,7.3 L233.0,9.9 L234.7,8.4 L233.9,6.6 L237.9,7.8 L236.2,7.8 L239.7,9.1 L238.3,8.0 L241.3,8.1 L239.2,7.1 L238.2,5.4 L242.2,5.7 L247.9,7.6 L249.6,8.8 L251.3,8.5 L250.0,7.6 Z">
        <desc xmlns="http://www.highcharts.com/svg/namespace">
          <name>Greenland</name>
          <labelrank>3</labelrank>
          <country-abbrev>Grlnd.</country-abbrev>
          <subregion>Northern America</subregion>
          <region-wb>Europe &amp; Central Asia</region-wb>
          <iso-a3>GRL</iso-a3>
          <iso-a2>GL</iso-a2>
          <woe-id>23424828</woe-id>
          <continent>North America</continent>
          <hc-middle-x>0.56</hc-middle-x>
          <hc-middle-y>0.41</hc-middle-y>
          <hc-key>gl</hc-key>
          <hc-a2>GL</hc-a2>
        </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="SH" d="M561.8,188.7 L561.8,188.7 L561.8,188.7 L561.8,188.7 Z">
        <desc xmlns="http://www.highcharts.com/svg/namespace">
          <name>Scarborough Reef</name>
          <labelrank>6</labelrank>
          <country-abbrev>S.R.</country-abbrev>
          <subregion>South-Eastern Asia</subregion>
          <region-wb>East Asia &amp; Pacific</region-wb>
          <iso-a3>-99</iso-a3>
          <iso-a2>SH</iso-a2>
          <woe-id>-99</woe-id>
          <continent>Asia</continent>
          <hc-middle-x>0.54</hc-middle-x>
          <hc-middle-y>0.51</hc-middle-y>
          <hc-key>sh</hc-key>
          <hc-a2>SH</hc-a2>
        </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="BU" d="M182.8,187.5 L182.8,187.5 L182.8,187.5 L182.8,187.5 Z">
        <desc xmlns="http://www.highcharts.com/svg/namespace">
          <name>Bajo Nuevo Bank (Petrel Is.)</name>
          <labelrank>8</labelrank>
          <country-abbrev>NULL</country-abbrev>
          <subregion>Caribbean</subregion>
          <region-wb>Latin America &amp; Caribbean</region-wb>
          <iso-a3>-99</iso-a3>
          <iso-a2>BU</iso-a2>
          <woe-id>-99</woe-id>
          <continent>North America</continent>
          <hc-middle-x>0.49</hc-middle-x>
          <hc-middle-y>0.73</hc-middle-y>
          <hc-key>bu</hc-key>
          <hc-a2>BU</hc-a2>
        </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="LK" d="M489.4,199.4 L490.9,199.9 L492.9,203.3 L492.7,205.5 L490.6,206.5 L489.2,204.8 L488.9,202.5 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Sri Lanka</name>
        <labelrank>3</labelrank>
        <country-abbrev>Sri L.</country-abbrev>
        <subregion>Southern Asia</subregion>
        <region-wb>South Asia</region-wb>
        <iso-a3>LKA</iso-a3>
        <iso-a2>LK</iso-a2>
        <woe-id>23424778</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.76</hc-middle-x>
        <hc-middle-y>0.87</hc-middle-y>
        <hc-key>lk</hc-key>
        <hc-a2>LK</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="AS" d="M9.1,245.1 L9.0,245.2 L8.8,245.4 L8.7,245.3 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>American Samoa</name>
        <labelrank>4</labelrank>
        <country-abbrev>Am. Samoa</country-abbrev>
        <subregion>Polynesia</subregion>
        <region-wb>East Asia &amp; Pacific</region-wb>
        <iso-a3>ASM</iso-a3>
        <iso-a2>AS</iso-a2>
        <woe-id>23424746</woe-id>
        <continent>Oceania</continent>
        <hc-middle-x>0.56</hc-middle-x>
        <hc-middle-y>0.57</hc-middle-y>
        <hc-key>as</hc-key>
        <hc-a2>AS</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="DK" d="M359.4,100.8 L358.6,101.0 L357.1,98.7 L359.6,97.6 L360.4,99.0 Z M354.2,101.2 L353.0,100.9 L352.7,100.9 L351.7,96.5 L354.9,95.0 L356.4,93.2 L356.0,96.5 L356.9,100.5 L355.1,100.0 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Denmark</name>
        <labelrank>4</labelrank>
        <country-abbrev>Den.</country-abbrev>
        <subregion>Northern Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>DNK</iso-a3>
        <iso-a2>DK</iso-a2>
        <woe-id>23424796</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.29</hc-middle-x>
        <hc-middle-y>0.51</hc-middle-y>
        <hc-key>dk</hc-key>
        <hc-a2>DK</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="FO" d="M322.9,80.6 L323.4,80.4 L323.2,81.2 L322.2,80.5 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Faroe Islands</name>
        <labelrank>6</labelrank>
        <country-abbrev>Faeroe Is.</country-abbrev>
        <subregion>Northern Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>FRO</iso-a3>
        <iso-a2>FO</iso-a2>
        <woe-id>23424816</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.45</hc-middle-x>
        <hc-middle-y>0.27</hc-middle-y>
        <hc-key>fo</hc-key>
        <hc-a2>FO</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="GU" d="M613.7,192.0 L613.4,192.4 L613.4,192.1 L613.8,191.6 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Guam</name>
        <labelrank>6</labelrank>
        <country-abbrev>Guam</country-abbrev>
        <subregion>Micronesia</subregion>
        <region-wb>East Asia &amp; Pacific</region-wb>
        <iso-a3>GUM</iso-a3>
        <iso-a2>GU</iso-a2>
        <woe-id>23424832</woe-id>
        <continent>Oceania</continent>
        <hc-middle-x>0.42</hc-middle-x>
        <hc-middle-y>0.45</hc-middle-y>
        <hc-key>gu</hc-key>
        <hc-a2>GU</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="MP" d="M615.3,188.9 L615.4,188.6 L615.6,188.5 L615.5,188.8 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Northern Mariana Islands</name>
        <labelrank>6</labelrank>
        <country-abbrev>N.M.I.</country-abbrev>
        <subregion>Micronesia</subregion>
        <region-wb>East Asia &amp; Pacific</region-wb>
        <iso-a3>MNP</iso-a3>
        <iso-a2>MP</iso-a2>
        <woe-id>23424788</woe-id>
        <continent>Oceania</continent>
        <hc-middle-x>0.52</hc-middle-x>
        <hc-middle-y>0.50</hc-middle-y>
        <hc-key>mp</hc-key>
        <hc-a2>MP</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="PR" d="M211.0,182.6 L209.2,183.3 L207.5,183.3 L207.5,182.1 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Puerto Rico</name>
        <labelrank>5</labelrank>
        <country-abbrev>P.R.</country-abbrev>
        <subregion>Caribbean</subregion>
        <region-wb>Latin America &amp; Caribbean</region-wb>
        <iso-a3>PRI</iso-a3>
        <iso-a2>PR</iso-a2>
        <woe-id>23424935</woe-id>
        <continent>North America</continent>
        <hc-middle-x>0.48</hc-middle-x>
        <hc-middle-y>0.66</hc-middle-y>
        <hc-key>pr</hc-key>
        <hc-a2>PR</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="UM" d="M25.5,206.6 L25.5,206.6 L25.4,206.6 L25.5,206.6 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>United States Minor Outlying Islands</name>
        <labelrank>5</labelrank>
        <country-abbrev>U.S. MOI</country-abbrev>
        <subregion>Seven seas (open ocean)</subregion>
        <region-wb>East Asia &amp; Pacific</region-wb>
        <iso-a3>UMI</iso-a3>
        <iso-a2>UM</iso-a2>
        <woe-id>28289407</woe-id>
        <continent>North America</continent>
        <hc-middle-x>0.50</hc-middle-x>
        <hc-middle-y>0.51</hc-middle-y>
        <hc-key>um</hc-key>
        <hc-a2>UM</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="US" d="M79.8,96.3 L79.1,97.5 L78.5,95.7 L81.0,95.3 L82.1,96.3 Z M17.7,103.0 L17.4,104.1 L15.7,104.7 L16.0,103.4 Z M7.7,76.1 L12.7,77.1 L10.8,78.1 L9.8,77.2 L6.7,76.5 Z M42.4,92.3 L44.1,90.7 L44.1,94.1 L40.5,95.5 L39.6,94.1 Z M80.0,98.2 L80.8,97.1 L82.9,99.9 L81.5,101.5 L80.0,99.4 Z M76.7,93.8 L77.5,94.3 L78.0,97.5 L75.5,93.5 L74.4,92.4 L75.8,91.7 L77.5,92.4 Z M177.7,131.4 L177.4,131.2 L176.9,132.0 L176.9,132.0 L176.9,132.0 L176.1,133.3 L179.6,133.8 L184.4,131.3 L184.5,130.6 L184.6,130.1 L184.6,130.1 L184.6,130.0 L184.6,129.7 L189.1,129.6 L190.8,126.9 L191.8,126.0 L192.9,125.7 L192.9,125.7 L199.1,125.7 L201.2,124.0 L201.9,121.6 L203.3,119.9 L206.2,120.8 L206.1,123.9 L206.5,124.2 L206.9,124.3 L206.8,125.0 L207.4,125.3 L207.9,126.1 L203.9,127.1 L202.0,128.4 L200.0,132.0 L202.1,133.4 L194.9,135.0 L197.3,135.3 L193.7,136.1 L194.1,137.8 L192.6,139.6 L191.3,138.4 L192.3,140.7 L191.1,141.8 L189.8,138.6 L189.4,139.7 L189.9,143.9 L191.3,146.3 L190.3,148.1 L185.1,150.9 L184.3,152.2 L181.1,154.5 L180.0,156.4 L180.1,158.3 L182.6,165.2 L181.9,168.9 L180.7,168.9 L177.4,163.4 L177.7,161.2 L175.7,159.1 L173.3,159.7 L170.3,158.0 L164.2,158.5 L165.2,160.9 L163.5,159.9 L163.2,160.8 L157.5,159.4 L155.8,159.6 L151.1,162.3 L149.4,164.5 L149.9,167.2 L147.9,167.0 L146.0,166.0 L146.0,165.2 L145.5,165.0 L145.4,163.9 L142.5,160.0 L142.1,159.6 L141.9,159.7 L140.0,159.1 L138.4,161.0 L135.8,159.6 L134.8,157.5 L132.0,155.2 L128.7,155.2 L128.7,156.1 L123.4,156.1 L116.0,153.6 L116.2,153.2 L111.6,153.6 L110.9,151.8 L108.9,150.3 L105.9,150.7 L106.3,149.5 L104.9,149.2 L101.5,143.5 L101.3,142.1 L99.0,139.7 L98.7,137.6 L97.7,136.2 L98.3,134.0 L97.4,130.7 L98.2,128.3 L98.6,124.4 L97.3,117.6 L100.6,118.2 L100.8,116.1 L153.7,116.1 L156.4,117.2 L158.5,117.2 L160.9,118.4 L161.8,117.9 L164.4,118.5 L165.6,118.6 L167.0,121.1 L168.7,122.1 L173.3,121.4 L174.2,122.2 L174.9,122.1 L174.9,122.5 L175.2,124.5 L176.3,125.0 L176.4,127.3 L175.4,128.1 L177.6,128.2 L178.1,130.3 L178.0,131.2 Z M82.9,95.6 L86.9,98.2 L86.9,98.2 L87.0,99.9 L86.6,100.2 L85.2,101.2 L83.8,100.6 L83.2,97.5 L82.5,98.2 L81.3,96.7 L82.5,96.2 L78.8,92.3 L79.4,94.4 L78.4,94.2 L77.4,91.4 L75.3,91.1 L74.1,91.9 L71.1,89.5 L67.2,87.7 L62.4,86.5 L60.3,86.9 L56.1,85.5 L54.8,84.1 L52.0,84.6 L52.9,86.1 L50.2,86.8 L46.8,89.0 L45.0,89.3 L45.9,84.8 L47.7,83.9 L50.3,84.3 L47.6,82.9 L45.6,84.0 L42.8,87.7 L40.7,88.6 L40.6,89.6 L42.3,90.1 L39.8,92.4 L37.1,93.7 L36.1,95.3 L32.3,97.0 L32.0,98.1 L29.8,98.4 L26.1,100.5 L24.5,99.9 L23.4,101.3 L19.9,101.8 L20.7,101.0 L24.4,99.7 L25.9,98.3 L28.3,98.0 L33.9,93.7 L35.0,90.0 L33.0,90.8 L28.8,89.5 L27.7,90.9 L26.2,90.4 L26.2,88.3 L25.0,86.5 L22.5,87.4 L19.4,85.4 L18.8,87.0 L16.8,87.3 L15.2,86.3 L18.6,86.0 L20.5,84.5 L17.6,82.2 L21.5,77.2 L23.0,77.9 L27.9,75.8 L26.7,73.7 L27.2,72.1 L23.4,73.7 L17.6,73.2 L16.1,71.4 L17.7,71.0 L13.9,69.8 L19.1,67.4 L22.3,66.8 L22.4,68.5 L27.5,68.0 L26.4,67.3 L25.9,65.4 L22.4,65.2 L21.5,63.5 L16.9,61.1 L17.5,59.4 L21.1,59.2 L23.5,57.6 L23.4,56.7 L25.8,54.4 L27.8,54.4 L30.1,52.8 L33.2,52.7 L35.5,51.0 L38.8,51.6 L40.7,52.8 L44.4,52.7 L44.8,54.0 L49.6,53.7 L54.1,55.0 L59.0,55.6 L61.5,55.2 L65.9,56.8 L65.9,85.9 L69.3,86.6 L72.4,89.0 L72.7,90.0 L74.8,88.0 L76.4,87.4 L80.4,91.4 Z M100.3,116.1 L100.2,116.1 L100.2,116.1 Z M33.3,176.6 L30.7,175.3 L37.1,177.6 L39.4,180.2 L37.3,181.1 L37.1,177.8 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>United States of America</name>
        <labelrank>2</labelrank>
        <country-abbrev>U.S.A.</country-abbrev>
        <subregion>Northern America</subregion>
        <region-wb>North America</region-wb>
        <iso-a3>USA</iso-a3>
        <iso-a2>US</iso-a2>
        <woe-id>23424977</woe-id>
        <continent>North America</continent>
        <hc-middle-x>0.68</hc-middle-x>
        <hc-middle-y>0.68</hc-middle-y>
        <hc-key>us</hc-key>
        <hc-a2>US</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="VI" d="M212.0,183.6 L212.4,183.6 L211.8,183.8 L211.8,183.6 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>United States Virgin Islands</name>
        <labelrank>6</labelrank>
        <country-abbrev>V.I. (U.S.)</country-abbrev>
        <subregion>Caribbean</subregion>
        <region-wb>Latin America &amp; Caribbean</region-wb>
        <iso-a3>VIR</iso-a3>
        <iso-a2>VI</iso-a2>
        <woe-id>23424985</woe-id>
        <continent>North America</continent>
        <hc-middle-x>0.50</hc-middle-x>
        <hc-middle-y>0.50</hc-middle-y>
        <hc-key>vi</hc-key>
        <hc-a2>VI</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="CA" d="M82.9,95.6 L80.4,91.4 L76.4,87.4 L74.8,88.0 L72.7,90.0 L72.4,89.0 L69.3,86.6 L65.9,85.9 L65.9,56.8 L69.4,57.2 L71.4,58.5 L76.6,60.0 L75.3,58.5 L76.0,57.2 L80.8,57.6 L81.4,56.7 L84.7,56.2 L85.7,55.1 L87.7,55.6 L83.1,57.1 L80.5,59.5 L83.8,57.4 L85.1,58.1 L86.3,56.6 L88.9,56.7 L90.7,54.5 L90.3,53.3 L92.4,54.7 L94.7,57.6 L97.7,55.0 L97.6,57.7 L100.0,57.3 L100.5,56.1 L103.4,56.4 L105.6,57.6 L109.9,58.9 L113.8,59.6 L115.6,59.4 L117.8,61.0 L115.8,61.4 L114.7,62.5 L117.9,63.3 L122.3,63.2 L125.4,62.0 L128.6,64.3 L129.3,62.0 L131.5,61.9 L133.6,60.2 L129.8,61.7 L127.6,61.4 L128.6,60.2 L132.4,59.3 L134.0,59.9 L134.7,61.4 L135.5,60.4 L135.9,62.2 L137.7,62.1 L140.0,63.2 L143.1,62.8 L150.0,63.0 L148.2,62.6 L146.9,61.1 L149.7,60.7 L152.3,61.3 L151.2,64.0 L153.7,64.6 L152.7,63.2 L156.5,60.3 L154.7,59.8 L155.3,57.4 L151.7,56.0 L151.0,54.5 L151.3,51.0 L153.6,48.7 L154.7,48.6 L153.8,48.7 L153.7,46.6 L152.7,45.5 L152.6,42.5 L153.6,42.1 L153.6,41.2 L156.6,40.5 L159.3,41.2 L163.2,41.6 L160.1,45.5 L159.0,46.0 L155.6,45.7 L157.0,46.9 L155.7,48.4 L154.9,48.5 L157.9,50.8 L158.0,52.7 L161.5,57.2 L162.8,59.4 L163.1,61.5 L164.2,58.8 L165.6,58.2 L167.4,59.6 L167.8,61.2 L166.7,61.4 L167.0,63.0 L168.6,64.8 L170.3,64.3 L169.4,62.1 L171.5,62.1 L171.9,59.9 L174.1,58.9 L172.5,58.3 L172.6,56.1 L177.8,56.8 L179.9,57.6 L179.3,59.2 L180.4,60.2 L178.0,61.2 L180.4,64.1 L176.3,67.6 L174.3,65.9 L175.7,68.2 L173.9,67.7 L176.3,70.0 L174.8,69.5 L172.4,67.0 L169.8,67.4 L171.6,68.2 L168.6,70.9 L167.6,70.9 L164.2,68.9 L165.5,70.9 L169.5,71.5 L167.5,74.4 L165.4,75.2 L164.0,74.2 L162.2,76.5 L160.2,75.9 L162.4,77.8 L159.5,78.4 L157.4,81.7 L156.0,82.6 L154.4,87.0 L154.4,89.6 L157.6,90.4 L159.0,94.3 L158.4,95.4 L161.6,94.5 L165.8,95.6 L168.3,97.8 L173.9,100.0 L178.5,100.3 L178.1,102.7 L178.7,105.2 L180.6,105.4 L181.4,106.7 L179.0,106.0 L180.2,108.2 L183.3,110.7 L184.1,108.6 L185.5,108.2 L184.7,105.8 L182.6,105.1 L184.5,104.6 L184.7,103.3 L183.2,101.6 L183.8,101.0 L183.2,95.4 L185.3,97.5 L184.5,98.5 L184.7,100.8 L188.1,99.1 L189.4,97.2 L188.9,93.4 L185.6,90.0 L188.1,86.8 L186.2,84.4 L187.5,82.5 L186.4,81.4 L184.1,81.1 L182.4,81.7 L183.1,79.8 L186.3,80.5 L188.6,79.4 L192.8,80.6 L194.5,79.6 L198.8,82.1 L198.8,83.4 L202.8,83.7 L203.1,84.5 L206.1,85.5 L202.7,86.2 L202.7,88.8 L206.8,91.7 L210.8,88.9 L210.5,87.6 L212.2,85.4 L216.2,91.1 L216.0,92.0 L218.5,94.9 L219.1,98.4 L220.5,98.6 L219.8,100.6 L221.5,99.8 L223.2,101.0 L226.0,101.6 L223.8,103.2 L221.0,103.9 L220.5,105.2 L223.3,103.5 L226.0,102.8 L229.3,105.5 L229.4,108.2 L226.9,110.0 L225.5,109.8 L223.1,111.0 L220.9,113.0 L213.8,112.8 L208.8,112.9 L207.0,115.2 L203.7,116.6 L200.9,120.9 L203.8,117.9 L208.4,115.7 L212.4,115.8 L212.8,117.5 L210.3,119.3 L212.4,118.8 L211.3,120.4 L212.5,122.7 L216.4,124.2 L217.4,123.6 L219.2,124.9 L214.3,126.9 L212.9,126.7 L211.8,128.5 L210.1,129.2 L209.6,126.7 L212.8,124.9 L207.4,125.3 L206.8,125.0 L206.9,124.3 L206.4,124.1 L206.1,123.9 L206.2,120.8 L203.3,119.9 L201.9,121.6 L201.2,124.0 L199.1,125.7 L192.9,125.7 L194.0,125.1 L192.9,125.7 L191.8,126.0 L190.8,126.9 L188.5,128.1 L184.5,128.5 L184.6,129.7 L184.6,130.0 L184.6,130.1 L184.8,130.5 L184.5,130.6 L180.2,131.2 L177.8,132.6 L176.9,132.0 L176.9,132.0 L176.9,132.0 L178.1,131.9 L177.7,131.4 L178.0,131.2 L178.1,130.3 L179.5,129.5 L180.4,125.7 L182.6,126.9 L183.3,126.2 L181.3,123.5 L179.5,123.3 L179.3,124.4 L177.5,123.7 L179.5,123.1 L174.9,122.5 L174.9,122.1 L174.2,122.2 L173.3,118.6 L171.4,119.2 L170.5,116.6 L166.8,116.8 L164.4,118.5 L161.8,117.9 L160.9,118.4 L158.5,117.2 L156.4,117.2 L153.7,116.1 L100.8,116.1 L100.5,115.8 L100.3,116.1 L100.2,116.1 L96.1,112.8 L91.7,111.0 L91.2,107.8 L89.8,108.1 L88.5,105.9 L85.9,104.5 L86.6,100.2 L86.9,98.2 Z M160.2,75.9 L160.1,75.9 L160.1,75.9 L160.1,75.9 L160.1,75.9 L160.1,75.9 L156.9,74.9 L156.6,75.4 L160.1,75.9 L160.1,75.9 L160.1,75.9 L160.1,75.9 Z M213.2,113.7 L217.5,115.2 L216.8,115.9 L214.2,115.1 Z M178.7,78.1 L179.1,78.9 L176.8,80.5 L175.3,79.6 L176.5,78.2 Z M191.2,61.3 L192.1,61.5 L192.2,63.8 L190.7,64.7 L188.6,64.8 L187.9,63.2 L189.1,61.4 Z M135.6,43.8 L134.3,45.4 L132.0,43.4 L131.8,42.3 L134.5,42.1 Z M110.6,33.0 L110.1,34.5 L108.8,35.4 L107.2,35.1 Z M136.1,32.2 L136.7,30.8 L139.2,32.2 L139.9,33.4 L137.4,33.9 Z M163.0,26.9 L164.2,27.6 L163.4,28.7 L161.3,27.8 Z M134.8,27.8 L135.3,29.1 L133.8,28.3 L132.8,26.5 Z M153.3,26.3 L157.5,26.6 L156.9,27.6 L152.1,27.6 Z M217.2,120.3 L217.3,122.2 L215.6,123.0 L214.0,122.2 L217.1,122.2 Z M83.0,105.5 L84.8,108.5 L81.3,104.6 L81.2,102.8 L83.8,102.9 Z M218.6,122.7 L220.0,120.8 L221.5,123.3 L218.6,124.4 Z M154.7,34.5 L156.9,36.4 L156.7,38.7 L153.4,39.3 L151.2,36.6 Z M124.6,24.2 L123.1,23.8 L119.2,24.3 L119.1,23.7 L124.5,22.2 L126.2,22.9 L126.4,24.1 Z M150.4,22.5 L154.4,23.9 L153.9,25.5 L150.7,25.9 L148.7,25.2 L147.5,23.3 L148.0,22.0 Z M207.5,56.5 L205.8,56.3 L208.3,58.3 L206.4,58.4 L205.1,60.3 L207.9,60.9 L209.7,62.2 L212.1,62.3 L215.0,64.5 L214.7,65.9 L217.3,65.4 L218.3,67.6 L216.2,68.0 L217.0,69.8 L214.1,70.4 L214.7,71.2 L212.4,71.6 L210.7,69.8 L210.8,68.8 L208.0,67.0 L206.0,67.3 L207.6,68.8 L205.4,69.4 L207.8,70.8 L207.8,71.6 L211.1,73.1 L211.2,74.9 L213.1,75.6 L212.2,78.3 L208.5,78.3 L206.7,76.7 L203.9,75.8 L209.7,80.4 L210.7,82.0 L207.0,80.6 L204.7,80.3 L202.7,79.1 L200.5,79.4 L198.7,77.5 L199.5,76.3 L197.7,76.0 L194.2,72.8 L193.0,73.8 L190.8,73.1 L189.5,74.4 L187.5,74.9 L189.4,76.6 L188.0,76.3 L186.7,77.8 L185.7,76.5 L187.2,76.7 L187.5,74.0 L186.3,72.0 L187.7,70.5 L190.9,71.2 L194.2,70.2 L195.3,70.5 L193.4,68.3 L197.4,65.2 L196.2,61.5 L194.4,60.9 L193.7,62.0 L195.4,63.0 L193.5,63.0 L193.9,60.6 L191.4,58.9 L189.2,60.0 L187.9,57.5 L189.6,57.4 L187.5,56.4 L185.6,57.3 L185.0,59.2 L183.9,59.2 L185.0,57.2 L187.2,56.2 L187.2,54.9 L184.5,53.7 L185.3,55.5 L183.4,56.1 L182.6,57.2 L179.7,55.6 L177.9,56.4 L175.7,55.7 L170.8,55.2 L170.2,54.3 L166.1,53.9 L164.5,51.8 L168.8,52.0 L167.3,51.3 L164.0,50.9 L163.4,48.8 L165.4,44.0 L167.9,42.3 L169.9,41.8 L173.0,41.9 L169.9,45.6 L171.0,49.3 L173.5,51.1 L174.1,50.4 L171.3,48.4 L173.1,47.6 L171.8,46.2 L172.8,44.1 L177.4,42.2 L179.8,42.3 L182.3,45.9 L181.9,47.9 L183.1,46.7 L184.8,47.5 L187.4,45.8 L192.0,46.7 L191.8,48.1 L193.8,48.3 L193.1,49.8 L196.2,50.1 L198.9,50.3 L201.0,52.3 L205.1,53.5 L202.6,55.1 L205.4,55.1 L205.7,54.4 Z M90.0,111.6 L95.7,112.8 L95.9,113.2 L97.1,114.9 L100.3,116.5 L99.3,117.7 L97.2,117.1 L94.2,115.4 Z M234.6,121.4 L233.5,121.8 L232.8,120.0 L228.9,121.2 L229.9,119.8 L224.9,119.2 L222.8,119.6 L222.3,118.8 L223.6,117.0 L226.2,111.8 L227.4,110.2 L229.9,109.6 L229.6,111.3 L228.6,111.7 L228.6,114.3 L231.0,115.4 L231.6,114.4 L233.7,115.4 L232.8,117.1 L233.8,117.6 L232.9,119.2 L234.7,118.3 L235.3,119.7 Z M177.0,74.4 L174.0,77.1 L172.0,77.3 L171.7,75.9 L169.0,76.3 L170.9,74.7 L170.5,73.2 L171.4,69.5 L173.0,69.5 L174.9,71.3 L178.2,72.6 L180.1,74.8 L182.4,75.6 L180.8,76.7 L178.0,76.0 Z M146.4,58.5 L147.9,56.2 L149.3,55.9 L151.5,57.6 L152.4,59.3 L153.6,59.4 L151.1,60.8 L146.4,59.1 L143.2,59.0 Z M141.5,55.2 L142.4,54.9 L142.2,57.3 L140.3,55.9 L139.0,57.6 L140.5,57.3 L141.1,58.5 L137.8,59.7 L132.2,58.3 L131.8,57.3 L130.4,58.9 L124.8,60.2 L122.4,61.2 L122.3,60.5 L120.0,60.8 L118.3,59.6 L118.2,58.3 L113.8,57.9 L111.0,55.6 L111.9,55.1 L117.3,54.5 L120.3,54.9 L121.2,53.8 L118.6,53.2 L111.4,53.7 L109.2,52.0 L113.6,50.8 L110.8,50.8 L109.8,49.7 L107.9,49.9 L107.9,48.8 L109.7,47.7 L108.8,47.0 L111.2,45.2 L116.5,43.5 L117.7,44.5 L118.1,46.3 L119.5,44.8 L122.9,45.9 L122.1,47.5 L123.9,46.5 L125.7,46.7 L123.9,44.9 L125.1,44.9 L127.9,46.5 L129.6,49.8 L128.8,43.8 L129.1,42.9 L134.2,45.7 L134.8,48.1 L136.2,50.8 L135.5,51.7 L136.8,53.0 Z M181.2,42.2 L186.9,42.7 L190.0,44.6 L189.8,45.6 L182.9,45.5 L181.3,43.9 Z M151.0,49.1 L146.9,51.1 L144.7,49.0 L139.4,46.1 L140.5,44.6 L142.0,45.9 L144.4,45.0 L141.3,43.1 L142.7,41.8 L144.4,42.1 L147.9,40.8 L148.7,39.3 L148.3,41.4 L149.7,41.7 L149.9,43.4 L147.6,44.7 L149.7,45.0 L150.6,44.2 L151.5,47.0 Z M96.4,45.3 L98.9,42.1 L97.0,39.9 L103.1,39.1 L105.8,40.1 L109.8,40.1 L112.1,40.9 L115.1,43.1 L107.7,46.3 L105.3,48.7 L104.9,50.3 L100.2,51.8 L98.3,49.6 L94.8,48.7 Z M143.1,35.7 L144.8,34.8 L139.4,35.5 L140.4,34.3 L138.1,34.5 L140.2,33.5 L141.0,31.7 L144.8,33.7 L142.2,31.2 L144.0,30.6 L146.1,31.7 L146.5,31.0 L148.9,31.6 L149.5,34.8 L148.0,36.1 L148.2,37.3 L143.8,37.3 Z M126.6,33.1 L124.5,32.3 L127.6,30.1 L129.0,32.4 L128.2,33.3 L130.9,33.9 L131.8,33.3 L133.9,33.9 L133.9,35.2 L137.1,36.0 L136.3,37.3 L133.6,36.0 L132.9,37.2 L128.3,37.7 L127.5,37.1 L122.1,39.3 L119.5,39.7 L116.8,38.6 L119.9,37.5 L122.3,37.3 L123.5,36.4 L117.7,37.1 L117.5,36.0 L115.8,37.5 L110.9,36.6 L113.9,32.1 L115.9,31.4 L115.9,30.4 L116.8,30.6 L117.7,32.7 L119.5,32.4 L122.5,34.1 L122.9,35.4 L127.4,35.5 L125.2,33.9 Z M163.7,39.2 L159.7,38.2 L158.9,36.6 L159.8,35.1 L157.6,32.0 L155.8,32.5 L152.5,31.9 L150.6,29.6 L152.6,29.2 L156.5,29.8 L157.7,31.0 L160.9,30.7 L164.8,32.8 L161.2,32.9 L165.2,34.3 L165.7,35.7 L168.7,35.0 L170.5,35.7 L175.6,34.2 L180.6,34.4 L183.5,35.6 L182.9,38.1 L182.5,38.8 L179.4,39.5 Z M113.0,27.2 L114.9,28.3 L113.1,29.0 L114.0,30.7 L109.9,31.9 L110.5,30.4 L108.1,31.5 L108.9,32.1 L106.4,34.1 L104.4,33.7 L101.5,33.8 L100.7,32.6 L103.1,31.8 L108.4,28.0 Z M121.2,28.2 L119.1,27.4 L118.4,26.2 L117.3,26.6 L115.5,25.6 L117.0,25.1 L119.1,25.8 L123.9,25.0 L125.9,25.5 L124.8,27.5 Z M137.3,19.6 L139.8,21.1 L141.3,20.8 L145.3,22.9 L144.7,23.6 L146.3,25.8 L142.1,26.1 L142.4,24.5 L139.1,24.5 L139.2,23.8 L135.9,24.3 L134.8,23.3 L137.7,23.3 L136.6,21.3 L133.8,21.1 L134.1,19.8 Z M164.9,14.5 L165.5,16.0 L166.5,14.9 L168.0,15.0 L169.4,17.3 L169.1,18.7 L172.1,18.7 L173.4,19.9 L170.3,20.9 L168.3,22.6 L167.0,21.4 L167.0,23.5 L165.4,24.6 L159.8,24.5 L155.4,21.3 L157.4,20.5 L160.0,20.5 L158.6,19.3 L156.1,20.1 L152.6,19.5 L150.8,16.2 L154.3,16.7 L151.0,15.6 L152.1,14.3 L153.7,14.2 L153.1,13.3 L154.3,12.1 L157.6,12.0 L155.2,11.2 L157.4,10.7 L160.1,11.7 L162.2,14.4 Z M184.4,28.3 L181.3,28.1 L184.7,29.1 L184.0,29.8 L186.8,29.6 L187.1,30.9 L184.2,32.2 L184.9,34.1 L183.3,34.0 L184.0,32.3 L180.7,33.0 L181.3,31.8 L175.3,31.6 L174.3,32.3 L168.6,31.7 L163.5,31.6 L162.5,30.7 L166.9,29.0 L168.1,28.1 L167.1,26.2 L170.9,26.3 L171.7,27.5 L176.1,28.1 L178.0,25.6 L175.3,27.5 L172.2,27.3 L172.3,24.9 L168.4,24.9 L168.4,23.5 L170.1,22.0 L174.6,21.4 L173.2,18.5 L170.3,17.9 L170.4,15.5 L175.5,15.8 L178.6,17.4 L179.6,17.3 L176.6,15.5 L186.6,14.2 L182.8,14.2 L189.3,12.9 L183.5,13.2 L177.2,14.5 L176.5,13.8 L174.4,14.6 L169.8,14.2 L171.1,12.4 L168.8,14.1 L164.8,13.0 L169.9,12.4 L170.3,11.8 L163.9,12.4 L162.9,11.6 L166.7,9.7 L162.7,10.7 L164.4,9.5 L159.9,9.5 L161.7,8.6 L164.8,8.7 L167.4,7.3 L173.7,7.9 L169.9,7.2 L172.5,6.5 L171.7,5.6 L177.1,6.4 L182.7,8.0 L177.6,6.0 L178.8,4.6 L181.6,5.2 L179.8,4.1 L183.0,4.2 L182.5,3.4 L188.3,3.7 L190.2,2.8 L193.9,3.1 L194.6,3.7 L196.2,2.7 L202.5,2.5 L202.7,3.1 L208.9,3.6 L204.6,4.9 L206.8,4.7 L212.1,3.5 L215.7,5.4 L218.1,5.5 L218.6,6.9 L212.7,9.1 L210.8,8.9 L208.4,10.1 L201.8,11.7 L212.4,9.9 L205.2,13.5 L200.7,16.2 L199.1,18.0 L195.5,17.8 L195.9,18.9 L190.6,19.7 L187.8,19.2 L187.9,20.0 L193.4,20.2 L193.3,21.0 L190.2,20.7 L186.8,21.0 L190.9,21.3 L193.1,22.1 L192.7,22.9 L189.5,23.1 L192.2,23.8 L191.2,24.9 L188.8,25.8 L186.3,25.5 L187.1,27.1 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Canada</name>
        <labelrank>2</labelrank>
        <country-abbrev>Can.</country-abbrev>
        <subregion>Northern America</subregion>
        <region-wb>North America</region-wb>
        <iso-a3>CAN</iso-a3>
        <iso-a2>CA</iso-a2>
        <woe-id>23424775</woe-id>
        <continent>North America</continent>
        <hc-middle-x>0.27</hc-middle-x>
        <hc-middle-y>0.63</hc-middle-y>
        <hc-key>ca</hc-key>
        <hc-a2>CA</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="ST" d="M348.8,217.7 L348.5,217.4 L348.8,217.0 L349.1,217.3 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Sao Tome and Principe</name>
        <labelrank>6</labelrank>
        <country-abbrev>S.T.P.</country-abbrev>
        <subregion>Middle Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>STP</iso-a3>
        <iso-a2>ST</iso-a2>
        <woe-id>23424966</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.55</hc-middle-x>
        <hc-middle-y>0.50</hc-middle-y>
        <hc-key>st</hc-key>
        <hc-a2>ST</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="JP" d="M594.2,149.8 L593.3,152.0 L591.5,151.8 L590.2,153.1 L589.8,151.6 L590.9,150.1 Z M584.2,152.1 L583.7,150.2 L584.9,151.8 L586.2,150.7 L588.6,151.3 L589.2,152.7 L587.8,156.0 L585.7,156.3 L585.6,153.0 Z M606.4,143.1 L605.5,145.5 L606.1,146.7 L604.3,148.5 L604.0,147.6 L601.0,148.9 L598.4,148.8 L598.5,149.8 L596.7,151.3 L595.0,150.7 L595.5,148.9 L594.4,148.8 L589.3,150.7 L586.9,150.2 L591.2,147.0 L596.4,147.1 L598.7,144.2 L601.1,143.5 L601.5,141.9 L603.3,141.3 L604.5,138.3 L604.2,135.9 L605.0,135.3 L607.2,135.7 L608.4,138.3 L606.5,140.9 Z M607.7,131.3 L605.0,132.1 L605.8,133.1 L604.8,134.1 L604.2,131.2 L606.7,130.1 L607.9,126.7 L607.0,125.3 L608.2,124.5 L611.6,127.8 L613.7,128.2 L614.7,129.7 L611.4,131.2 L610.6,132.8 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Japan</name>
        <labelrank>2</labelrank>
        <country-abbrev>Japan</country-abbrev>
        <subregion>Eastern Asia</subregion>
        <region-wb>East Asia &amp; Pacific</region-wb>
        <iso-a3>JPN</iso-a3>
        <iso-a2>JP</iso-a2>
        <woe-id>23424856</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.51</hc-middle-x>
        <hc-middle-y>0.68</hc-middle-y>
        <hc-key>jp</hc-key>
        <hc-a2>JP</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="CV" d="M290.6,188.4 L291.2,189.0 L291.1,189.2 L290.5,189.0 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Cape Verde</name>
        <labelrank>4</labelrank>
        <country-abbrev>C.Vd.</country-abbrev>
        <subregion>Western Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>CPV</iso-a3>
        <iso-a2>CV</iso-a2>
        <woe-id>23424794</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.34</hc-middle-x>
        <hc-middle-y>0.60</hc-middle-y>
        <hc-key>cv</hc-key>
        <hc-a2>CV</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="DM" d="M218.4,187.9 L218.7,188.0 L218.5,188.6 L218.3,188.1 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Dominica</name>
        <labelrank>6</labelrank>
        <country-abbrev>D'inca</country-abbrev>
        <subregion>Caribbean</subregion>
        <region-wb>Latin America &amp; Caribbean</region-wb>
        <iso-a3>DMA</iso-a3>
        <iso-a2>DM</iso-a2>
        <woe-id>23424798</woe-id>
        <continent>North America</continent>
        <hc-middle-x>0.35</hc-middle-x>
        <hc-middle-y>0.49</hc-middle-y>
        <hc-key>dm</hc-key>
        <hc-a2>DM</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="SC" d="M442.3,226.6 L442.4,226.5 L442.5,226.7 L442.5,226.9 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Seychelles</name>
        <labelrank>6</labelrank>
        <country-abbrev>Syc.</country-abbrev>
        <subregion>Eastern Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>SYC</iso-a3>
        <iso-a2>SC</iso-a2>
        <woe-id>23424941</woe-id>
        <continent>Seven seas (open ocean)</continent>
        <hc-middle-x>0.61</hc-middle-x>
        <hc-middle-y>0.48</hc-middle-y>
        <hc-key>sc</hc-key>
        <hc-a2>SC</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="JM" d="M187.7,182.2 L190.1,183.3 L188.1,183.7 L185.9,182.6 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Jamaica</name>
        <labelrank>4</labelrank>
        <country-abbrev>Jam.</country-abbrev>
        <subregion>Caribbean</subregion>
        <region-wb>Latin America &amp; Caribbean</region-wb>
        <iso-a3>JAM</iso-a3>
        <iso-a2>JM</iso-a2>
        <woe-id>23424858</woe-id>
        <continent>North America</continent>
        <hc-middle-x>0.50</hc-middle-x>
        <hc-middle-y>0.52</hc-middle-y>
        <hc-key>jm</hc-key>
        <hc-a2>JM</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="WS" d="M5.9,243.6 L6.0,244.2 L5.4,244.3 L4.9,243.7 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Samoa</name>
        <labelrank>4</labelrank>
        <country-abbrev>Samoa</country-abbrev>
        <subregion>Polynesia</subregion>
        <region-wb>East Asia &amp; Pacific</region-wb>
        <iso-a3>WSM</iso-a3>
        <iso-a2>WS</iso-a2>
        <woe-id>23424992</woe-id>
        <continent>Oceania</continent>
        <hc-middle-x>0.50</hc-middle-x>
        <hc-middle-y>0.53</hc-middle-y>
        <hc-key>ws</hc-key>
        <hc-a2>WS</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="OM" d="M444.0,168.7 L443.9,168.8 L443.9,168.5 L444.1,168.6 Z M443.6,167.0 L444.1,166.4 L444.0,167.9 L443.7,167.8 Z M437.9,185.8 L437.2,184.5 L435.7,181.2 L441.5,179.2 L442.7,175.3 L441.9,173.8 L443.0,169.5 L444.2,169.2 L445.6,171.3 L448.8,172.2 L450.7,174.8 L446.7,179.7 L447.0,181.2 L445.2,181.6 L444.1,183.3 L442.4,183.5 L441.6,185.1 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Oman</name>
        <labelrank>4</labelrank>
        <country-abbrev>Oman</country-abbrev>
        <subregion>Western Asia</subregion>
        <region-wb>Middle East &amp; North Africa</region-wb>
        <iso-a3>OMN</iso-a3>
        <iso-a2>OM</iso-a2>
        <woe-id>23424898</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.88</hc-middle-x>
        <hc-middle-y>0.44</hc-middle-y>
        <hc-key>om</hc-key>
        <hc-a2>OM</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="VC" d="M218.8,192.8 L218.7,192.3 L218.9,192.2 L218.9,192.5 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Saint Vincent and the Grenadines</name>
        <labelrank>6</labelrank>
        <country-abbrev>St.V.G.</country-abbrev>
        <subregion>Caribbean</subregion>
        <region-wb>Latin America &amp; Caribbean</region-wb>
        <iso-a3>VCT</iso-a3>
        <iso-a2>VC</iso-a2>
        <woe-id>23424981</woe-id>
        <continent>North America</continent>
        <hc-middle-x>0.51</hc-middle-x>
        <hc-middle-y>0.50</hc-middle-y>
        <hc-key>vc</hc-key>
        <hc-a2>VC</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="SB" d="M643.5,235.3 L644.0,236.8 L642.0,235.5 L644.7,234.2 L645.8,236.5 Z M635.2,231.1 L636.0,230.4 L638.0,231.9 L639.5,232.3 L638.2,233.2 L639.0,234.5 L636.3,232.8 L636.9,231.5 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Solomon Islands</name>
        <labelrank>3</labelrank>
        <country-abbrev>S. Is.</country-abbrev>
        <subregion>Melanesia</subregion>
        <region-wb>East Asia &amp; Pacific</region-wb>
        <iso-a3>SLB</iso-a3>
        <iso-a2>SB</iso-a2>
        <woe-id>23424766</woe-id>
        <continent>Oceania</continent>
        <hc-middle-x>0.21</hc-middle-x>
        <hc-middle-y>0.29</hc-middle-y>
        <hc-key>sb</hc-key>
        <hc-a2>SB</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="LC" d="M219.3,191.5 L219.0,191.3 L219.3,190.8 L219.4,190.8 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Saint Lucia</name>
        <labelrank>6</labelrank>
        <country-abbrev>S.L.</country-abbrev>
        <subregion>Caribbean</subregion>
        <region-wb>Latin America &amp; Caribbean</region-wb>
        <iso-a3>LCA</iso-a3>
        <iso-a2>LC</iso-a2>
        <woe-id>23424951</woe-id>
        <continent>North America</continent>
        <hc-middle-x>0.49</hc-middle-x>
        <hc-middle-y>0.48</hc-middle-y>
        <hc-key>lc</hc-key>
        <hc-a2>LC</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="FR" d="M354.2,131.2 L353.8,134.1 L353.0,133.7 L352.8,131.4 Z M656.5,258.5 L655.9,260.4 L654.7,260.7 L651.1,257.9 L651.4,257.0 L655.0,259.7 Z M468.7,319.5 L471.3,319.8 L470.5,321.3 L468.2,320.6 Z M215.2,183.0 L215.3,182.9 L215.3,183.1 Z M350.5,128.5 L350.4,128.6 L350.4,128.7 L350.3,128.6 L350.2,128.7 L347.3,130.3 L346.0,129.4 L343.7,129.1 L342.1,130.1 L342.2,131.7 L340.0,131.9 L339.4,131.5 L339.4,131.3 L338.8,131.3 L336.0,131.1 L332.7,129.5 L333.3,129.0 L334.0,122.7 L332.3,120.8 L328.6,118.8 L327.0,117.3 L330.2,116.4 L331.0,117.2 L333.5,116.9 L332.4,114.2 L335.7,115.3 L338.4,113.6 L339.1,111.4 L340.9,110.8 L340.9,110.8 L341.1,111.1 L344.0,113.6 L347.2,114.7 L347.5,114.9 L348.3,114.9 L349.0,115.6 L351.8,116.1 L350.5,119.3 L350.6,119.5 L350.6,119.5 L347.9,121.9 L348.0,122.6 L348.2,122.4 L348.3,122.4 L349.1,122.3 L349.2,123.0 L349.6,123.5 L348.8,125.5 Z M339.9,131.7 L339.9,131.7 L339.9,131.6 L339.8,131.6 Z M232.3,207.6 L234.5,207.4 L237.1,210.1 L235.1,213.3 L231.4,213.4 L232.6,211.2 L231.7,208.4 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>France</name>
        <labelrank>2</labelrank>
        <country-abbrev>Fr.</country-abbrev>
        <subregion>Western Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>FRA</iso-a3>
        <iso-a2>FR</iso-a2>
        <woe-id>-90</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.29</hc-middle-x>
        <hc-middle-y>0.05</hc-middle-y>
        <hc-key>fr</hc-key>
        <hc-a2>FR</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="NR" d="M656.1,218.8 L656.0,218.8 L656.0,218.8 L656.1,218.7 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Nauru</name>
        <labelrank>6</labelrank>
        <country-abbrev>Nauru</country-abbrev>
        <subregion>Micronesia</subregion>
        <region-wb>East Asia &amp; Pacific</region-wb>
        <iso-a3>NRU</iso-a3>
        <iso-a2>NR</iso-a2>
        <woe-id>23424912</woe-id>
        <continent>Oceania</continent>
        <hc-middle-x>0.53</hc-middle-x>
        <hc-middle-y>0.50</hc-middle-y>
        <hc-key>nr</hc-key>
        <hc-a2>NR</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="NO" d="M377.3,23.0 L378.8,24.3 L376.5,24.6 L374.8,23.3 Z M365.0,60.8 L365.3,60.7 L365.3,60.7 L365.3,60.7 L365.3,60.7 L365.4,60.8 L365.0,60.8 Z M365.0,60.8 L361.8,62.1 L362.9,61.2 L365.0,60.8 Z M358.0,89.7 L356.2,89.0 L352.4,91.8 L350.6,92.4 L348.6,92.2 L346.6,90.4 L347.8,88.6 L346.0,89.1 L346.6,87.6 L345.7,86.2 L345.7,80.9 L349.4,78.9 L349.1,78.5 L352.9,77.0 L351.0,76.8 L353.0,75.6 L355.5,77.1 L358.1,75.6 L355.1,76.5 L354.4,75.7 L358.3,72.6 L361.6,67.8 L362.2,65.8 L363.7,64.1 L366.0,63.1 L364.5,62.9 L369.4,58.8 L368.4,58.8 L370.3,57.0 L371.5,57.5 L375.8,54.7 L379.9,54.2 L379.0,53.1 L380.9,52.8 L380.5,53.8 L382.3,53.7 L383.6,52.2 L386.3,52.1 L384.2,53.8 L384.3,55.3 L387.3,52.2 L386.9,54.3 L388.9,51.7 L393.6,53.1 L395.7,54.6 L393.9,55.3 L390.9,55.1 L395.2,56.2 L394.2,56.9 L391.6,58.9 L392.4,57.4 L389.6,55.3 L386.0,56.6 L385.3,59.3 L383.8,60.4 L382.0,59.6 L379.1,59.9 L377.6,58.1 L375.6,58.8 L374.3,61.1 L370.9,60.5 L370.4,62.4 L369.3,61.9 L367.0,64.2 L367.6,65.4 L364.0,68.4 L363.9,70.9 L362.3,73.2 L362.8,75.0 L360.4,75.1 L359.1,77.2 L359.7,80.3 L359.4,81.8 L360.8,82.9 L359.6,84.0 L360.1,86.5 L358.5,88.1 Z M382.9,26.1 L380.9,28.0 L379.1,28.4 L379.8,27.2 L376.2,27.7 L377.6,25.7 L376.1,25.1 L380.1,24.3 L381.4,25.9 Z M367.3,16.6 L369.8,17.3 L372.0,18.9 L372.4,20.5 L374.0,20.5 L377.4,21.8 L372.5,23.5 L371.0,27.5 L370.1,27.6 L368.3,31.2 L363.7,28.7 L362.8,27.3 L368.3,25.9 L362.4,26.4 L362.2,25.2 L364.9,24.9 L366.4,24.0 L364.5,22.3 L364.2,23.8 L361.0,24.6 L359.1,22.8 L359.4,24.5 L357.4,23.6 L356.9,21.7 L358.6,23.5 L358.8,21.8 L359.9,21.2 L357.7,20.8 L356.6,18.8 L357.2,18.2 L358.8,17.5 L359.8,18.3 L362.6,17.4 L362.7,18.9 L364.0,17.7 L365.4,18.5 L367.4,21.6 L366.2,17.4 Z M388.1,17.5 L385.6,18.5 L385.6,19.3 L380.0,20.2 L380.0,19.4 L373.9,19.8 L373.7,18.6 L378.0,18.1 L378.1,17.6 L372.1,18.1 L371.0,17.3 L371.6,15.8 L375.4,13.9 L376.1,15.9 L378.0,15.7 L379.0,16.8 L379.7,14.6 L380.2,16.1 L382.8,15.6 L387.5,16.1 Z M365.3,60.7 L363.7,60.0 L365.7,59.3 L367.0,57.9 L366.4,60.3 L365.3,60.7 L365.3,60.7 L365.3,60.7 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Norway</name>
        <labelrank>3</labelrank>
        <country-abbrev>Nor.</country-abbrev>
        <subregion>Northern Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>NOR</iso-a3>
        <iso-a2>NO</iso-a2>
        <woe-id>-90</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.14</hc-middle-x>
        <hc-middle-y>0.90</hc-middle-y>
        <hc-key>no</hc-key>
        <hc-a2>NO</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="FM" d="M639.3,204.5 L639.6,204.6 L639.5,204.8 L639.3,204.8 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Federated States of Micronesia</name>
        <labelrank>6</labelrank>
        <country-abbrev>F.S.M.</country-abbrev>
        <subregion>Micronesia</subregion>
        <region-wb>East Asia &amp; Pacific</region-wb>
        <iso-a3>FSM</iso-a3>
        <iso-a2>FM</iso-a2>
        <woe-id>23424815</woe-id>
        <continent>Oceania</continent>
        <hc-middle-x>0.50</hc-middle-x>
        <hc-middle-y>0.52</hc-middle-y>
        <hc-key>fm</hc-key>
        <hc-a2>FM</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="KN" d="M216.1,184.7 L216.0,184.6 L215.6,184.4 L215.9,184.4 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Saint Kitts and Nevis</name>
        <labelrank>6</labelrank>
        <country-abbrev>St.K.N.</country-abbrev>
        <subregion>Caribbean</subregion>
        <region-wb>Latin America &amp; Caribbean</region-wb>
        <iso-a3>KNA</iso-a3>
        <iso-a2>KN</iso-a2>
        <woe-id>23424940</woe-id>
        <continent>North America</continent>
        <hc-middle-x>0.57</hc-middle-x>
        <hc-middle-y>0.32</hc-middle-y>
        <hc-key>kn</hc-key>
        <hc-a2>KN</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="CN" d="M547.7,181.8 L546.1,182.8 L544.4,182.2 L544.3,180.6 L546.4,179.2 L548.7,179.2 Z M522.6,162.6 L520.4,160.2 L518.7,160.9 L517.5,160.3 L513.6,163.2 L511.7,163.5 L509.0,162.3 L506.5,164.5 L505.9,162.8 L505.0,163.3 L500.9,163.3 L497.3,160.5 L496.2,160.6 L493.4,158.2 L491.3,158.5 L488.6,156.9 L486.3,153.6 L488.4,153.3 L487.1,151.4 L487.4,149.6 L486.1,149.0 L485.2,147.2 L484.5,147.3 L483.3,146.9 L481.7,145.1 L479.0,143.9 L478.7,143.6 L479.7,143.4 L479.4,140.6 L477.6,140.4 L477.2,138.5 L479.5,136.1 L481.2,136.6 L483.2,135.1 L485.8,134.9 L486.3,134.1 L489.8,132.3 L491.0,130.1 L489.6,125.7 L493.8,124.4 L495.2,120.4 L498.6,121.4 L500.0,120.8 L500.5,117.5 L503.5,115.8 L504.4,115.6 L504.7,117.0 L506.8,118.5 L509.3,119.3 L510.6,122.0 L510.3,125.3 L515.4,125.8 L518.9,127.4 L520.8,131.0 L530.9,131.5 L531.7,132.3 L534.9,133.2 L537.7,133.3 L540.7,132.0 L546.0,131.7 L550.6,128.8 L549.6,127.1 L550.8,125.5 L553.9,126.3 L555.6,124.8 L557.7,124.6 L559.6,122.6 L562.7,121.6 L565.5,121.9 L565.5,120.5 L563.3,118.6 L561.8,118.5 L561.7,118.6 L561.3,119.0 L558.2,119.2 L557.5,118.2 L559.8,114.0 L561.8,114.8 L564.8,113.3 L564.5,112.6 L566.3,109.3 L567.6,108.2 L566.2,106.5 L567.8,105.2 L573.0,104.4 L577.1,106.0 L578.6,108.1 L579.4,110.9 L581.6,114.7 L584.3,115.0 L586.8,117.7 L587.2,119.3 L590.1,119.2 L593.7,117.6 L594.4,119.2 L593.2,120.3 L592.8,122.7 L590.7,125.6 L590.5,125.1 L589.1,125.2 L587.1,126.1 L587.7,127.9 L587.4,130.6 L586.3,131.5 L585.0,130.5 L584.7,131.7 L581.5,132.7 L581.7,134.1 L578.8,133.5 L577.6,135.2 L574.5,137.0 L570.8,138.5 L568.3,140.1 L569.5,138.6 L568.4,138.3 L570.5,136.1 L568.4,135.1 L566.9,136.8 L565.2,137.5 L564.2,139.1 L561.8,139.2 L562.4,141.4 L563.9,141.4 L565.0,143.6 L567.5,142.1 L569.2,143.0 L571.3,143.0 L567.5,145.1 L564.6,148.2 L566.6,149.8 L567.8,153.3 L569.6,154.8 L569.9,157.0 L568.0,157.8 L570.6,159.0 L569.2,160.4 L569.3,162.3 L568.3,162.6 L567.1,164.7 L565.5,165.7 L565.3,167.8 L564.2,169.3 L560.3,172.0 L559.4,173.3 L556.1,173.6 L554.8,174.9 L553.9,173.1 L553.7,174.9 L548.3,176.5 L546.8,178.7 L546.4,176.3 L544.0,175.5 L543.1,176.3 L540.5,175.2 L540.7,173.7 L538.0,172.5 L535.4,174.2 L532.5,173.7 L531.8,174.4 L530.9,174.3 L531.1,177.0 L530.0,176.1 L528.1,176.4 L527.7,175.1 L526.1,174.9 L526.8,173.1 L525.6,172.9 L525.1,171.1 L523.2,171.5 L523.1,169.7 L525.3,167.4 L525.2,163.9 L523.1,161.9 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>China</name>
        <labelrank>2</labelrank>
        <country-abbrev>China</country-abbrev>
        <subregion>Eastern Asia</subregion>
        <region-wb>East Asia &amp; Pacific</region-wb>
        <iso-a3>CHN</iso-a3>
        <iso-a2>CN</iso-a2>
        <woe-id>23424781</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.43</hc-middle-x>
        <hc-middle-y>0.56</hc-middle-y>
        <hc-key>cn</hc-key>
        <hc-a2>CN</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="BH" d="M432.9,166.7 L433.1,166.8 L433.0,167.6 L432.8,167.2 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Bahrain</name>
        <labelrank>4</labelrank>
        <country-abbrev>Bahr.</country-abbrev>
        <subregion>Western Asia</subregion>
        <region-wb>Middle East &amp; North Africa</region-wb>
        <iso-a3>BHR</iso-a3>
        <iso-a2>BH</iso-a2>
        <woe-id>23424753</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.45</hc-middle-x>
        <hc-middle-y>0.50</hc-middle-y>
        <hc-key>bh</hc-key>
        <hc-a2>BH</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="TO" d="M0.8,259.1 L0.0,258.6 L0.4,258.7 L0.5,258.9 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Tonga</name>
        <labelrank>4</labelrank>
        <country-abbrev>Tongo</country-abbrev>
        <subregion>Polynesia</subregion>
        <region-wb>East Asia &amp; Pacific</region-wb>
        <iso-a3>TON</iso-a3>
        <iso-a2>TO</iso-a2>
        <woe-id>23424964</woe-id>
        <continent>Oceania</continent>
        <hc-middle-x>0.54</hc-middle-x>
        <hc-middle-y>0.40</hc-middle-y>
        <hc-key>to</hc-key>
        <hc-a2>TO</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="ID" d="M541.8,223.3 L540.3,223.7 L537.7,221.5 L539.4,220.8 L540.4,223.4 Z M593.8,229.8 L591.2,228.5 L591.4,227.9 L594.4,228.6 Z M561.4,233.8 L564.2,233.7 L563.2,234.7 L560.4,235.2 L558.4,234.8 L559.2,233.5 Z M581.7,213.4 L581.0,216.3 L582.3,219.5 L581.0,219.5 L580.3,217.1 L580.6,214.5 Z M574.6,235.3 L574.9,235.3 L575.5,234.9 L575.6,235.3 L575.8,235.9 L574.6,237.2 L572.8,237.6 L573.8,235.6 L574.3,235.9 Z M562.1,209.9 L561.6,210.2 L561.7,209.9 L561.8,209.9 Z M606.3,222.8 L606.3,231.0 L606.3,235.2 L604.3,233.3 L599.9,233.9 L600.7,232.3 L602.3,231.8 L600.7,228.1 L596.7,226.4 L595.3,226.3 L592.1,224.6 L590.9,224.6 L589.5,222.9 L592.9,222.4 L589.2,221.8 L588.7,220.7 L586.9,220.3 L586.4,218.6 L587.7,219.4 L590.5,218.5 L592.9,219.2 L593.2,222.2 L594.8,224.1 L597.3,222.7 L596.6,220.9 L599.0,221.2 L600.2,220.6 L604.2,222.3 Z M536.8,229.1 L533.4,226.4 L529.9,222.7 L527.3,217.9 L524.7,217.8 L526.3,221.2 L525.6,221.0 L524.5,217.8 L526.1,217.3 L525.0,214.1 L522.6,213.9 L523.8,215.9 L523.4,216.7 L522.1,215.1 L523.2,212.3 L519.0,208.6 L519.0,207.0 L520.3,207.7 L523.0,207.8 L524.5,210.0 L527.3,211.7 L528.8,213.7 L530.9,213.7 L532.6,215.9 L535.0,217.3 L534.4,218.4 L535.9,218.7 L536.5,221.3 L538.6,222.4 L539.4,224.0 L538.9,228.9 Z M565.4,235.6 L566.5,233.6 L570.5,234.3 L571.8,233.5 L577.2,233.1 L574.1,234.1 L573.3,233.6 L569.5,234.8 L566.0,234.7 L567.7,237.1 L567.0,237.5 L564.1,236.1 Z M552.1,233.9 L547.9,233.3 L544.8,232.3 L543.7,232.7 L540.3,231.9 L540.3,231.1 L538.2,230.8 L539.4,229.0 L541.3,229.1 L544.3,230.7 L547.8,231.0 L548.7,230.0 L550.9,230.9 L557.2,230.8 L555.8,231.5 L552.2,231.5 L553.3,232.7 L557.9,233.8 L555.7,234.6 L553.1,233.6 Z M581.7,223.7 L579.0,225.2 L577.9,224.7 L577.5,222.4 L577.8,223.7 L580.9,223.8 L584.2,223.1 L586.4,223.7 L586.9,225.2 L584.4,224.1 L582.4,224.4 Z M570.1,226.4 L569.9,228.2 L569.2,225.6 L567.8,224.5 L568.2,223.1 L566.8,223.9 L566.7,228.3 L564.9,228.0 L565.4,226.0 L563.8,223.3 L564.8,221.6 L566.2,216.4 L567.8,215.2 L573.4,216.2 L576.0,214.5 L574.4,217.0 L566.8,216.9 L566.1,218.2 L567.4,220.5 L569.3,218.7 L572.7,219.2 L569.3,221.4 L570.5,223.4 L570.4,224.8 L572.2,225.4 L571.2,228.6 Z M561.4,209.9 L562.0,214.2 L564.2,216.0 L561.9,216.3 L561.2,218.8 L559.2,221.2 L559.6,222.0 L558.5,224.8 L555.8,225.7 L555.5,224.4 L552.8,223.4 L550.4,224.6 L550.3,223.2 L547.4,223.5 L546.6,219.9 L545.9,220.3 L544.7,216.2 L546.3,213.8 L548.0,216.2 L550.4,215.9 L551.1,215.0 L553.9,215.5 L555.6,215.1 L557.4,212.0 L558.1,209.4 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Indonesia</name>
        <labelrank>2</labelrank>
        <country-abbrev>Indo.</country-abbrev>
        <subregion>South-Eastern Asia</subregion>
        <region-wb>East Asia &amp; Pacific</region-wb>
        <iso-a3>IDN</iso-a3>
        <iso-a2>ID</iso-a2>
        <woe-id>23424846</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.38</hc-middle-x>
        <hc-middle-y>0.40</hc-middle-y>
        <hc-key>id</hc-key>
        <hc-a2>ID</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="MU" d="M446.7,256.6 L446.6,257.3 L446.1,257.4 L446.4,256.4 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Mauritius</name>
        <labelrank>5</labelrank>
        <country-abbrev>Mus.</country-abbrev>
        <subregion>Eastern Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>MUS</iso-a3>
        <iso-a2>MU</iso-a2>
        <woe-id>23424894</woe-id>
        <continent>Seven seas (open ocean)</continent>
        <hc-middle-x>0.62</hc-middle-x>
        <hc-middle-y>0.58</hc-middle-y>
        <hc-key>mu</hc-key>
        <hc-a2>MU</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="TT" d="M219.4,197.1 L219.2,198.4 L218.3,198.1 L217.9,197.3 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Trinidad and Tobago</name>
        <labelrank>5</labelrank>
        <country-abbrev>Tr.T.</country-abbrev>
        <subregion>Caribbean</subregion>
        <region-wb>Latin America &amp; Caribbean</region-wb>
        <iso-a3>TTO</iso-a3>
        <iso-a2>TT</iso-a2>
        <woe-id>23424958</woe-id>
        <continent>North America</continent>
        <hc-middle-x>0.46</hc-middle-x>
        <hc-middle-y>0.44</hc-middle-y>
        <hc-key>tt</hc-key>
        <hc-a2>TT</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="SW" d="M185.4,187.3 L185.4,187.3 L185.4,187.3 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Serranilla Bank</name>
        <labelrank>5</labelrank>
        <country-abbrev>S.B.</country-abbrev>
        <subregion>Caribbean</subregion>
        <region-wb>Latin America &amp; Caribbean</region-wb>
        <iso-a3>-99</iso-a3>
        <iso-a2>SW</iso-a2>
        <woe-id>-99</woe-id>
        <continent>North America</continent>
        <hc-middle-x>0.86</hc-middle-x>
        <hc-middle-y>0.57</hc-middle-y>
        <hc-key>sw</hc-key>
        <hc-a2>SW</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="BS" d="M188.1,167.4 L189.1,168.0 L187.1,169.8 L187.4,171.7 L185.8,169.9 L187.9,169.0 Z M191.6,170.8 L191.6,170.8 L191.6,170.8 L191.6,170.8 L191.6,170.8 L191.6,170.8 L191.6,170.8 Z M191.6,170.8 L192.7,173.2 L190.5,171.8 L191.6,170.8 L191.6,170.8 Z M191.6,170.8 L190.1,169.9 L189.6,168.5 L191.2,169.9 L191.6,170.8 L191.6,170.8 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>The Bahamas</name>
        <labelrank>4</labelrank>
        <country-abbrev>Bhs.</country-abbrev>
        <subregion>Caribbean</subregion>
        <region-wb>Latin America &amp; Caribbean</region-wb>
        <iso-a3>BHS</iso-a3>
        <iso-a2>BS</iso-a2>
        <woe-id>23424758</woe-id>
        <continent>North America</continent>
        <hc-middle-x>0.14</hc-middle-x>
        <hc-middle-y>0.56</hc-middle-y>
        <hc-key>bs</hc-key>
        <hc-a2>BS</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="PW" d="M593.9,203.8 L593.9,203.6 L594.0,203.3 L594.2,203.3 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Palau</name>
        <labelrank>6</labelrank>
        <country-abbrev>Palau</country-abbrev>
        <subregion>Micronesia</subregion>
        <region-wb>East Asia &amp; Pacific</region-wb>
        <iso-a3>PLW</iso-a3>
        <iso-a2>PW</iso-a2>
        <woe-id>23424927</woe-id>
        <continent>Oceania</continent>
        <hc-middle-x>0.36</hc-middle-x>
        <hc-middle-y>0.46</hc-middle-y>
        <hc-key>pw</hc-key>
        <hc-a2>PW</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="TV" d="M679.6,234.1 L679.6,233.9 L679.6,234.1 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Tuvalu</name>
        <labelrank>6</labelrank>
        <country-abbrev>Tuv.</country-abbrev>
        <subregion>Polynesia</subregion>
        <region-wb>East Asia &amp; Pacific</region-wb>
        <iso-a3>TUV</iso-a3>
        <iso-a2>TV</iso-a2>
        <woe-id>23424970</woe-id>
        <continent>Oceania</continent>
        <hc-middle-x>0.52</hc-middle-x>
        <hc-middle-y>0.49</hc-middle-y>
        <hc-key>tv</hc-key>
        <hc-a2>TV</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="MH" d="M664.0,204.2 L664.3,204.3 L664.4,204.3 L664.2,204.3 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Marshall Islands</name>
        <labelrank>6</labelrank>
        <country-abbrev>M. Is.</country-abbrev>
        <subregion>Micronesia</subregion>
        <region-wb>East Asia &amp; Pacific</region-wb>
        <iso-a3>MHL</iso-a3>
        <iso-a2>MH</iso-a2>
        <woe-id>23424932</woe-id>
        <continent>Oceania</continent>
        <hc-middle-x>0.49</hc-middle-x>
        <hc-middle-y>0.60</hc-middle-y>
        <hc-key>mh</hc-key>
        <hc-a2>MH</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="CL" d="M195.3,330.5 L200.0,332.6 L199.7,333.3 L195.3,332.5 Z M191.9,316.8 L192.7,316.6 L193.5,321.4 L191.5,324.0 L192.3,321.8 L191.2,321.1 L191.2,317.3 Z M195.0,303.8 L194.8,306.1 L192.8,306.8 L193.8,305.3 L194.2,302.5 Z M194.7,307.5 L195.0,309.1 L194.3,311.9 L194.0,309.4 L192.8,309.1 Z M202.1,335.0 L205.9,334.7 L208.5,335.7 L204.6,335.4 L207.4,337.3 Z M204.6,328.8 L204.5,334.4 L204.4,334.4 L204.5,334.4 L204.5,334.6 L204.5,334.6 L198.0,334.0 L200.1,333.5 L200.3,331.9 L201.5,330.9 L201.1,329.7 L203.1,328.3 Z M201.2,253.1 L202.0,252.9 L202.9,251.5 L203.9,254.3 L204.8,255.3 L204.3,256.6 L205.4,258.9 L206.0,262.0 L207.3,262.0 L207.0,264.5 L204.7,266.0 L205.1,270.6 L204.2,270.7 L201.9,275.4 L200.8,280.0 L201.6,281.9 L202.3,285.7 L201.5,286.4 L201.2,289.6 L199.9,290.6 L199.7,293.2 L200.3,295.4 L199.2,296.0 L198.2,300.0 L197.8,305.2 L198.8,307.4 L198.0,309.3 L199.4,310.6 L198.5,311.7 L198.7,313.9 L197.1,316.9 L197.5,317.9 L195.1,320.9 L195.9,323.9 L197.5,323.7 L197.2,326.0 L198.3,327.1 L202.0,327.1 L204.9,328.0 L203.6,327.6 L200.6,329.0 L200.0,331.8 L195.8,330.3 L192.5,326.1 L194.6,325.9 L193.3,324.0 L193.8,316.6 L194.1,315.0 L191.0,313.8 L193.4,311.8 L194.4,312.4 L195.6,309.7 L195.3,309.1 L196.7,305.2 L196.4,302.7 L194.7,302.3 L194.4,300.6 L195.7,297.2 L194.9,293.3 L195.8,292.0 L196.9,288.6 L197.7,287.6 L199.2,281.7 L198.8,277.2 L199.5,276.5 L199.0,274.5 L200.2,271.8 L201.1,267.1 L200.8,262.6 L201.8,259.2 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Chile</name>
        <labelrank>2</labelrank>
        <country-abbrev>Chile</country-abbrev>
        <subregion>South America</subregion>
        <region-wb>Latin America &amp; Caribbean</region-wb>
        <iso-a3>CHL</iso-a3>
        <iso-a2>CL</iso-a2>
        <woe-id>23424782</woe-id>
        <continent>South America</continent>
        <hc-middle-x>0.51</hc-middle-x>
        <hc-middle-y>0.90</hc-middle-y>
        <hc-key>cl</hc-key>
        <hc-a2>CL</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="KI" d="M34.4,214.0 L34.5,214.3 L34.7,214.5 L34.4,214.3 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Kiribati</name>
        <labelrank>6</labelrank>
        <country-abbrev>Kir.</country-abbrev>
        <subregion>Micronesia</subregion>
        <region-wb>East Asia &amp; Pacific</region-wb>
        <iso-a3>KIR</iso-a3>
        <iso-a2>KI</iso-a2>
        <woe-id>23424867</woe-id>
        <continent>Oceania</continent>
        <hc-middle-x>0.29</hc-middle-x>
        <hc-middle-y>0.58</hc-middle-y>
        <hc-key>ki</hc-key>
        <hc-a2>KI</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="PH" d="M569.8,194.3 L572.2,195.9 L573.1,198.6 L574.9,198.7 L571.9,200.6 L570.7,199.0 L571.1,197.4 L569.8,197.9 Z M574.4,195.5 L575.8,195.3 L574.3,193.8 L576.0,193.7 L576.8,196.3 L575.8,196.3 L576.3,198.8 L574.5,196.9 Z M573.2,202.9 L571.5,203.9 L570.9,203.1 L569.9,205.6 L570.2,202.9 L573.3,201.4 L573.5,202.2 L575.3,200.5 L576.7,200.6 L576.6,198.5 L578.5,202.1 L578.8,203.9 L578.0,205.8 L577.2,203.8 L576.4,207.2 L574.2,206.0 Z M560.8,201.8 L565.7,196.0 L565.9,194.2 L566.8,194.7 L565.2,196.8 L565.6,197.7 Z M569.4,191.0 L568.5,194.4 L566.8,191.9 L568.0,190.0 L566.3,189.4 L565.7,186.4 L566.7,187.0 L567.3,182.1 L569.9,182.6 L571.0,184.9 L568.7,188.4 L569.6,188.9 L569.4,190.6 L570.8,190.3 L574.1,191.9 L573.9,195.4 L572.7,194.5 L572.4,192.9 L571.0,191.0 L571.1,192.6 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Philippines</name>
        <labelrank>2</labelrank>
        <country-abbrev>Phil.</country-abbrev>
        <subregion>South-Eastern Asia</subregion>
        <region-wb>East Asia &amp; Pacific</region-wb>
        <iso-a3>PHL</iso-a3>
        <iso-a2>PH</iso-a2>
        <woe-id>23424934</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.40</hc-middle-x>
        <hc-middle-y>0.17</hc-middle-y>
        <hc-key>ph</hc-key>
        <hc-a2>PH</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="TH" d="M528.0,205.5 L524.8,201.9 L524.4,200.5 L525.4,198.0 L527.1,195.2 L526.1,191.5 L524.3,188.8 L525.2,186.5 L522.7,182.1 L524.0,179.6 L525.0,179.8 L528.0,178.6 L528.7,180.1 L530.2,180.1 L529.9,184.2 L531.8,182.7 L532.9,183.5 L534.3,182.3 L535.4,182.5 L537.0,184.4 L536.9,186.0 L538.6,187.8 L537.7,190.3 L533.7,190.4 L532.2,191.8 L533.4,195.5 L531.3,193.5 L529.4,193.5 L529.6,192.0 L527.8,192.1 L527.8,194.5 L526.2,198.5 L526.3,200.2 L527.5,200.1 L528.1,203.5 L531.7,205.9 L529.9,207.1 L529.8,205.9 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Thailand</name>
        <labelrank>3</labelrank>
        <country-abbrev>Thai.</country-abbrev>
        <subregion>South-Eastern Asia</subregion>
        <region-wb>East Asia &amp; Pacific</region-wb>
        <iso-a3>THA</iso-a3>
        <iso-a2>TH</iso-a2>
        <woe-id>23424960</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.26</hc-middle-x>
        <hc-middle-y>0.49</hc-middle-y>
        <hc-key>th</hc-key>
        <hc-a2>TH</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="GD" d="M218.0,194.8 L217.8,194.8 L217.9,194.4 L218.0,194.5 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Grenada</name>
        <labelrank>6</labelrank>
        <country-abbrev>Gren.</country-abbrev>
        <subregion>Caribbean</subregion>
        <region-wb>Latin America &amp; Caribbean</region-wb>
        <iso-a3>GRD</iso-a3>
        <iso-a2>GD</iso-a2>
        <woe-id>23424826</woe-id>
        <continent>North America</continent>
        <hc-middle-x>0.61</hc-middle-x>
        <hc-middle-y>0.59</hc-middle-y>
        <hc-key>gd</hc-key>
        <hc-a2>GD</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="AG" d="M217.7,184.9 L217.9,185.0 L217.6,185.1 L217.5,184.9 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Antigua and Barbuda</name>
        <labelrank>6</labelrank>
        <country-abbrev>Ant.B.</country-abbrev>
        <subregion>Caribbean</subregion>
        <region-wb>Latin America &amp; Caribbean</region-wb>
        <iso-a3>ATG</iso-a3>
        <iso-a2>AG</iso-a2>
        <woe-id>23424737</woe-id>
        <continent>North America</continent>
        <hc-middle-x>0.50</hc-middle-x>
        <hc-middle-y>0.40</hc-middle-y>
        <hc-key>ag</hc-key>
        <hc-a2>AG</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="ES" d="M306.6,163.3 L304.6,162.7 L303.3,162.8 L305.2,161.9 Z M339.9,131.7 L339.8,131.6 L339.9,131.6 L339.9,131.7 Z M330.5,147.6 L330.5,147.7 L330.5,147.7 Z M325.8,146.3 L326.0,146.3 L325.9,146.4 L325.8,146.4 Z M325.8,145.8 L324.3,145.4 L323.7,144.0 L321.9,143.5 L322.7,139.4 L322.8,134.9 L324.2,133.7 L323.5,132.9 L319.3,132.8 L318.3,130.6 L321.0,128.6 L322.3,129.1 L329.3,129.2 L332.7,129.5 L336.0,131.1 L338.8,131.3 L339.0,131.7 L339.4,131.5 L340.0,131.9 L342.2,131.7 L342.3,132.8 L340.1,134.3 L338.0,134.9 L335.5,138.3 L336.3,139.8 L339.1,139.2 L342.2,137.3 L342.0,138.9 L340.7,138.3 L338.7,139.8 L335.1,141.0 L334.8,142.5 L332.9,143.1 L332.0,144.5 L327.6,144.5 L325.9,145.8 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Spain</name>
        <labelrank>2</labelrank>
        <country-abbrev>Sp.</country-abbrev>
        <subregion>Southern Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>ESP</iso-a3>
        <iso-a2>ES</iso-a2>
        <woe-id>23424950</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.76</hc-middle-x>
        <hc-middle-y>0.27</hc-middle-y>
        <hc-key>es</hc-key>
        <hc-a2>ES</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="BB" d="M222.1,192.8 L221.9,192.7 L221.9,192.2 L222.2,192.7 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Barbados</name>
        <labelrank>5</labelrank>
        <country-abbrev>Barb.</country-abbrev>
        <subregion>Caribbean</subregion>
        <region-wb>Latin America &amp; Caribbean</region-wb>
        <iso-a3>BRB</iso-a3>
        <iso-a2>BB</iso-a2>
        <woe-id>23424754</woe-id>
        <continent>North America</continent>
        <hc-middle-x>0.16</hc-middle-x>
        <hc-middle-y>0.56</hc-middle-y>
        <hc-key>bb</hc-key>
        <hc-a2>BB</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="IT" d="M365.2,143.5 L365.0,144.7 L359.9,142.1 L360.6,141.3 L362.5,141.8 L365.8,141.0 Z M352.3,136.5 L351.8,135.3 L353.8,134.4 L354.9,136.1 L354.4,139.2 L352.6,139.7 Z M362.4,122.1 L361.7,122.6 L362.4,124.3 L359.5,125.0 L359.8,127.5 L362.2,129.1 L363.1,131.3 L365.1,132.8 L366.8,132.8 L366.8,134.0 L370.6,135.8 L371.6,137.0 L368.8,136.1 L367.8,137.9 L369.0,138.6 L366.9,141.8 L367.1,140.0 L366.0,137.1 L362.4,134.4 L361.1,134.5 L356.3,130.6 L355.5,128.0 L352.8,127.1 L350.5,128.5 L348.8,125.5 L349.6,123.5 L351.6,122.7 L353.2,123.7 L354.2,122.1 L356.1,121.2 L359.3,120.9 Z M360.0,132.9 L360.0,132.9 L360.0,132.9 L360.0,132.9 Z M360.0,128.3 L360.0,128.1 L359.9,128.1 L359.8,128.2 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Italy</name>
        <labelrank>2</labelrank>
        <country-abbrev>Italy</country-abbrev>
        <subregion>Southern Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>ITA</iso-a3>
        <iso-a2>IT</iso-a2>
        <woe-id>23424853</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.79</hc-middle-x>
        <hc-middle-y>0.71</hc-middle-y>
        <hc-key>it</hc-key>
        <hc-a2>IT</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="MT" d="M363.6,146.0 L363.9,146.3 L364.0,146.5 L363.6,146.4 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Malta</name>
        <labelrank>5</labelrank>
        <country-abbrev>Malta</country-abbrev>
        <subregion>Southern Europe</subregion>
        <region-wb>Middle East &amp; North Africa</region-wb>
        <iso-a3>MLT</iso-a3>
        <iso-a2>MT</iso-a2>
        <woe-id>23424897</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.48</hc-middle-x>
        <hc-middle-y>0.53</hc-middle-y>
        <hc-key>mt</hc-key>
        <hc-a2>MT</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="MV" d="M477.1,213.8 L477.0,214.3 L476.7,214.4 L476.5,214.2 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Maldives</name>
        <labelrank>5</labelrank>
        <country-abbrev>Mald.</country-abbrev>
        <subregion>Southern Asia</subregion>
        <region-wb>South Asia</region-wb>
        <iso-a3>MDV</iso-a3>
        <iso-a2>MV</iso-a2>
        <woe-id>23424899</woe-id>
        <continent>Seven seas (open ocean)</continent>
        <hc-middle-x>0.67</hc-middle-x>
        <hc-middle-y>0.59</hc-middle-y>
        <hc-key>mv</hc-key>
        <hc-a2>MV</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="SP" d="M558.1,197.3 L558.1,197.3 L558.1,197.3 L558.1,197.3 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Spratly Islands</name>
        <labelrank>6</labelrank>
        <country-abbrev>Spratly Is.</country-abbrev>
        <subregion>South-Eastern Asia</subregion>
        <region-wb>East Asia &amp; Pacific</region-wb>
        <iso-a3>-99</iso-a3>
        <iso-a2>SP</iso-a2>
        <woe-id>23424921</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.56</hc-middle-x>
        <hc-middle-y>0.51</hc-middle-y>
        <hc-key>sp</hc-key>
        <hc-a2>SP</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="PG" d="M623.0,220.8 L624.0,222.3 L627.5,224.0 L629.6,225.9 L629.2,227.0 L628.0,224.6 L623.5,222.5 Z M606.3,235.2 L606.3,231.0 L606.3,222.8 L613.1,225.1 L615.6,227.1 L615.4,228.1 L618.7,229.2 L619.5,230.6 L617.8,230.7 L618.2,232.0 L620.0,233.2 L620.8,235.0 L623.6,236.2 L624.0,235.4 L626.0,237.3 L624.3,237.6 L619.7,237.2 L618.0,235.9 L616.1,233.2 L611.6,232.3 L611.0,234.9 L609.5,235.6 Z M622.9,229.8 L620.4,228.6 L618.1,228.2 L624.8,228.4 L626.9,227.0 L626.6,225.8 L628.2,226.0 L627.6,228.2 L624.5,229.8 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Papua New Guinea</name>
        <labelrank>2</labelrank>
        <country-abbrev>P.N.G.</country-abbrev>
        <subregion>Melanesia</subregion>
        <region-wb>East Asia &amp; Pacific</region-wb>
        <iso-a3>PNG</iso-a3>
        <iso-a2>PG</iso-a2>
        <woe-id>23424926</woe-id>
        <continent>Oceania</continent>
        <hc-middle-x>0.28</hc-middle-x>
        <hc-middle-y>0.55</hc-middle-y>
        <hc-key>pg</hc-key>
        <hc-a2>PG</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="SG" d="M535.2,215.1 L535.4,215.2 L535.1,215.4 L534.8,215.3 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Singapore</name>
        <labelrank>6</labelrank>
        <country-abbrev>Sing.</country-abbrev>
        <subregion>South-Eastern Asia</subregion>
        <region-wb>East Asia &amp; Pacific</region-wb>
        <iso-a3>SGP</iso-a3>
        <iso-a2>SG</iso-a2>
        <woe-id>23424948</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.51</hc-middle-x>
        <hc-middle-y>0.58</hc-middle-y>
        <hc-key>sg</hc-key>
        <hc-a2>SG</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="CNM" d="M401.1,148.1 L401.3,148.1 L401.3,148.1 L401.1,148.2 L401.1,148.1 L401.1,148.1 L401.1,148.1 Z M398.6,147.9 L398.6,147.9 L398.6,147.9 L398.7,147.9 L398.7,147.9 L398.6,147.9 Z M398.8,147.9 L398.8,147.9 L398.8,147.9 L398.9,147.9 L398.9,147.9 Z M400.7,148.2 L400.7,148.2 L400.7,148.3 L400.2,147.9 L398.9,147.9 L398.9,147.9 L400.1,147.8 L400.7,148.2 L400.7,148.2 L400.7,148.2 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Cyprus No Mans Area</name>
        <labelrank>9</labelrank>
        <country-abbrev>NULL</country-abbrev>
        <subregion>Western Asia</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>-99</iso-a3>
        <iso-a2>NULL</iso-a2>
        <woe-id>-99</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.39</hc-middle-x>
        <hc-middle-y>0.10</hc-middle-y>
        <hc-key>cnm</hc-key>
        <hc-a2>CN</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="GB" d="M401.1,148.1 L401.1,148.1 L401.1,148.1 Z M222.5,325.7 L220.0,327.7 L220.2,325.9 L221.9,325.4 L225.1,325.5 L225.5,326.3 L221.6,328.0 Z M401.1,148.4 L401.0,148.4 L400.9,148.3 L400.9,148.3 L400.9,148.3 L400.9,148.3 L400.8,148.3 L400.8,148.3 L400.8,148.3 L400.7,148.3 L400.7,148.3 L400.7,148.2 L400.7,148.2 L400.7,148.2 L400.8,148.2 L401.1,148.1 L401.1,148.1 L400.9,148.2 Z M400.8,148.3 L400.8,148.2 L400.8,148.2 L400.8,148.3 Z M325.9,145.8 L325.9,145.9 L325.8,145.8 Z M399.4,149.1 L399.2,149.0 L398.9,149.0 L399.0,148.9 Z M322.2,100.5 L324.4,100.1 L325.5,101.6 L324.1,103.0 L322.1,103.0 L320.4,102.1 Z M321.6,93.6 L322.6,91.8 L324.1,91.1 L323.1,92.8 L324.8,94.6 L325.0,92.9 L326.5,90.7 L329.6,90.7 L329.7,89.3 L331.3,89.4 L329.9,91.6 L328.3,92.7 L329.4,93.3 L332.4,93.4 L332.7,94.0 L330.0,97.8 L333.0,99.1 L334.0,101.7 L336.0,103.0 L336.7,105.7 L338.6,106.1 L339.5,107.2 L337.8,109.6 L338.7,110.7 L336.6,111.7 L333.6,111.5 L329.4,112.2 L329.1,113.0 L325.7,113.1 L328.2,110.5 L330.3,110.5 L326.0,108.7 L328.1,107.8 L328.2,105.3 L330.0,104.9 L330.8,103.0 L329.1,102.0 L329.6,101.0 L327.8,101.2 L327.8,102.2 L326.3,101.1 L327.3,99.3 L326.1,98.2 L325.0,99.8 L323.7,98.4 L325.2,97.4 L323.5,96.2 L324.9,95.9 L325.2,94.7 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>United Kingdom</name>
        <labelrank>2</labelrank>
        <country-abbrev>U.K.</country-abbrev>
        <subregion>Northern Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>GBR</iso-a3>
        <iso-a2>GB</iso-a2>
        <woe-id>-90</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.62</hc-middle-x>
        <hc-middle-y>0.07</hc-middle-y>
        <hc-key>gb</hc-key>
        <hc-a2>GB</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="CY" d="M400.8,148.3 L400.8,148.3 L400.8,148.2 L400.8,148.2 Z M400.8,148.3 L400.8,148.3 L400.9,148.3 L400.9,148.3 L400.9,148.3 Z M401.3,148.1 L401.5,148.3 L401.1,148.4 L400.9,148.2 L401.1,148.1 L401.1,148.2 Z M400.7,148.3 L400.5,148.7 L399.4,149.1 L399.0,148.9 L398.9,149.0 L398.0,148.1 L398.6,147.9 L398.6,147.9 L398.7,147.9 L398.8,147.9 L398.8,147.9 L398.9,147.9 L398.9,147.9 L398.9,147.9 L398.9,147.9 L400.2,147.9 L400.7,148.3 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Cyprus</name>
        <labelrank>5</labelrank>
        <country-abbrev>Cyp.</country-abbrev>
        <subregion>Western Asia</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>CYP</iso-a3>
        <iso-a2>CY</iso-a2>
        <woe-id>-90</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.39</hc-middle-x>
        <hc-middle-y>0.51</hc-middle-y>
        <hc-key>cy</hc-key>
        <hc-a2>CY</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="GR" d="M388.0,147.3 L386.4,148.2 L383.5,148.4 L382.6,147.5 Z M376.4,135.7 L376.6,135.5 L376.4,135.7 L376.3,135.5 L376.3,135.4 L376.4,135.3 L376.6,135.3 L378.1,134.7 L380.0,134.2 L383.1,133.7 L384.6,134.4 L386.6,133.3 L387.2,134.1 L386.0,135.6 L384.1,137.6 L385.1,135.3 L381.5,135.7 L379.4,137.1 L381.3,140.0 L383.1,139.9 L382.0,141.1 L383.5,143.8 L385.6,143.6 L386.3,141.0 L387.2,142.2 L386.0,144.0 L383.4,144.1 L382.6,142.7 L380.6,141.8 L379.7,142.7 L380.6,145.2 L377.7,144.5 L377.4,142.7 L376.0,142.5 L375.5,140.2 L376.7,139.5 L374.7,138.9 L374.4,137.9 L375.2,137.6 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Greece</name>
        <labelrank>3</labelrank>
        <country-abbrev>Greece</country-abbrev>
        <subregion>Southern Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>GRC</iso-a3>
        <iso-a2>GR</iso-a2>
        <woe-id>23424833</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.29</hc-middle-x>
        <hc-middle-y>0.45</hc-middle-y>
        <hc-key>gr</hc-key>
        <hc-a2>GR</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="KM" d="M419.4,240.6 L419.0,240.4 L419.1,239.6 L419.3,239.6 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Comoros</name>
        <labelrank>6</labelrank>
        <country-abbrev>Com.</country-abbrev>
        <subregion>Eastern Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>COM</iso-a3>
        <iso-a2>KM</iso-a2>
        <woe-id>23424786</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.37</hc-middle-x>
        <hc-middle-y>0.51</hc-middle-y>
        <hc-key>km</hc-key>
        <hc-a2>KM</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="FJ" d="M675.7,250.7 L676.3,251.5 L677.8,250.2 L680.7,248.9 L681.4,250.1 L679.7,249.9 L678.0,251.5 L678.2,254.4 L677.5,253.0 L676.0,252.7 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Fiji</name>
        <labelrank>6</labelrank>
        <country-abbrev>Fiji</country-abbrev>
        <subregion>Melanesia</subregion>
        <region-wb>East Asia &amp; Pacific</region-wb>
        <iso-a3>FJI</iso-a3>
        <iso-a2>FJ</iso-a2>
        <woe-id>23424813</woe-id>
        <continent>Oceania</continent>
        <hc-middle-x>0.45</hc-middle-x>
        <hc-middle-y>0.35</hc-middle-y>
        <hc-key>fj</hc-key>
        <hc-a2>FJ</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="RU" d="M432.1,59.1 L429.2,59.9 L428.7,58.0 L430.5,57.2 L432.3,58.1 Z M449.9,54.3 L452.0,55.8 L450.3,56.5 L448.4,55.3 Z M472.5,43.6 L473.5,44.1 L470.0,44.8 L470.2,43.4 Z M553.4,39.9 L552.3,40.9 L549.8,39.9 L550.8,39.2 Z M445.7,16.0 L442.9,16.4 L443.4,15.4 L448.1,14.8 L448.8,17.4 Z M440.6,14.9 L440.4,15.9 L437.0,16.1 L437.4,15.1 L440.4,15.6 Z M443.7,12.0 L448.5,12.2 L445.2,13.9 L443.1,14.1 L439.6,13.2 Z M460.1,11.5 L461.5,12.8 L457.1,13.8 L456.0,13.1 L458.8,12.5 Z M447.1,9.2 L448.0,10.3 L446.7,11.8 L443.1,11.6 Z M511.0,17.1 L512.0,16.6 L515.7,17.2 L513.6,18.3 Z M684.3,52.0 L681.1,52.1 L678.9,52.8 L679.0,51.2 L681.6,50.0 L684.2,50.2 L686.0,51.2 Z M605.6,41.4 L608.4,41.5 L611.0,42.9 L610.5,44.3 L605.4,43.1 Z M620.9,36.6 L625.2,36.9 L624.8,37.8 L620.1,38.1 L616.1,36.5 L620.6,35.8 Z M427.2,13.1 L428.6,13.2 L424.4,14.9 L422.5,14.0 Z M586.3,131.5 L587.4,130.6 L587.7,127.9 L587.1,126.1 L589.1,125.2 L589.8,126.8 L590.7,125.6 L592.8,122.7 L593.2,120.3 L594.4,119.2 L593.7,117.6 L590.1,119.2 L587.2,119.3 L586.8,117.7 L584.3,115.0 L581.6,114.7 L579.4,110.9 L578.6,108.1 L577.1,106.0 L573.0,104.4 L567.8,105.2 L566.2,106.5 L567.6,108.2 L566.3,109.3 L564.5,112.6 L564.8,113.3 L561.8,114.8 L559.8,114.0 L557.2,113.8 L555.2,112.9 L552.8,114.6 L548.3,115.7 L544.1,115.2 L543.0,113.7 L538.0,112.4 L534.8,113.2 L532.2,112.2 L532.0,110.2 L527.8,109.2 L525.6,108.2 L523.6,111.0 L524.5,112.3 L522.6,114.2 L517.5,113.5 L516.7,112.1 L513.0,111.4 L504.4,115.6 L503.5,115.8 L502.1,114.6 L499.5,114.6 L496.0,111.1 L492.2,111.7 L490.7,110.3 L490.3,110.7 L490.3,110.7 L489.5,111.4 L485.4,105.2 L482.8,103.4 L482.9,103.2 L483.0,102.9 L483.4,102.1 L476.8,104.8 L477.0,103.4 L476.3,103.4 L472.5,103.0 L471.8,99.9 L470.7,100.3 L468.2,99.5 L466.8,100.8 L461.1,102.4 L458.3,102.7 L453.4,103.3 L453.1,107.6 L451.4,108.8 L454.3,110.4 L453.7,111.6 L451.0,111.7 L449.5,111.8 L449.0,111.8 L448.8,111.6 L447.9,110.7 L446.7,111.3 L444.4,110.9 L442.8,112.2 L440.5,111.4 L438.4,109.8 L433.1,109.4 L431.5,110.6 L430.5,111.3 L429.4,112.1 L429.0,113.8 L428.9,114.0 L428.7,113.8 L427.3,112.4 L426.0,114.0 L426.2,115.5 L425.2,117.5 L426.4,118.9 L428.2,119.1 L429.9,121.6 L430.5,122.5 L427.4,124.0 L425.6,127.0 L427.3,128.6 L427.1,130.3 L429.2,133.0 L429.2,133.0 L428.8,133.6 L426.7,134.3 L425.1,132.9 L423.1,131.6 L422.1,130.9 L420.3,131.4 L417.4,129.8 L414.0,129.1 L412.7,129.5 L410.8,127.7 L406.2,125.2 L408.4,125.0 L408.4,121.7 L411.4,120.9 L409.4,120.7 L410.5,118.9 L412.3,118.9 L412.2,116.0 L413.0,115.4 L411.2,113.9 L407.9,112.5 L404.5,112.7 L403.4,110.6 L401.6,110.4 L400.9,107.6 L397.0,108.2 L396.3,105.4 L398.8,104.8 L397.0,103.8 L395.1,101.2 L395.3,99.1 L390.1,97.6 L389.1,95.7 L388.5,93.8 L388.9,93.0 L389.1,92.5 L390.0,92.9 L389.2,89.7 L389.4,89.5 L389.5,89.2 L389.7,88.9 L389.8,88.8 L389.9,88.8 L389.9,88.8 L389.9,88.8 L389.9,88.8 L389.9,88.8 L390.1,88.7 L390.0,88.4 L389.8,88.3 L392.0,86.8 L391.1,84.7 L389.4,85.3 L392.1,83.2 L396.0,79.5 L396.6,78.3 L393.6,75.8 L394.7,74.3 L392.8,71.9 L393.4,68.4 L391.9,66.1 L393.6,63.3 L391.0,61.6 L390.7,60.5 L391.6,58.9 L394.2,56.9 L395.2,56.2 L402.5,58.1 L405.0,58.4 L409.8,61.1 L414.7,63.3 L415.4,65.5 L413.6,67.5 L411.5,68.3 L408.8,68.5 L400.3,66.4 L397.9,65.2 L399.2,67.1 L402.2,68.4 L403.0,69.7 L402.1,70.7 L403.1,72.4 L404.6,71.4 L407.0,71.4 L411.9,73.3 L413.5,72.2 L412.4,70.0 L415.3,68.6 L417.7,66.3 L420.8,69.1 L421.4,66.6 L420.1,65.0 L420.9,61.4 L419.1,60.3 L424.2,60.8 L425.7,62.8 L423.0,63.2 L422.3,64.5 L424.0,65.9 L427.6,65.6 L427.8,63.7 L429.6,63.2 L434.2,60.6 L438.5,59.2 L439.6,61.1 L443.4,60.1 L446.0,60.4 L449.0,58.9 L449.4,60.9 L452.8,59.2 L451.4,57.0 L452.6,56.1 L459.0,57.1 L464.5,59.4 L466.9,61.2 L468.5,59.2 L467.4,59.1 L466.5,57.3 L464.1,56.9 L465.2,53.1 L463.5,53.2 L464.4,51.0 L467.4,49.1 L468.3,46.0 L469.5,45.4 L473.3,45.2 L475.7,46.0 L475.8,47.6 L473.8,50.2 L475.4,51.7 L474.9,54.6 L475.2,59.2 L477.3,60.6 L476.2,61.6 L473.3,66.7 L471.0,67.7 L474.1,68.0 L477.0,66.1 L479.3,63.3 L478.8,60.0 L482.5,59.0 L484.3,60.5 L483.9,63.1 L485.9,61.4 L485.0,59.3 L480.8,58.1 L477.5,58.3 L477.0,56.4 L478.5,53.8 L476.1,50.7 L477.0,49.2 L479.7,48.2 L479.9,46.2 L478.1,44.8 L479.6,44.6 L481.0,42.9 L483.2,43.2 L480.9,45.9 L480.4,48.7 L481.8,51.2 L486.1,51.2 L482.4,50.1 L481.8,48.9 L483.6,48.4 L485.8,49.0 L485.4,47.5 L487.8,44.6 L488.3,47.1 L492.8,49.6 L494.9,49.3 L495.3,50.6 L493.8,51.1 L495.0,52.1 L495.6,54.5 L496.7,53.9 L495.5,51.2 L496.4,49.9 L493.6,47.5 L490.8,46.6 L490.0,43.8 L491.0,42.8 L503.3,41.7 L499.7,38.3 L502.8,38.9 L502.8,38.0 L506.9,35.6 L515.4,34.1 L514.4,33.2 L517.4,33.2 L519.7,32.3 L518.8,30.9 L520.5,29.6 L520.9,32.1 L519.9,33.0 L521.0,34.0 L525.3,32.7 L527.3,33.3 L525.6,31.4 L529.4,31.4 L529.5,29.6 L534.0,26.8 L536.9,26.6 L539.0,27.2 L537.7,28.7 L542.1,29.9 L540.1,31.5 L542.8,31.4 L543.0,30.6 L549.1,30.5 L551.8,31.1 L551.9,32.6 L553.4,32.7 L554.0,35.1 L551.8,34.1 L553.8,36.3 L546.8,39.9 L543.2,42.6 L541.5,42.6 L540.0,44.2 L542.6,44.3 L548.7,42.4 L546.0,42.0 L547.0,41.1 L551.5,42.3 L552.9,41.6 L553.6,43.0 L557.3,42.3 L558.3,39.8 L558.8,42.4 L563.1,42.7 L563.2,44.1 L566.5,45.0 L571.8,45.3 L572.3,43.5 L574.9,41.5 L575.2,42.3 L578.4,43.4 L579.6,42.9 L584.2,44.8 L582.6,46.8 L584.4,47.6 L583.2,48.3 L581.2,47.0 L584.8,51.6 L587.0,52.9 L588.2,52.5 L590.1,49.0 L592.3,50.5 L593.9,50.8 L596.7,49.8 L598.7,50.2 L602.1,49.8 L604.5,50.4 L602.9,47.9 L603.6,46.7 L607.4,45.7 L614.8,46.5 L614.2,47.6 L620.5,47.4 L623.7,48.8 L623.5,49.7 L626.7,51.0 L627.8,52.5 L630.6,52.6 L635.0,51.7 L639.9,52.2 L642.2,53.2 L643.0,54.6 L642.2,55.9 L644.8,57.5 L646.4,56.8 L650.5,56.3 L652.0,57.0 L656.1,57.3 L658.6,55.5 L660.8,56.0 L660.4,57.0 L658.3,56.6 L658.7,58.1 L661.2,59.7 L663.7,59.0 L663.1,55.2 L672.5,56.0 L678.0,57.3 L683.3,59.8 L687.8,62.7 L690.1,63.4 L691.8,67.1 L692.5,65.7 L697.0,65.7 L700.0,68.3 L699.2,70.0 L696.1,70.3 L695.2,72.9 L696.0,73.7 L693.4,74.0 L689.0,71.9 L688.9,70.6 L686.9,70.0 L683.9,70.3 L683.1,68.6 L681.5,68.4 L682.5,69.9 L681.7,71.5 L677.7,73.0 L673.5,72.2 L674.8,73.2 L677.8,73.9 L678.4,76.8 L680.4,78.9 L679.1,79.9 L675.9,79.3 L669.6,81.6 L665.8,84.4 L663.5,85.4 L662.7,86.9 L660.5,85.2 L656.3,85.9 L654.5,87.3 L655.0,85.5 L652.6,86.6 L649.7,86.7 L648.8,88.2 L650.0,90.1 L651.6,90.1 L649.5,91.3 L648.7,89.8 L646.6,92.3 L649.2,93.3 L648.1,95.9 L649.2,97.5 L646.9,97.6 L646.2,99.0 L646.9,101.1 L642.9,102.8 L642.1,105.2 L640.2,106.2 L638.5,109.7 L636.6,111.1 L635.3,106.1 L634.2,99.9 L635.2,95.9 L637.9,93.0 L640.9,91.3 L642.5,89.3 L646.4,86.3 L646.5,85.6 L650.5,82.9 L650.7,80.2 L652.8,79.8 L651.6,79.0 L649.0,79.5 L648.6,82.4 L647.4,82.0 L643.1,85.2 L642.4,84.2 L643.4,81.2 L637.9,81.7 L633.1,85.8 L631.4,88.2 L633.6,89.2 L630.1,89.0 L626.2,90.1 L625.1,88.3 L622.8,87.5 L621.6,89.0 L611.9,88.5 L608.8,89.3 L606.2,91.4 L605.4,92.9 L601.9,95.3 L598.3,98.9 L595.3,100.9 L598.5,101.7 L598.1,103.8 L600.8,100.6 L599.3,103.2 L600.4,104.4 L602.0,102.5 L604.0,102.5 L607.2,105.5 L607.2,108.6 L606.2,109.5 L605.3,112.2 L605.7,113.4 L604.8,117.4 L601.6,121.0 L600.8,122.8 L596.6,127.1 L595.1,129.2 L591.3,131.1 L588.6,130.0 L586.6,132.0 L586.5,131.8 Z M376.3,99.9 L375.5,100.8 L376.9,100.0 L379.8,100.9 L379.7,102.4 L379.6,102.4 L374.0,102.2 L375.2,101.5 L373.7,102.1 L373.7,102.1 L373.7,102.1 L374.5,100.8 L376.2,99.9 L376.3,99.9 Z M617.4,126.9 L618.3,126.3 L618.3,126.3 L617.6,126.9 L617.4,126.9 Z M617.4,126.9 L615.5,128.2 L616.2,126.9 L617.4,126.9 Z M454.3,11.9 L454.6,9.8 L455.9,9.4 L454.2,12.3 L455.1,14.1 L453.1,15.1 L449.7,14.5 L451.2,12.4 Z M610.5,108.8 L612.6,115.4 L610.7,115.1 L609.3,118.4 L610.9,122.0 L609.1,121.8 L608.5,123.6 L607.9,121.9 L608.6,118.6 L608.0,116.6 L608.6,113.3 L608.8,110.8 L607.7,109.1 L607.8,104.9 L609.8,104.1 L610.7,105.5 Z M444.3,44.1 L442.2,47.4 L443.6,51.2 L446.6,53.0 L445.6,53.8 L442.3,53.0 L438.3,52.6 L438.8,51.4 L437.5,50.8 L437.7,52.2 L434.9,50.1 L435.5,48.0 L436.6,48.2 L438.0,44.4 L441.4,43.3 Z M607.1,32.8 L609.3,34.0 L612.0,34.1 L614.8,35.4 L612.7,37.2 L609.0,38.1 L608.0,37.4 L602.6,38.7 L600.4,38.0 L598.4,36.0 L596.8,35.7 L595.7,35.9 L596.2,34.1 L597.1,35.0 L599.8,34.4 L599.5,33.7 L602.3,32.6 L606.3,35.0 Z M467.3,29.6 L468.2,31.2 L464.8,33.1 L453.8,36.1 L449.5,39.5 L447.6,39.0 L447.8,40.5 L444.9,44.0 L441.6,43.3 L438.9,42.1 L441.1,41.2 L442.5,38.7 L445.4,35.9 L447.6,35.1 L448.7,33.9 L453.2,33.2 L453.2,32.4 L455.7,32.7 L458.8,32.3 L464.4,29.7 Z M526.4,25.2 L531.3,19.6 L535.1,20.5 L537.7,22.0 L539.4,24.3 L537.8,23.4 L534.9,24.3 L530.1,24.6 L527.8,25.6 Z M513.1,19.4 L516.6,17.9 L518.2,16.4 L523.2,16.1 L524.7,17.4 L526.2,16.6 L527.9,18.2 L526.6,22.0 L523.5,22.0 L521.6,21.2 L518.2,21.0 L515.8,18.9 Z M425.5,15.5 L431.2,14.0 L430.0,13.4 L432.7,12.3 L435.2,13.9 L431.4,14.7 L432.4,16.9 L431.0,16.2 Z M522.4,15.8 L517.3,16.3 L515.7,16.9 L511.5,15.6 L513.9,14.6 L513.5,13.5 L511.2,12.0 L513.4,13.4 L514.5,12.4 L519.7,11.1 L523.8,13.8 L522.4,14.0 Z M618.3,126.3 L619.6,125.2 L621.3,124.9 L619.2,125.7 L618.3,126.3 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Russia</name>
        <labelrank>2</labelrank>
        <country-abbrev>Rus.</country-abbrev>
        <subregion>Eastern Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>RUS</iso-a3>
        <iso-a2>RU</iso-a2>
        <woe-id>23424936</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.58</hc-middle-x>
        <hc-middle-y>0.57</hc-middle-y>
        <hc-key>ru</hc-key>
        <hc-a2>RU</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="VA" d="M360.0,132.9 L360.0,132.9 L360.0,132.9 L360.0,132.9 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Vatican</name>
        <labelrank>6</labelrank>
        <country-abbrev>Vat.</country-abbrev>
        <subregion>Southern Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>VAT</iso-a3>
        <iso-a2>VA</iso-a2>
        <woe-id>23424986</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.61</hc-middle-x>
        <hc-middle-y>0.44</hc-middle-y>
        <hc-key>va</hc-key>
        <hc-a2>VA</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="SM" d="M360.0,128.3 L359.8,128.2 L359.9,128.1 L360.0,128.1 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>San Marino</name>
        <labelrank>6</labelrank>
        <country-abbrev>S.M.</country-abbrev>
        <subregion>Southern Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>SMR</iso-a3>
        <iso-a2>SM</iso-a2>
        <woe-id>23424947</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.48</hc-middle-x>
        <hc-middle-y>0.42</hc-middle-y>
        <hc-key>sm</hc-key>
        <hc-a2>SM</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="AZ" d="M423.3,135.9 L423.3,135.8 L423.4,135.8 L423.3,135.9 Z M422.4,134.9 L422.4,134.9 L422.3,134.8 L422.4,134.8 Z M422.8,135.0 L422.7,135.0 L422.7,135.0 L422.7,135.0 Z M428.8,133.6 L429.2,133.0 L431.7,136.4 L430.9,137.1 L429.8,140.7 L428.1,139.9 L427.8,137.9 L425.3,139.7 L423.6,137.2 L424.2,136.7 L422.4,134.3 L425.2,134.9 L425.1,132.9 L426.7,134.3 L428.2,133.9 L428.5,133.8 Z M422.0,138.0 L421.9,137.9 L423.9,138.2 L424.5,139.8 L423.2,139.5 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Azerbaijan</name>
        <labelrank>5</labelrank>
        <country-abbrev>Aze.</country-abbrev>
        <subregion>Western Asia</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>AZE</iso-a3>
        <iso-a2>AZ</iso-a2>
        <woe-id>23424741</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.84</hc-middle-x>
        <hc-middle-y>0.25</hc-middle-y>
        <hc-key>az</hc-key>
        <hc-a2>AZ</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="LS" d="M390.5,273.9 L392.5,275.3 L392.0,276.5 L389.3,278.0 L387.9,275.9 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Lesotho</name>
        <labelrank>6</labelrank>
        <country-abbrev>Les.</country-abbrev>
        <subregion>Southern Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>LSO</iso-a3>
        <iso-a2>LS</iso-a2>
        <woe-id>23424880</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.53</hc-middle-x>
        <hc-middle-y>0.50</hc-middle-y>
        <hc-key>ls</hc-key>
        <hc-a2>LS</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="TJ" d="M471.5,135.1 L471.5,135.1 L471.3,135.0 L471.5,135.0 Z M471.5,137.6 L471.6,137.6 L471.4,137.8 L471.2,137.5 Z M477.2,138.5 L477.6,140.4 L479.4,140.6 L479.7,143.4 L476.6,142.9 L473.4,144.6 L473.3,141.9 L471.7,140.7 L470.6,142.7 L469.4,142.6 L466.5,144.1 L466.0,143.5 L467.1,141.3 L466.6,139.5 L465.2,139.0 L467.4,138.3 L469.2,135.4 L471.1,134.9 L472.1,136.7 L469.0,137.3 L468.9,138.3 L473.6,138.8 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Tajikistan</name>
        <labelrank>4</labelrank>
        <country-abbrev>Tjk.</country-abbrev>
        <subregion>Central Asia</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>TJK</iso-a3>
        <iso-a2>TJ</iso-a2>
        <woe-id>23424961</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.49</hc-middle-x>
        <hc-middle-y>0.50</hc-middle-y>
        <hc-key>tj</hc-key>
        <hc-a2>TJ</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="ML" d="M338.3,177.0 L339.7,178.7 L342.3,179.6 L342.5,181.2 L344.2,180.9 L344.1,186.3 L342.8,188.3 L338.7,188.5 L336.5,189.2 L334.7,188.9 L332.2,190.6 L331.4,190.4 L329.5,192.6 L328.5,192.0 L327.4,194.6 L326.0,195.2 L325.5,197.9 L324.1,197.3 L322.8,198.3 L320.8,198.4 L318.9,194.1 L315.6,195.1 L314.3,194.1 L312.9,191.5 L312.6,189.5 L313.6,188.0 L315.5,188.2 L325.5,188.1 L323.5,169.2 L326.9,169.2 L326.9,169.2 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Mali</name>
        <labelrank>3</labelrank>
        <country-abbrev>Mali</country-abbrev>
        <subregion>Western Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>MLI</iso-a3>
        <iso-a2>ML</iso-a2>
        <woe-id>23424891</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.59</hc-middle-x>
        <hc-middle-y>0.38</hc-middle-y>
        <hc-key>ml</hc-key>
        <hc-a2>ML</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="DZ" d="M338.3,177.0 L326.9,169.2 L326.9,169.2 L326.9,169.2 L325.5,168.3 L319.5,164.5 L319.5,163.7 L319.5,161.7 L321.5,160.2 L325.1,159.7 L329.1,157.4 L329.1,155.4 L331.3,154.4 L333.7,154.5 L334.1,153.6 L332.9,152.1 L332.7,148.8 L331.8,148.1 L338.1,145.0 L341.7,144.3 L345.3,144.1 L346.1,144.7 L350.3,143.7 L352.6,144.0 L351.9,149.0 L350.4,150.7 L351.0,152.1 L353.4,154.5 L354.4,158.4 L354.9,160.7 L355.0,166.1 L354.1,166.9 L355.3,169.5 L358.3,170.7 L359.0,172.2 L350.5,177.5 L347.3,180.2 L344.2,180.9 L342.5,181.2 L342.3,179.6 L339.7,178.7 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Algeria</name>
        <labelrank>3</labelrank>
        <country-abbrev>Alg.</country-abbrev>
        <subregion>Northern Africa</subregion>
        <region-wb>Middle East &amp; North Africa</region-wb>
        <iso-a3>DZA</iso-a3>
        <iso-a2>DZ</iso-a2>
        <woe-id>23424740</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.63</hc-middle-x>
        <hc-middle-y>0.49</hc-middle-y>
        <hc-key>dz</hc-key>
        <hc-a2>DZ</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="TW" d="M566.4,172.5 L568.1,169.1 L569.6,169.6 L568.8,172.9 L567.7,175.4 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Taiwan</name>
        <labelrank>3</labelrank>
        <country-abbrev>Taiwan</country-abbrev>
        <subregion>Eastern Asia</subregion>
        <region-wb>East Asia &amp; Pacific</region-wb>
        <iso-a3>TWN</iso-a3>
        <iso-a2>TW</iso-a2>
        <woe-id>23424971</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.45</hc-middle-x>
        <hc-middle-y>0.48</hc-middle-y>
        <hc-key>tw</hc-key>
        <hc-a2>TW</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="KZ" d="M489.8,132.3 L487.8,130.9 L481.3,130.6 L478.3,129.8 L477.0,131.7 L473.8,130.8 L472.1,132.1 L468.4,134.1 L467.6,135.9 L466.3,134.5 L463.9,134.5 L463.6,132.7 L462.6,132.7 L462.2,130.7 L460.6,128.8 L455.0,129.3 L453.1,127.2 L451.2,126.1 L450.8,123.6 L452.0,123.2 L448.7,123.6 L448.4,124.4 L443.4,125.7 L443.4,134.2 L442.3,134.3 L440.0,132.0 L438.6,132.5 L438.6,132.5 L438.6,132.5 L438.6,132.5 L437.9,132.8 L437.9,132.8 L437.9,132.8 L437.9,132.8 L436.6,133.3 L437.1,131.0 L435.6,130.8 L432.5,126.5 L434.6,124.9 L436.9,124.7 L438.1,121.6 L434.3,120.6 L430.5,122.5 L429.8,122.2 L429.5,122.0 L429.9,121.6 L430.0,121.5 L428.2,119.1 L426.4,118.9 L425.2,117.5 L426.2,115.5 L426.0,114.0 L427.3,112.4 L428.3,113.5 L428.4,113.6 L428.6,113.9 L428.7,113.8 L429.0,113.8 L429.8,113.5 L429.7,112.1 L430.0,111.8 L430.3,111.6 L430.5,111.3 L430.8,110.8 L431.5,110.6 L431.9,110.5 L432.3,110.4 L432.6,110.2 L433.1,109.4 L438.4,109.8 L440.5,111.4 L442.8,112.2 L444.4,110.9 L446.0,111.3 L446.3,111.4 L446.3,111.3 L446.4,111.3 L446.7,111.3 L446.8,111.2 L446.8,110.7 L447.9,110.7 L448.4,111.4 L448.5,111.6 L448.7,111.6 L448.8,111.6 L449.5,111.8 L450.7,112.2 L451.0,111.7 L451.1,111.4 L453.7,111.6 L454.3,110.4 L451.4,108.8 L453.1,107.6 L453.9,105.4 L453.7,105.2 L453.4,105.2 L453.4,103.3 L454.6,103.3 L454.6,103.4 L454.9,103.5 L458.3,102.7 L466.8,100.8 L468.2,99.5 L470.7,100.3 L471.8,99.9 L472.5,103.0 L475.3,102.9 L476.3,103.4 L477.0,103.6 L476.7,103.9 L476.6,104.0 L476.8,104.8 L477.5,104.4 L477.5,104.4 L477.8,104.2 L483.4,102.1 L483.0,103.0 L483.0,102.9 L482.7,102.9 L482.5,102.9 L482.9,103.2 L485.4,105.2 L489.4,111.6 L490.3,111.1 L490.3,111.0 L490.3,110.7 L490.2,110.6 L490.3,110.7 L492.2,111.7 L496.0,111.1 L498.6,113.2 L498.7,113.3 L499.0,113.4 L499.5,114.6 L499.9,114.5 L500.0,114.6 L500.2,114.5 L502.1,114.6 L503.5,115.8 L500.5,117.5 L500.0,120.8 L498.6,121.4 L495.2,120.4 L493.8,124.4 L489.6,125.7 L491.0,130.1 Z M452.0,123.2 L452.3,123.2 L452.3,123.1 L452.3,123.1 L453.4,122.8 L452.6,121.7 L451.1,122.0 L452.3,123.1 L452.3,123.1 Z M448.7,124.6 L449.4,123.8 L450.0,125.4 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Kazakhstan</name>
        <labelrank>3</labelrank>
        <country-abbrev>Kaz.</country-abbrev>
        <subregion>Central Asia</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>KAZ</iso-a3>
        <iso-a2>KZ</iso-a2>
        <woe-id>-90</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.57</hc-middle-x>
        <hc-middle-y>0.46</hc-middle-y>
        <hc-key>kz</hc-key>
        <hc-a2>KZ</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="KG" d="M472.1,132.1 L473.8,130.8 L477.0,131.7 L478.3,129.8 L481.3,130.6 L487.8,130.9 L489.8,132.3 L486.3,134.1 L485.8,134.9 L483.2,135.1 L481.2,136.6 L479.5,136.1 L477.2,138.5 L473.6,138.8 L468.9,138.3 L469.0,137.3 L472.1,136.7 L473.5,136.9 L476.2,135.5 L473.6,134.0 L472.5,134.7 L470.6,133.7 Z M471.5,137.6 L471.2,137.5 L471.4,137.8 L471.6,137.6 Z M473.6,137.5 L473.7,137.3 L473.6,137.3 L473.5,137.4 Z M472.5,137.1 L472.1,136.9 L472.3,137.3 L472.6,137.5 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Kyrgyzstan</name>
        <labelrank>4</labelrank>
        <country-abbrev>Kgz.</country-abbrev>
        <subregion>Central Asia</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>KGZ</iso-a3>
        <iso-a2>KG</iso-a2>
        <woe-id>23424864</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.45</hc-middle-x>
        <hc-middle-y>0.11</hc-middle-y>
        <hc-key>kg</hc-key>
        <hc-a2>KG</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="UZ" d="M473.6,137.5 L473.5,137.4 L473.6,137.3 L473.7,137.3 Z M472.5,137.1 L472.6,137.5 L472.3,137.3 L472.1,136.9 Z M448.7,124.6 L450.0,125.4 L449.6,126.3 L450.9,127.5 L451.2,126.1 L453.1,127.2 L455.0,129.3 L460.6,128.8 L462.2,130.7 L462.6,132.7 L463.6,132.7 L463.9,134.5 L466.3,134.5 L467.6,135.9 L468.4,134.1 L472.1,132.1 L470.6,133.7 L472.5,134.7 L473.6,134.0 L476.2,135.5 L473.5,136.9 L472.1,136.7 L471.1,134.9 L469.2,135.4 L467.4,138.3 L465.2,139.0 L466.6,139.5 L467.1,141.3 L466.0,143.5 L465.0,143.5 L463.6,143.1 L463.7,141.6 L461.8,141.2 L455.8,137.2 L454.7,134.7 L451.3,134.1 L451.2,132.2 L448.4,130.9 L446.6,132.3 L445.8,132.0 L445.5,132.9 L445.4,134.4 L443.4,134.2 L443.4,125.7 L448.4,124.4 L447.9,127.0 Z M471.5,135.1 L471.5,135.0 L471.3,135.0 L471.5,135.1 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Uzbekistan</name>
        <labelrank>3</labelrank>
        <country-abbrev>Uzb.</country-abbrev>
        <subregion>Central Asia</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>UZB</iso-a3>
        <iso-a2>UZ</iso-a2>
        <woe-id>23424980</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.22</hc-middle-x>
        <hc-middle-y>0.22</hc-middle-y>
        <hc-key>uz</hc-key>
        <hc-a2>UZ</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="TZ" d="M403.1,239.9 L403.1,239.8 L403.0,239.6 L403.0,239.6 L403.0,239.6 L402.8,239.5 L402.7,239.3 L402.7,239.3 L402.7,239.3 L402.2,236.8 L401.8,236.3 L401.6,236.1 L401.6,236.1 L401.6,236.1 L401.4,236.0 L401.4,236.0 L401.4,236.0 L401.2,236.0 L401.1,236.4 L400.1,236.1 L399.2,235.8 L397.4,235.1 L395.8,234.2 L394.7,231.1 L393.1,229.8 L392.9,226.3 L395.2,223.5 L394.7,222.4 L395.2,220.8 L394.5,219.8 L395.2,219.7 L397.0,219.7 L397.0,219.8 L397.1,219.7 L397.1,219.7 L396.7,222.2 L399.8,222.6 L401.0,222.0 L401.4,219.8 L408.3,223.6 L408.2,224.5 L411.2,226.7 L410.4,229.3 L411.7,230.9 L411.4,233.7 L412.2,236.8 L413.6,237.8 L407.8,240.2 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>United Republic of Tanzania</name>
        <labelrank>3</labelrank>
        <country-abbrev>Tanz.</country-abbrev>
        <subregion>Eastern Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>TZA</iso-a3>
        <iso-a2>TZ</iso-a2>
        <woe-id>23424973</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.64</hc-middle-x>
        <hc-middle-y>0.61</hc-middle-y>
        <hc-key>tz</hc-key>
        <hc-a2>TZ</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="AR" d="M204.5,334.4 L204.7,334.6 L204.5,334.6 L204.5,334.6 Z M204.5,334.4 L204.6,329.4 L204.6,328.8 L204.9,330.5 L207.1,332.4 L212.1,334.7 L208.6,335.1 Z M224.6,281.9 L223.9,285.8 L226.6,288.4 L226.4,289.9 L227.5,291.4 L225.7,294.2 L222.9,295.4 L219.5,296.1 L217.2,296.0 L216.6,300.3 L213.9,301.0 L211.7,300.0 L211.4,302.9 L213.8,303.1 L214.2,304.6 L212.6,304.1 L212.6,305.2 L210.9,306.8 L210.4,310.0 L209.2,309.9 L207.1,311.4 L206.5,312.7 L208.1,314.7 L209.7,314.8 L209.7,317.2 L206.6,319.6 L206.1,321.9 L204.1,322.9 L203.5,324.5 L204.9,328.0 L202.0,327.1 L198.3,327.1 L197.2,326.0 L197.5,323.7 L195.9,323.9 L195.1,320.9 L197.5,317.9 L197.1,316.9 L198.7,313.9 L198.5,311.7 L199.4,310.6 L198.0,309.3 L198.8,307.4 L197.8,305.2 L198.2,300.0 L199.2,296.0 L200.3,295.4 L199.7,293.2 L199.9,290.6 L201.2,289.6 L201.5,286.4 L202.3,285.7 L201.6,281.9 L200.8,280.0 L201.9,275.4 L204.2,270.7 L205.1,270.6 L204.7,266.0 L207.0,264.5 L207.3,262.0 L209.2,260.0 L212.3,260.8 L212.8,262.1 L213.5,260.4 L216.0,260.8 L219.2,264.0 L221.0,264.4 L225.8,267.4 L223.8,271.2 L229.2,271.4 L231.1,269.8 L231.5,267.6 L232.8,267.7 L232.9,270.8 L229.2,273.0 L225.7,277.1 L224.8,279.8 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Argentina</name>
        <labelrank>2</labelrank>
        <country-abbrev>Arg.</country-abbrev>
        <subregion>South America</subregion>
        <region-wb>Latin America &amp; Caribbean</region-wb>
        <iso-a3>ARG</iso-a3>
        <iso-a2>AR</iso-a2>
        <woe-id>23424747</woe-id>
        <continent>South America</continent>
        <hc-middle-x>0.45</hc-middle-x>
        <hc-middle-y>0.27</hc-middle-y>
        <hc-key>ar</hc-key>
        <hc-a2>AR</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="SA" d="M434.3,169.9 L434.4,170.6 L434.9,170.7 L436.9,173.4 L441.9,173.8 L442.7,175.3 L441.5,179.2 L435.7,181.2 L430.3,181.9 L428.4,182.9 L427.0,184.9 L422.7,184.3 L418.8,184.5 L418.1,186.4 L415.1,181.8 L414.6,180.2 L412.1,178.3 L411.0,176.6 L411.0,174.1 L409.8,171.6 L408.0,170.7 L403.6,162.9 L402.5,162.8 L403.1,160.2 L405.1,160.6 L408.9,157.8 L406.9,155.8 L411.1,154.4 L413.6,154.9 L416.8,156.6 L421.8,160.6 L425.3,160.8 L427.0,161.0 L428.9,161.9 L429.8,163.8 L432.2,165.8 L432.2,167.7 L433.5,169.7 L433.8,170.1 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Saudi Arabia</name>
        <labelrank>2</labelrank>
        <country-abbrev>Saud.</country-abbrev>
        <subregion>Western Asia</subregion>
        <region-wb>Middle East &amp; North Africa</region-wb>
        <iso-a3>SAU</iso-a3>
        <iso-a2>SA</iso-a2>
        <woe-id>23424938</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.45</hc-middle-x>
        <hc-middle-y>0.53</hc-middle-y>
        <hc-key>sa</hc-key>
        <hc-a2>SA</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="NL" d="M215.3,183.1 L215.2,183.1 L215.2,183.0 Z M342.5,110.1 L343.5,110.2 L344.2,110.1 L343.6,110.5 Z M349.9,105.3 L349.6,107.9 L347.5,109.0 L347.6,111.7 L345.7,109.8 L344.3,110.1 L343.9,109.2 L345.5,105.3 L348.5,104.5 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Netherlands</name>
        <labelrank>5</labelrank>
        <country-abbrev>Neth.</country-abbrev>
        <subregion>Western Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>NLD</iso-a3>
        <iso-a2>NL</iso-a2>
        <woe-id>-90</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.98</hc-middle-x>
        <hc-middle-y>0.04</hc-middle-y>
        <hc-key>nl</hc-key>
        <hc-a2>NL</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="YE" d="M435.7,181.2 L437.2,184.5 L437.9,185.8 L436.3,186.6 L436.2,187.8 L430.2,190.0 L425.6,192.1 L423.6,192.2 L422.1,193.4 L420.3,193.7 L419.0,192.5 L417.9,187.6 L418.1,186.4 L418.8,184.5 L422.7,184.3 L427.0,184.9 L428.4,182.9 L430.3,181.9 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Yemen</name>
        <labelrank>3</labelrank>
        <country-abbrev>Yem.</country-abbrev>
        <subregion>Western Asia</subregion>
        <region-wb>Middle East &amp; North Africa</region-wb>
        <iso-a3>YEM</iso-a3>
        <iso-a2>YE</iso-a2>
        <woe-id>23425002</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.35</hc-middle-x>
        <hc-middle-y>0.54</hc-middle-y>
        <hc-key>ye</hc-key>
        <hc-a2>YE</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="AE" d="M444.0,167.9 L444.1,168.1 L444.2,169.2 L443.0,169.5 L441.9,173.8 L436.9,173.4 L434.9,170.7 L435.4,171.2 L438.8,171.1 L440.5,170.4 L443.6,167.0 L443.7,167.8 Z M444.0,168.7 L444.1,168.6 L443.9,168.5 L443.9,168.8 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>United Arab Emirates</name>
        <labelrank>4</labelrank>
        <country-abbrev>U.A.E.</country-abbrev>
        <subregion>Western Asia</subregion>
        <region-wb>Middle East &amp; North Africa</region-wb>
        <iso-a3>ARE</iso-a3>
        <iso-a2>AE</iso-a2>
        <woe-id>23424738</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.59</hc-middle-x>
        <hc-middle-y>0.65</hc-middle-y>
        <hc-key>ae</hc-key>
        <hc-a2>AE</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="IN" d="M506.8,175.0 L506.8,175.3 L506.8,175.6 L505.2,175.1 L502.5,176.9 L501.7,179.2 L499.9,179.9 L497.3,182.6 L493.8,185.1 L493.9,185.9 L489.9,187.7 L489.5,189.0 L490.1,192.2 L489.2,194.8 L489.2,198.2 L484.7,202.4 L482.8,200.8 L480.9,195.4 L479.5,193.2 L478.4,189.6 L476.9,186.9 L475.4,179.5 L475.8,178.2 L475.1,174.9 L474.3,176.8 L472.2,177.8 L470.4,176.9 L468.3,174.6 L470.6,174.1 L467.6,172.8 L466.8,171.5 L466.8,171.5 L466.8,171.5 L467.3,171.3 L467.8,170.6 L470.2,170.9 L472.3,169.8 L469.2,165.5 L470.9,163.0 L471.9,163.7 L473.8,163.1 L475.8,160.9 L476.7,159.0 L479.2,156.6 L478.9,155.3 L480.5,154.1 L478.5,153.0 L477.5,149.6 L478.5,148.8 L481.3,149.3 L483.8,148.0 L485.2,147.2 L486.1,149.0 L487.4,149.6 L487.1,151.4 L488.4,153.3 L486.3,153.6 L488.6,156.9 L491.3,158.5 L489.5,161.3 L494.7,164.1 L498.2,164.4 L500.6,166.0 L504.9,166.2 L505.0,163.3 L505.9,162.8 L506.5,164.5 L508.3,165.7 L512.6,165.2 L511.7,163.5 L513.6,163.2 L517.5,160.3 L518.7,160.9 L520.4,160.2 L522.6,162.6 L521.6,164.4 L518.3,166.2 L518.5,167.0 L516.5,171.5 L514.9,171.1 L515.1,173.0 L514.3,175.2 L513.5,175.3 L512.7,171.7 L511.6,173.3 L510.8,172.0 L512.6,170.4 L512.4,168.8 L509.3,168.9 L508.3,167.3 L505.7,166.2 L504.9,167.3 L506.5,168.8 L504.8,169.9 L506.2,170.8 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>India</name>
        <labelrank>2</labelrank>
        <country-abbrev>India</country-abbrev>
        <subregion>Southern Asia</subregion>
        <region-wb>South Asia</region-wb>
        <iso-a3>IND</iso-a3>
        <iso-a2>IN</iso-a2>
        <woe-id>23424848</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.35</hc-middle-x>
        <hc-middle-y>0.44</hc-middle-y>
        <hc-key>in</hc-key>
        <hc-a2>IN</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="TR" d="M389.8,132.7 L391.7,135.0 L388.9,135.0 L387.5,135.9 L386.0,135.6 L387.2,134.1 L386.6,133.3 L388.4,132.5 Z M422.0,138.0 L420.6,138.6 L420.9,141.8 L421.9,143.6 L418.0,143.1 L417.3,143.7 L414.1,143.7 L412.3,144.5 L406.4,144.3 L406.4,145.6 L404.9,146.3 L405.1,144.1 L403.9,144.9 L402.3,144.4 L400.7,145.8 L399.0,146.0 L397.5,144.9 L394.9,144.1 L394.4,145.6 L393.0,145.8 L390.4,143.8 L388.4,144.0 L388.3,141.7 L386.4,141.1 L387.9,139.6 L386.1,138.4 L387.4,136.3 L392.0,136.3 L392.1,134.4 L396.0,134.8 L400.0,132.6 L405.0,133.3 L409.6,135.2 L413.0,135.2 L415.7,133.8 L418.2,133.7 L419.4,134.7 L419.8,137.0 L421.9,137.9 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Turkey</name>
        <labelrank>2</labelrank>
        <country-abbrev>Tur.</country-abbrev>
        <subregion>Western Asia</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>TUR</iso-a3>
        <iso-a2>TR</iso-a2>
        <woe-id>23424969</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.33</hc-middle-x>
        <hc-middle-y>0.49</hc-middle-y>
        <hc-key>tr</hc-key>
        <hc-a2>TR</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="BD" d="M506.8,175.6 L506.9,175.3 L506.8,175.0 L506.2,170.8 L504.8,169.9 L506.5,168.8 L504.9,167.3 L505.7,166.2 L508.3,167.3 L509.3,168.9 L512.4,168.8 L512.6,170.4 L510.8,172.0 L511.6,173.3 L512.7,171.7 L513.5,175.3 L513.7,176.6 L512.9,177.1 L511.4,173.7 L510.9,174.8 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Bangladesh</name>
        <labelrank>3</labelrank>
        <country-abbrev>Bang.</country-abbrev>
        <subregion>Southern Asia</subregion>
        <region-wb>South Asia</region-wb>
        <iso-a3>BGD</iso-a3>
        <iso-a2>BD</iso-a2>
        <woe-id>23424759</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.89</hc-middle-x>
        <hc-middle-y>0.74</hc-middle-y>
        <hc-key>bd</hc-key>
        <hc-a2>BD</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="CH" d="M350.6,119.5 L352.3,119.5 L353.7,119.3 L353.7,119.3 L353.7,119.3 L353.7,119.3 L354.3,119.7 L354.4,119.7 L354.6,119.9 L354.4,120.3 L354.3,120.8 L354.5,120.8 L355.5,121.3 L356.1,121.2 L354.2,122.1 L353.2,123.7 L351.6,122.7 L349.6,123.5 L349.2,123.0 L349.1,122.3 L348.8,122.1 L348.3,122.4 L348.0,122.6 L347.9,121.9 L350.6,119.5 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Switzerland</name>
        <labelrank>4</labelrank>
        <country-abbrev>Switz.</country-abbrev>
        <subregion>Western Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>CHE</iso-a3>
        <iso-a2>CH</iso-a2>
        <woe-id>23424957</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.48</hc-middle-x>
        <hc-middle-y>0.53</hc-middle-y>
        <hc-key>ch</hc-key>
        <hc-a2>CH</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="SR" d="M232.3,207.6 L231.7,208.4 L232.6,211.2 L231.4,213.4 L228.6,213.4 L227.9,214.1 L224.8,209.9 L226.4,207.3 L226.9,206.3 L232.5,206.7 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Suriname</name>
        <labelrank>4</labelrank>
        <country-abbrev>Sur.</country-abbrev>
        <subregion>South America</subregion>
        <region-wb>Latin America &amp; Caribbean</region-wb>
        <iso-a3>SUR</iso-a3>
        <iso-a2>SR</iso-a2>
        <woe-id>23424913</woe-id>
        <continent>South America</continent>
        <hc-middle-x>0.93</hc-middle-x>
        <hc-middle-y>0.12</hc-middle-y>
        <hc-key>sr</hc-key>
        <hc-a2>SR</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="PT" d="M321.9,143.5 L318.9,143.9 L319.3,140.9 L317.9,140.1 L319.5,135.0 L319.3,132.8 L323.5,132.9 L324.2,133.7 L322.8,134.9 L322.7,139.4 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Portugal</name>
        <labelrank>2</labelrank>
        <country-abbrev>Port.</country-abbrev>
        <subregion>Southern Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>PRT</iso-a3>
        <iso-a2>PT</iso-a2>
        <woe-id>23424925</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.46</hc-middle-x>
        <hc-middle-y>0.50</hc-middle-y>
        <hc-key>pt</hc-key>
        <hc-a2>PT</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="MY" d="M562.1,209.9 L561.8,209.9 L561.7,209.9 L561.7,209.8 L561.4,209.9 L558.1,209.4 L557.4,212.0 L555.6,215.1 L553.9,215.5 L551.1,215.0 L550.4,215.9 L548.0,216.2 L546.3,213.8 L548.9,214.8 L549.5,212.5 L552.7,211.8 L554.6,209.0 L555.7,210.1 L556.5,208.5 L556.6,208.4 L556.6,208.6 L556.6,208.6 L556.6,209.0 L557.2,209.6 L556.8,208.4 L557.7,207.9 L560.4,203.8 L561.8,206.5 L564.7,207.9 L562.5,208.5 L563.7,209.3 L561.9,209.8 Z M528.0,205.5 L529.8,205.9 L529.9,207.1 L531.7,205.9 L534.4,208.7 L534.4,212.2 L536.0,215.0 L534.2,214.9 L530.2,212.4 L529.2,210.4 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Malaysia</name>
        <labelrank>3</labelrank>
        <country-abbrev>Malay.</country-abbrev>
        <subregion>South-Eastern Asia</subregion>
        <region-wb>East Asia &amp; Pacific</region-wb>
        <iso-a3>MYS</iso-a3>
        <iso-a2>MY</iso-a2>
        <woe-id>23424901</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.89</hc-middle-x>
        <hc-middle-y>0.30</hc-middle-y>
        <hc-key>my</hc-key>
        <hc-a2>MY</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="KH" d="M542.2,189.6 L542.2,194.2 L538.8,196.7 L536.3,197.9 L534.7,197.7 L533.4,195.5 L532.2,191.8 L533.7,190.4 L537.7,190.3 L539.1,191.1 L540.3,189.8 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Cambodia</name>
        <labelrank>3</labelrank>
        <country-abbrev>Camb.</country-abbrev>
        <subregion>South-Eastern Asia</subregion>
        <region-wb>East Asia &amp; Pacific</region-wb>
        <iso-a3>KHM</iso-a3>
        <iso-a2>KH</iso-a2>
        <woe-id>23424776</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.85</hc-middle-x>
        <hc-middle-y>0.48</hc-middle-y>
        <hc-key>kh</hc-key>
        <hc-a2>KH</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="VN" d="M536.3,197.9 L538.8,196.7 L542.2,194.2 L542.2,189.6 L541.8,187.0 L538.2,182.8 L535.1,180.6 L537.3,179.0 L535.5,177.3 L533.7,177.5 L533.5,176.1 L531.8,174.4 L532.5,173.7 L535.4,174.2 L538.0,172.5 L540.7,173.7 L540.5,175.2 L543.1,176.3 L542.7,177.2 L539.3,179.2 L538.5,181.2 L540.5,184.2 L544.6,188.3 L545.6,191.2 L545.1,196.1 L541.7,198.0 L540.2,199.6 L536.9,201.0 L537.0,198.3 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Vietnam</name>
        <labelrank>2</labelrank>
        <country-abbrev>Viet.</country-abbrev>
        <subregion>South-Eastern Asia</subregion>
        <region-wb>East Asia &amp; Pacific</region-wb>
        <iso-a3>VNM</iso-a3>
        <iso-a2>VN</iso-a2>
        <woe-id>23424984</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.93</hc-middle-x>
        <hc-middle-y>0.83</hc-middle-y>
        <hc-key>vn</hc-key>
        <hc-a2>VN</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="BR" d="M233.5,284.2 L234.3,282.6 L234.2,282.3 L231.5,279.8 L228.8,278.4 L227.2,276.9 L225.7,277.1 L229.2,273.0 L232.9,270.8 L232.8,267.7 L231.5,267.6 L231.5,267.5 L231.4,267.3 L232.1,266.5 L232.1,264.5 L229.9,264.3 L229.0,261.0 L225.0,260.4 L225.3,258.3 L224.6,256.7 L225.8,252.8 L224.2,251.0 L224.1,249.2 L220.9,249.1 L220.2,244.2 L217.6,243.7 L215.2,242.0 L212.7,241.6 L210.8,239.1 L210.9,236.6 L208.4,236.7 L205.2,238.8 L202.8,238.7 L200.7,238.8 L200.7,236.1 L197.7,236.9 L194.2,232.2 L195.9,230.1 L196.4,227.6 L200.4,225.8 L202.0,225.9 L203.1,220.1 L201.8,218.0 L202.2,214.5 L205.5,214.5 L207.0,213.8 L207.9,215.5 L209.3,216.4 L213.3,214.7 L214.6,213.2 L213.4,213.1 L212.3,210.0 L214.5,210.2 L218.1,209.7 L219.7,207.9 L221.1,208.1 L222.0,210.3 L221.1,212.7 L222.6,215.2 L226.7,214.0 L227.9,214.1 L228.6,213.4 L231.4,213.4 L235.1,213.3 L237.1,210.1 L237.4,209.3 L239.0,213.7 L240.5,214.6 L239.4,216.6 L240.6,217.8 L238.1,218.3 L237.8,219.8 L239.1,221.1 L238.2,219.4 L239.6,218.0 L240.8,218.1 L243.3,218.3 L242.5,220.5 L239.1,221.2 L239.4,221.5 L241.7,221.5 L244.6,218.8 L247.6,219.6 L249.2,221.1 L249.9,220.4 L251.7,223.1 L252.4,222.1 L255.2,223.2 L259.5,223.2 L262.4,224.8 L264.8,227.2 L268.0,227.6 L269.4,231.5 L268.4,235.4 L265.4,238.4 L263.2,242.0 L261.4,243.2 L261.6,248.2 L261.1,251.8 L260.0,253.5 L260.0,255.2 L257.4,259.4 L257.6,260.3 L255.5,262.3 L250.4,262.6 L246.1,265.0 L242.9,268.5 L242.5,273.8 L240.6,275.5 L238.1,279.8 L239.0,277.4 L237.9,277.1 L236.6,279.5 L235.3,283.3 L233.8,284.6 L233.5,284.4 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Brazil</name>
        <labelrank>2</labelrank>
        <country-abbrev>Brazil</country-abbrev>
        <subregion>South America</subregion>
        <region-wb>Latin America &amp; Caribbean</region-wb>
        <iso-a3>BRA</iso-a3>
        <iso-a2>BR</iso-a2>
        <woe-id>23424768</woe-id>
        <continent>South America</continent>
        <hc-middle-x>0.55</hc-middle-x>
        <hc-middle-y>0.36</hc-middle-y>
        <hc-key>br</hc-key>
        <hc-a2>BR</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="PA" d="M177.8,199.5 L178.5,200.6 L181.2,200.8 L183.7,199.4 L186.6,200.2 L187.8,201.3 L188.2,202.7 L186.8,204.0 L185.8,202.4 L186.4,201.6 L184.5,200.6 L181.9,202.1 L182.8,203.5 L179.7,203.8 L179.6,202.4 L177.2,202.5 L177.4,199.5 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Panama</name>
        <labelrank>4</labelrank>
        <country-abbrev>Pan.</country-abbrev>
        <subregion>Central America</subregion>
        <region-wb>Latin America &amp; Caribbean</region-wb>
        <iso-a3>PAN</iso-a3>
        <iso-a2>PA</iso-a2>
        <woe-id>23424924</woe-id>
        <continent>North America</continent>
        <hc-middle-x>0.22</hc-middle-x>
        <hc-middle-y>0.46</hc-middle-y>
        <hc-key>pa</hc-key>
        <hc-a2>PA</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="NG" d="M341.3,205.7 L341.3,205.7 L341.3,205.1 L341.4,200.5 L343.5,197.5 L343.0,195.4 L344.0,192.0 L346.8,191.2 L349.3,192.9 L351.0,192.3 L354.6,193.3 L356.6,192.2 L360.0,192.8 L362.2,191.5 L363.1,192.8 L364.2,194.5 L360.8,199.9 L360.7,200.9 L358.3,204.8 L358.0,205.2 L357.8,205.5 L355.5,204.5 L353.1,206.7 L352.6,208.5 L352.6,208.6 L352.6,208.6 L352.6,208.6 L347.5,209.5 L344.6,205.7 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Nigeria</name>
        <labelrank>2</labelrank>
        <country-abbrev>Nigeria</country-abbrev>
        <subregion>Western Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>NGA</iso-a3>
        <iso-a2>NG</iso-a2>
        <woe-id>23424908</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.36</hc-middle-x>
        <hc-middle-y>0.33</hc-middle-y>
        <hc-key>ng</hc-key>
        <hc-a2>NG</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="IR" d="M421.9,143.6 L420.9,141.8 L420.6,138.6 L422.0,138.0 L423.2,139.5 L424.5,139.8 L425.0,139.7 L425.3,139.7 L427.8,137.9 L428.1,139.9 L429.8,140.7 L430.3,142.5 L432.2,143.0 L434.0,144.5 L435.6,144.8 L439.6,144.3 L439.4,143.2 L442.3,141.5 L445.8,141.1 L446.0,141.8 L448.8,142.4 L451.8,144.7 L453.2,144.7 L453.5,146.9 L452.0,150.2 L452.7,155.8 L454.3,156.0 L454.5,157.2 L452.7,159.2 L454.7,161.9 L456.4,162.5 L457.1,165.9 L454.7,166.7 L454.2,168.8 L450.9,168.5 L446.0,167.6 L445.4,165.4 L444.1,164.7 L441.1,166.1 L438.9,165.8 L436.6,163.8 L434.6,163.1 L432.1,158.5 L429.8,158.2 L429.1,159.0 L427.5,156.8 L427.8,155.2 L426.8,153.7 L424.8,152.6 L423.1,150.5 L424.8,146.5 L423.0,146.1 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Iran</name>
        <labelrank>2</labelrank>
        <country-abbrev>Iran</country-abbrev>
        <subregion>Southern Asia</subregion>
        <region-wb>Middle East &amp; North Africa</region-wb>
        <iso-a3>IRN</iso-a3>
        <iso-a2>IR</iso-a2>
        <woe-id>23424851</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.58</hc-middle-x>
        <hc-middle-y>0.51</hc-middle-y>
        <hc-key>ir</hc-key>
        <hc-a2>IR</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="HT" d="M198.3,182.2 L198.2,182.2 L198.2,182.1 L198.2,182.1 Z M198.1,182.0 L198.2,182.2 L198.3,182.2 L198.7,182.5 L198.5,183.1 L195.0,182.6 L194.0,181.9 L196.7,182.3 L196.8,180.3 L195.9,179.3 L198.6,179.8 L198.7,181.6 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Haiti</name>
        <labelrank>5</labelrank>
        <country-abbrev>Haiti</country-abbrev>
        <subregion>Caribbean</subregion>
        <region-wb>Latin America &amp; Caribbean</region-wb>
        <iso-a3>HTI</iso-a3>
        <iso-a2>HT</iso-a2>
        <woe-id>23424839</woe-id>
        <continent>North America</continent>
        <hc-middle-x>0.82</hc-middle-x>
        <hc-middle-y>0.95</hc-middle-y>
        <hc-key>ht</hc-key>
        <hc-a2>HT</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="DO" d="M198.2,182.1 L198.2,182.0 L198.1,182.0 L198.7,181.6 L198.6,179.8 L200.0,179.3 L202.1,179.9 L202.7,181.0 L205.1,181.9 L204.0,182.3 L200.6,182.3 L199.2,183.9 L198.5,183.1 L198.7,182.5 L198.3,182.2 L198.3,182.2 L198.2,182.1 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Dominican Republic</name>
        <labelrank>5</labelrank>
        <country-abbrev>Dom. Rep.</country-abbrev>
        <subregion>Caribbean</subregion>
        <region-wb>Latin America &amp; Caribbean</region-wb>
        <iso-a3>DOM</iso-a3>
        <iso-a2>DO</iso-a2>
        <woe-id>23424800</woe-id>
        <continent>North America</continent>
        <hc-middle-x>0.46</hc-middle-x>
        <hc-middle-y>0.38</hc-middle-y>
        <hc-key>do</hc-key>
        <hc-a2>DO</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="SL" d="M314.1,204.6 L311.3,203.4 L310.6,200.5 L312.1,199.0 L314.5,198.7 L316.4,201.6 L315.8,203.0 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Sierra Leone</name>
        <labelrank>4</labelrank>
        <country-abbrev>S.L.</country-abbrev>
        <subregion>Western Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>SLE</iso-a3>
        <iso-a2>SL</iso-a2>
        <woe-id>23424946</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.48</hc-middle-x>
        <hc-middle-y>0.48</hc-middle-y>
        <hc-key>sl</hc-key>
        <hc-a2>SL</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="GW" d="M307.3,196.8 L305.0,196.7 L305.4,195.3 L304.0,194.2 L307.0,193.5 L309.8,193.5 L309.8,195.4 L308.0,195.8 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Guinea Bissau</name>
        <labelrank>6</labelrank>
        <country-abbrev>GnB.</country-abbrev>
        <subregion>Western Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>GNB</iso-a3>
        <iso-a2>GW</iso-a2>
        <woe-id>23424929</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.55</hc-middle-x>
        <hc-middle-y>0.49</hc-middle-y>
        <hc-key>gw</hc-key>
        <hc-a2>GW</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="BA" d="M371.4,131.4 L370.3,130.8 L369.9,130.6 L369.8,130.5 L369.8,130.5 L367.2,127.6 L366.4,125.3 L368.5,125.0 L372.6,126.0 L373.2,126.0 L372.9,129.1 L371.5,130.4 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Bosnia and Herzegovina</name>
        <labelrank>5</labelrank>
        <country-abbrev>B.H.</country-abbrev>
        <subregion>Southern Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>BIH</iso-a3>
        <iso-a2>BA</iso-a2>
        <woe-id>23424761</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.45</hc-middle-x>
        <hc-middle-y>0.48</hc-middle-y>
        <hc-key>ba</hc-key>
        <hc-a2>BA</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="HR" d="M369.9,130.6 L370.3,130.8 L371.4,131.4 L371.5,131.6 L371.6,131.7 L370.2,130.8 Z M362.2,124.5 L365.6,124.6 L366.1,122.8 L367.8,122.1 L369.4,123.4 L372.3,123.5 L372.6,125.4 L372.6,126.0 L368.5,125.0 L366.4,125.3 L367.2,127.6 L369.8,130.5 L366.7,129.2 L364.6,127.6 L365.3,127.3 L363.6,124.9 L362.9,126.1 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Croatia</name>
        <labelrank>6</labelrank>
        <country-abbrev>Cro.</country-abbrev>
        <subregion>Southern Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>HRV</iso-a3>
        <iso-a2>HR</iso-a2>
        <woe-id>23424843</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.35</hc-middle-x>
        <hc-middle-y>0.59</hc-middle-y>
        <hc-key>hr</hc-key>
        <hc-a2>HR</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="EE" d="M390.1,88.7 L389.8,88.7 L389.9,88.8 L389.9,88.8 L389.9,88.8 L390.0,88.8 L389.8,88.8 L389.5,88.9 L389.5,89.2 L389.4,89.5 L389.2,89.7 L387.8,90.3 L389.1,92.5 L388.9,93.0 L388.5,93.8 L386.9,93.8 L384.5,92.3 L382.7,92.9 L380.6,91.0 L378.0,91.8 L379.4,90.7 L379.4,89.4 L381.2,90.4 L381.1,89.1 L385.4,87.8 L389.8,88.3 L390.0,88.4 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Estonia</name>
        <labelrank>6</labelrank>
        <country-abbrev>Est.</country-abbrev>
        <subregion>Northern Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>EST</iso-a3>
        <iso-a2>EE</iso-a2>
        <woe-id>23424805</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.50</hc-middle-x>
        <hc-middle-y>0.38</hc-middle-y>
        <hc-key>ee</hc-key>
        <hc-a2>EE</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="MX" d="M141.9,159.7 L142.0,160.0 L142.5,160.0 L145.4,163.9 L145.5,165.0 L145.7,165.6 L146.0,166.0 L147.9,167.0 L149.9,167.2 L148.9,170.2 L148.6,173.8 L149.9,177.9 L152.5,181.7 L155.1,182.9 L159.9,181.8 L162.2,180.4 L163.0,177.2 L167.2,176.0 L169.9,176.8 L167.9,180.0 L168.5,180.2 L167.7,182.8 L166.9,182.2 L165.8,183.4 L165.2,183.5 L161.8,183.5 L160.9,184.6 L162.9,186.4 L160.3,186.9 L159.3,189.9 L156.1,186.9 L154.3,186.2 L151.0,187.7 L142.4,184.6 L141.0,183.4 L137.7,182.5 L134.8,180.5 L133.5,178.4 L134.5,176.2 L132.2,176.3 L133.7,175.3 L133.3,173.9 L128.6,169.0 L126.4,167.6 L126.8,166.5 L124.3,164.5 L121.1,160.9 L119.3,157.2 L119.4,156.5 L116.3,155.2 L116.3,158.5 L119.8,162.1 L120.0,163.3 L122.3,165.7 L123.9,170.1 L126.3,172.1 L125.5,173.5 L124.7,172.1 L121.2,169.4 L121.1,167.2 L118.3,165.7 L115.7,163.6 L117.5,162.1 L114.4,159.4 L113.7,157.2 L111.6,153.6 L116.2,153.2 L116.0,153.6 L123.4,156.1 L128.7,156.1 L128.7,155.2 L132.0,155.2 L134.8,157.5 L135.8,159.6 L138.4,161.0 L140.0,159.1 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Mexico</name>
        <labelrank>2</labelrank>
        <country-abbrev>Mex.</country-abbrev>
        <subregion>Central America</subregion>
        <region-wb>Latin America &amp; Caribbean</region-wb>
        <iso-a3>MEX</iso-a3>
        <iso-a2>MX</iso-a2>
        <woe-id>23424900</woe-id>
        <continent>North America</continent>
        <hc-middle-x>0.48</hc-middle-x>
        <hc-middle-y>0.49</hc-middle-y>
        <hc-key>mx</hc-key>
        <hc-a2>MX</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="TN" d="M358.2,152.2 L358.2,152.2 L358.1,152.8 L358.3,153.7 L355.5,155.9 L355.8,157.0 L354.4,158.4 L353.4,154.5 L351.0,152.1 L350.4,150.7 L351.9,149.0 L352.6,144.0 L355.0,143.2 L356.1,144.5 L357.5,147.8 L355.5,149.7 L355.9,151.1 L357.3,150.9 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Tunisia</name>
        <labelrank>3</labelrank>
        <country-abbrev>Tun.</country-abbrev>
        <subregion>Northern Africa</subregion>
        <region-wb>Middle East &amp; North Africa</region-wb>
        <iso-a3>TUN</iso-a3>
        <iso-a2>TN</iso-a2>
        <woe-id>23424967</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.58</hc-middle-x>
        <hc-middle-y>0.03</hc-middle-y>
        <hc-key>tn</hc-key>
        <hc-a2>TN</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="KW" d="M428.9,161.9 L427.0,161.0 L425.3,160.8 L426.4,159.0 L428.0,158.9 L428.3,160.2 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Kuwait</name>
        <labelrank>6</labelrank>
        <country-abbrev>Kwt.</country-abbrev>
        <subregion>Western Asia</subregion>
        <region-wb>Middle East &amp; North Africa</region-wb>
        <iso-a3>KWT</iso-a3>
        <iso-a2>KW</iso-a2>
        <woe-id>23424870</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.61</hc-middle-x>
        <hc-middle-y>0.40</hc-middle-y>
        <hc-key>kw</hc-key>
        <hc-a2>KW</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="DE" d="M353.7,119.3 L353.7,119.3 L353.7,119.3 Z M352.7,100.9 L353.0,100.9 L354.2,101.2 L356.8,102.5 L357.0,103.4 L360.1,102.1 L363.3,103.5 L363.3,103.5 L363.3,103.6 L362.7,103.7 L363.4,104.1 L363.2,106.3 L364.2,107.0 L364.5,111.4 L360.1,112.6 L359.6,113.4 L360.6,115.2 L362.6,116.6 L360.5,118.2 L361.1,119.7 L359.4,119.2 L355.9,120.2 L354.7,119.6 L353.5,118.9 L353.7,119.3 L352.3,119.5 L350.6,119.5 L351.8,116.1 L349.0,115.6 L348.3,114.9 L348.6,114.1 L347.8,113.2 L348.3,112.8 L347.6,111.7 L347.5,109.0 L349.6,107.9 L349.9,105.3 L350.1,104.1 L352.5,104.5 L353.4,103.6 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Germany</name>
        <labelrank>2</labelrank>
        <country-abbrev>Ger.</country-abbrev>
        <subregion>Western Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>DEU</iso-a3>
        <iso-a2>DE</iso-a2>
        <woe-id>23424829</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.52</hc-middle-x>
        <hc-middle-y>0.35</hc-middle-y>
        <hc-key>de</hc-key>
        <hc-a2>DE</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="MM" d="M512.9,177.1 L513.7,176.6 L513.5,175.3 L514.3,175.2 L515.1,173.0 L514.9,171.1 L516.5,171.5 L518.5,167.0 L518.3,166.2 L521.6,164.4 L522.6,162.6 L523.1,161.9 L525.2,163.9 L525.3,167.4 L523.1,169.7 L523.2,171.5 L525.1,171.1 L525.6,172.9 L526.8,173.1 L526.1,174.9 L527.7,175.1 L528.1,176.4 L530.0,176.1 L529.2,176.6 L528.0,178.6 L525.0,179.8 L524.0,179.6 L522.7,182.1 L525.2,186.5 L524.3,188.8 L526.1,191.5 L527.1,195.2 L525.4,198.0 L525.0,192.5 L524.2,191.6 L523.4,187.3 L521.8,184.4 L521.3,186.1 L519.0,187.6 L516.7,187.0 L517.5,184.0 L516.2,180.3 L514.4,179.2 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Myanmar</name>
        <labelrank>3</labelrank>
        <country-abbrev>Myan.</country-abbrev>
        <subregion>South-Eastern Asia</subregion>
        <region-wb>East Asia &amp; Pacific</region-wb>
        <iso-a3>MMR</iso-a3>
        <iso-a2>MM</iso-a2>
        <woe-id>23424763</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.17</hc-middle-x>
        <hc-middle-y>0.49</hc-middle-y>
        <hc-key>mm</hc-key>
        <hc-a2>MM</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="GQ" d="M354.9,215.9 L354.0,215.6 L354.9,213.3 L355.3,213.7 L357.8,213.7 L357.8,215.9 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Equatorial Guinea</name>
        <labelrank>4</labelrank>
        <country-abbrev>Eq. G.</country-abbrev>
        <subregion>Middle Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>GNQ</iso-a3>
        <iso-a2>GQ</iso-a2>
        <woe-id>23424804</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.53</hc-middle-x>
        <hc-middle-y>0.55</hc-middle-y>
        <hc-key>gq</hc-key>
        <hc-a2>GQ</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="GA" d="M354.9,215.9 L357.8,215.9 L357.8,213.7 L357.9,213.4 L361.6,213.7 L361.5,215.5 L363.3,215.2 L363.8,216.1 L362.6,218.2 L363.9,219.0 L363.1,222.6 L362.5,221.8 L358.3,222.3 L358.5,223.8 L357.4,225.3 L353.9,221.4 L352.8,218.9 L353.9,218.6 L354.0,216.6 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Gabon</name>
        <labelrank>4</labelrank>
        <country-abbrev>Gabon</country-abbrev>
        <subregion>Middle Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>GAB</iso-a3>
        <iso-a2>GA</iso-a2>
        <woe-id>23424822</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.36</hc-middle-x>
        <hc-middle-y>0.64</hc-middle-y>
        <hc-key>ga</hc-key>
        <hc-a2>GA</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="IE" d="M322.2,100.5 L320.4,102.1 L322.1,103.0 L324.1,103.0 L324.6,106.0 L323.9,108.0 L321.9,108.2 L319.4,109.6 L317.3,109.9 L316.1,108.2 L318.3,105.5 L316.6,104.5 L317.8,103.8 L317.2,102.4 L319.9,102.6 L320.2,100.2 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Ireland</name>
        <labelrank>3</labelrank>
        <country-abbrev>Ire.</country-abbrev>
        <subregion>Northern Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>IRL</iso-a3>
        <iso-a2>IE</iso-a2>
        <woe-id>23424803</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.44</hc-middle-x>
        <hc-middle-y>0.48</hc-middle-y>
        <hc-key>ie</hc-key>
        <hc-a2>IE</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="PL" d="M374.0,102.2 L379.6,102.4 L379.7,102.4 L381.0,102.9 L381.1,103.5 L381.9,106.8 L380.5,107.7 L381.4,109.7 L382.3,112.2 L379.5,114.7 L379.3,115.9 L377.9,115.1 L374.0,115.5 L372.2,114.8 L371.7,113.8 L369.0,112.6 L368.1,113.3 L367.4,111.9 L364.5,111.4 L364.2,107.0 L363.2,106.3 L363.4,104.1 L364.2,103.7 L363.3,103.6 L363.3,103.5 L363.3,103.5 L367.0,102.5 L367.9,101.8 L371.2,101.1 L371.7,102.2 L373.7,102.1 L373.7,102.1 L373.7,102.1 L373.3,102.6 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Poland</name>
        <labelrank>3</labelrank>
        <country-abbrev>Pol.</country-abbrev>
        <subregion>Eastern Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>POL</iso-a3>
        <iso-a2>PL</iso-a2>
        <woe-id>23424923</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.51</hc-middle-x>
        <hc-middle-y>0.28</hc-middle-y>
        <hc-key>pl</hc-key>
        <hc-a2>PL</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="LT" d="M376.2,99.9 L376.5,99.3 L376.3,99.9 L376.3,99.9 Z M376.9,100.0 L376.5,98.7 L376.5,97.8 L378.5,96.8 L383.0,97.3 L383.8,96.8 L387.1,98.9 L387.5,99.9 L385.5,101.0 L383.6,103.4 L381.1,103.5 L381.0,102.9 L379.7,102.4 L379.8,100.9 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Lithuania</name>
        <labelrank>5</labelrank>
        <country-abbrev>Lith.</country-abbrev>
        <subregion>Northern Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>LTU</iso-a3>
        <iso-a2>LT</iso-a2>
        <woe-id>23424875</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.27</hc-middle-x>
        <hc-middle-y>0.07</hc-middle-y>
        <hc-key>lt</hc-key>
        <hc-a2>LT</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="EG" d="M384.3,155.4 L388.5,156.0 L391.7,157.2 L394.3,155.7 L397.3,155.7 L397.6,156.6 L401.7,156.1 L401.7,156.2 L401.8,156.4 L402.9,159.4 L403.0,160.0 L401.4,163.5 L399.8,161.9 L398.5,159.0 L398.1,159.7 L400.3,163.1 L401.3,165.9 L404.2,171.3 L404.5,173.4 L406.8,175.2 L396.0,175.2 L384.0,175.2 L384.0,160.6 L383.4,158.6 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Egypt</name>
        <labelrank>2</labelrank>
        <country-abbrev>Egypt</country-abbrev>
        <subregion>Northern Africa</subregion>
        <region-wb>Middle East &amp; North Africa</region-wb>
        <iso-a3>EGY</iso-a3>
        <iso-a2>EG</iso-a2>
        <woe-id>23424802</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.50</hc-middle-x>
        <hc-middle-y>0.66</hc-middle-y>
        <hc-key>eg</hc-key>
        <hc-a2>EG</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="UG" d="M397.1,219.7 L397.1,219.7 L397.1,219.7 Z M397.0,219.7 L395.2,219.7 L394.5,219.8 L393.4,220.6 L392.8,220.4 L392.8,219.6 L392.9,218.7 L393.4,218.1 L393.0,218.0 L393.5,216.3 L394.5,215.4 L396.3,214.3 L396.0,213.7 L395.0,213.1 L395.2,211.2 L400.4,210.6 L401.2,209.8 L403.0,213.1 L403.2,214.6 L401.3,217.3 L398.7,217.2 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Uganda</name>
        <labelrank>3</labelrank>
        <country-abbrev>Uga.</country-abbrev>
        <subregion>Eastern Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>UGA</iso-a3>
        <iso-a2>UG</iso-a2>
        <woe-id>23424974</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.16</hc-middle-x>
        <hc-middle-y>0.56</hc-middle-y>
        <hc-key>ug</hc-key>
        <hc-a2>UG</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="CD" d="M392.1,224.2 L391.9,227.5 L392.6,230.6 L394.7,233.5 L391.5,234.0 L391.5,234.0 L390.4,235.1 L390.8,235.7 L390.5,239.7 L391.7,241.5 L393.2,241.1 L393.2,243.5 L392.0,243.5 L388.2,239.9 L387.3,240.8 L384.7,240.1 L384.6,239.2 L382.7,239.6 L382.0,238.6 L378.7,239.3 L378.9,237.6 L378.0,236.2 L377.9,231.7 L373.5,231.2 L373.2,233.1 L369.7,233.2 L367.4,229.0 L361.4,229.0 L360.0,229.3 L359.5,228.8 L360.0,227.4 L361.2,226.6 L363.6,226.0 L364.5,227.0 L367.2,224.1 L367.2,221.9 L370.1,218.8 L370.7,213.7 L371.8,211.2 L371.6,209.6 L373.9,208.0 L375.6,209.4 L379.1,209.9 L380.0,208.6 L380.9,209.1 L384.7,207.7 L388.7,208.1 L390.5,209.7 L392.6,208.9 L395.2,211.2 L395.0,213.1 L396.0,213.7 L394.5,215.0 L394.5,215.4 L393.5,216.3 L393.0,218.0 L392.3,218.7 L392.9,218.7 L392.8,219.6 L392.8,220.4 L392.4,220.7 L392.1,221.0 L391.5,221.6 L391.5,222.5 L391.5,222.9 L391.7,223.0 L392.1,223.6 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Democratic Republic of the Congo</name>
        <labelrank>2</labelrank>
        <country-abbrev>D.R.C.</country-abbrev>
        <subregion>Middle Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>COD</iso-a3>
        <iso-a2>CD</iso-a2>
        <woe-id>23424780</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.58</hc-middle-x>
        <hc-middle-y>0.41</hc-middle-y>
        <hc-key>cd</hc-key>
        <hc-a2>CD</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="AM" d="M425.3,139.7 L425.0,139.7 L424.5,139.8 L423.9,138.2 L421.9,137.9 L419.8,137.0 L419.4,134.7 L420.8,134.4 L422.4,134.3 L424.2,136.7 L423.6,137.2 Z M423.3,135.9 L423.3,135.9 L423.4,135.8 L423.3,135.8 Z M422.4,134.9 L422.4,134.8 L422.3,134.8 L422.4,134.9 Z M422.8,135.0 L422.7,135.0 L422.7,135.0 L422.7,135.0 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Armenia</name>
        <labelrank>6</labelrank>
        <country-abbrev>Arm.</country-abbrev>
        <subregion>Western Asia</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>ARM</iso-a3>
        <iso-a2>AM</iso-a2>
        <woe-id>23424743</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.10</hc-middle-x>
        <hc-middle-y>0.12</hc-middle-y>
        <hc-key>am</hc-key>
        <hc-a2>AM</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="MK" d="M376.2,135.2 L376.2,135.2 L376.2,135.2 L376.0,135.2 L375.8,135.2 L376.0,134.7 L375.7,134.8 L375.3,133.7 L375.5,133.0 L376.5,132.2 L377.4,132.1 L378.8,131.8 L378.9,132.0 L379.9,132.7 L380.0,134.2 L378.1,134.7 L376.6,135.3 L376.3,134.9 L376.3,135.2 Z M376.3,135.3 L376.3,135.3 L376.3,135.3 Z M376.3,135.2 L376.3,135.2 L376.3,135.2 L376.3,135.2 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Macedonia</name>
        <labelrank>6</labelrank>
        <country-abbrev>Mkd.</country-abbrev>
        <subregion>Southern Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>MKD</iso-a3>
        <iso-a2>MK</iso-a2>
        <woe-id>23424890</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.50</hc-middle-x>
        <hc-middle-y>0.46</hc-middle-y>
        <hc-key>mk</hc-key>
        <hc-a2>MK</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="AL" d="M376.3,135.2 L376.3,135.2 L376.2,135.2 L376.3,135.2 L376.3,135.2 L376.3,135.2 Z M375.7,134.8 L375.7,135.2 L375.8,135.2 L376.0,135.2 L376.2,135.2 L376.2,135.2 L376.3,135.3 L376.3,135.3 L376.2,135.5 L376.3,135.4 L376.3,135.5 L376.4,135.7 L376.4,135.7 L376.4,135.7 L375.2,137.6 L374.4,137.9 L373.4,136.8 L373.2,133.0 L373.2,132.8 L373.2,132.5 L373.4,132.4 L373.3,131.9 L373.9,131.2 L374.6,131.4 L375.4,132.2 L375.5,133.0 L375.3,133.7 Z M373.2,132.0 L373.2,132.0 L373.2,132.0 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Albania</name>
        <labelrank>6</labelrank>
        <country-abbrev>Alb.</country-abbrev>
        <subregion>Southern Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>ALB</iso-a3>
        <iso-a2>AL</iso-a2>
        <woe-id>23424742</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.57</hc-middle-x>
        <hc-middle-y>0.96</hc-middle-y>
        <hc-key>al</hc-key>
        <hc-a2>AL</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="CM" d="M360.7,200.9 L360.8,199.9 L364.2,194.5 L363.1,192.8 L363.5,192.8 L363.5,193.1 L363.9,193.0 L365.1,195.8 L365.0,197.2 L366.2,198.7 L363.3,198.7 L362.8,199.4 L365.2,201.6 L365.8,203.5 L364.1,206.5 L364.3,209.0 L367.0,212.3 L367.2,213.5 L367.1,214.5 L364.0,213.6 L361.6,213.7 L357.9,213.4 L357.8,213.7 L355.3,213.7 L354.9,213.3 L354.5,210.3 L352.6,208.6 L352.6,208.6 L353.1,206.7 L355.5,204.5 L358.0,205.2 L358.2,205.2 L358.3,204.9 L358.3,204.8 L358.3,204.7 Z M363.7,192.8 L363.7,192.8 L363.6,192.8 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Cameroon</name>
        <labelrank>3</labelrank>
        <country-abbrev>Cam.</country-abbrev>
        <subregion>Middle Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>CMR</iso-a3>
        <iso-a2>CM</iso-a2>
        <woe-id>23424785</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.50</hc-middle-x>
        <hc-middle-y>0.81</hc-middle-y>
        <hc-key>cm</hc-key>
        <hc-a2>CM</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="BJ" d="M341.3,205.7 L339.7,205.8 L339.2,206.0 L339.2,200.5 L337.8,196.8 L338.9,195.9 L340.7,195.0 L341.6,194.1 L343.0,195.4 L343.5,197.5 L341.4,200.5 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Benin</name>
        <labelrank>5</labelrank>
        <country-abbrev>Benin</country-abbrev>
        <subregion>Western Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>BEN</iso-a3>
        <iso-a2>BJ</iso-a2>
        <woe-id>23424764</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.57</hc-middle-x>
        <hc-middle-y>0.49</hc-middle-y>
        <hc-key>bj</hc-key>
        <hc-a2>BJ</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="NC" d="M401.1,148.1 L400.8,148.2 L400.7,148.2 L400.7,148.2 L400.7,148.2 L400.7,148.2 L400.1,147.8 L398.9,147.9 L398.9,147.9 L398.9,147.9 L398.9,147.9 L398.8,147.9 L398.8,147.9 L402.4,146.9 L401.3,148.1 L401.1,148.1 L401.1,148.1 Z M398.6,147.9 L398.7,147.9 L398.6,147.9 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Northern Cyprus</name>
        <labelrank>6</labelrank>
        <country-abbrev>N. Cy.</country-abbrev>
        <subregion>Western Asia</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>-99</iso-a3>
        <iso-a2>NC</iso-a2>
        <woe-id>-90</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.56</hc-middle-x>
        <hc-middle-y>0.71</hc-middle-y>
        <hc-key>nc</hc-key>
        <hc-a2>NC</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="GE" d="M425.1,132.9 L425.2,134.9 L422.4,134.3 L420.8,134.4 L419.4,134.7 L418.2,133.7 L415.7,133.8 L415.7,131.2 L412.7,129.5 L414.0,129.1 L417.4,129.8 L420.3,131.4 L422.1,130.9 L422.5,131.1 L422.7,131.1 L423.1,131.6 L423.5,132.2 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Georgia</name>
        <labelrank>5</labelrank>
        <country-abbrev>Geo.</country-abbrev>
        <subregion>Western Asia</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>GEO</iso-a3>
        <iso-a2>GE</iso-a2>
        <woe-id>23424823</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.25</hc-middle-x>
        <hc-middle-y>0.45</hc-middle-y>
        <hc-key>ge</hc-key>
        <hc-a2>GE</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="TL" d="M573.8,235.6 L574.1,235.5 L574.6,235.3 L574.3,235.9 Z M575.5,234.9 L576.0,234.3 L580.1,233.9 L575.8,235.9 L575.6,235.3 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>East Timor</name>
        <labelrank>5</labelrank>
        <country-abbrev>T.L.</country-abbrev>
        <subregion>South-Eastern Asia</subregion>
        <region-wb>East Asia &amp; Pacific</region-wb>
        <iso-a3>TLS</iso-a3>
        <iso-a2>TL</iso-a2>
        <woe-id>23424968</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.61</hc-middle-x>
        <hc-middle-y>0.19</hc-middle-y>
        <hc-key>tl</hc-key>
        <hc-a2>TL</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="TM" d="M445.5,132.9 L447.0,133.4 L446.6,132.3 L448.4,130.9 L451.2,132.2 L451.3,134.1 L454.7,134.7 L455.8,137.2 L461.8,141.2 L463.7,141.6 L463.6,143.1 L462.1,142.6 L460.8,143.4 L459.6,145.6 L455.5,147.9 L453.5,146.9 L453.2,144.7 L451.8,144.7 L448.8,142.4 L446.0,141.8 L445.8,141.1 L442.3,141.5 L439.4,143.2 L439.6,139.7 L438.8,137.3 L437.2,137.1 L437.6,135.0 L439.1,135.8 L441.0,134.7 L439.4,132.5 L438.6,132.5 L438.6,132.5 L440.0,132.0 L442.3,134.3 L443.4,134.2 L445.4,134.4 Z M437.9,132.8 L438.0,132.4 L438.6,132.5 L438.6,132.5 L437.9,132.8 L437.9,132.8 Z M437.9,132.8 L437.3,134.1 L436.6,133.3 L437.9,132.8 L437.9,132.8 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Turkmenistan</name>
        <labelrank>4</labelrank>
        <country-abbrev>Turkm.</country-abbrev>
        <subregion>Central Asia</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>TKM</iso-a3>
        <iso-a2>TM</iso-a2>
        <woe-id>23424972</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.40</hc-middle-x>
        <hc-middle-y>0.42</hc-middle-y>
        <hc-key>tm</hc-key>
        <hc-a2>TM</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="PE" d="M203.9,249.0 L203.7,249.5 L203.8,249.6 L202.6,251.0 L202.9,251.5 L202.0,252.9 L201.2,253.1 L199.0,251.0 L192.0,247.3 L189.9,245.0 L190.0,243.4 L188.3,240.9 L184.7,233.5 L182.6,230.5 L180.7,229.4 L180.4,225.9 L182.1,224.3 L181.9,225.4 L184.6,227.3 L185.9,224.3 L189.1,222.7 L191.3,220.7 L191.8,218.0 L195.0,220.2 L195.8,222.0 L197.4,222.5 L200.0,222.0 L201.8,223.0 L200.5,225.0 L202.0,225.9 L200.4,225.8 L196.4,227.6 L195.9,230.1 L194.2,232.2 L197.7,236.9 L200.7,236.1 L200.7,238.8 L202.8,238.7 L204.5,241.7 L204.1,245.0 L203.2,247.6 L201.9,248.2 L203.6,249.0 L203.7,248.9 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Peru</name>
        <labelrank>2</labelrank>
        <country-abbrev>Peru</country-abbrev>
        <subregion>South America</subregion>
        <region-wb>Latin America &amp; Caribbean</region-wb>
        <iso-a3>PER</iso-a3>
        <iso-a2>PE</iso-a2>
        <woe-id>23424919</woe-id>
        <continent>South America</continent>
        <hc-middle-x>0.53</hc-middle-x>
        <hc-middle-y>0.62</hc-middle-y>
        <hc-key>pe</hc-key>
        <hc-a2>PE</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="MW" d="M403.0,239.6 L403.0,239.6 L403.0,239.6 Z M402.7,239.3 L402.7,239.3 L402.7,239.3 Z M401.8,236.3 L401.6,236.1 L401.6,236.1 Z M401.4,236.0 L401.4,236.0 L401.4,236.0 Z M399.2,235.8 L400.1,236.1 L401.1,236.4 L401.8,237.8 L401.3,241.1 L401.9,243.5 L402.9,243.7 L404.8,245.9 L404.7,248.5 L403.4,249.6 L401.7,248.3 L402.4,247.1 L401.9,245.4 L400.6,245.8 L399.7,244.7 L399.0,244.0 L399.8,241.0 L400.0,238.5 L400.7,238.0 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Malawi</name>
        <labelrank>6</labelrank>
        <country-abbrev>Mal.</country-abbrev>
        <subregion>Eastern Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>MWI</iso-a3>
        <iso-a2>MW</iso-a2>
        <woe-id>23424889</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.18</hc-middle-x>
        <hc-middle-y>0.29</hc-middle-y>
        <hc-key>mw</hc-key>
        <hc-a2>MW</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="MN" d="M561.3,119.0 L562.0,118.9 L561.8,118.5 L563.3,118.6 L565.5,120.5 L565.5,121.9 L562.7,121.6 L559.6,122.6 L557.7,124.6 L555.6,124.8 L553.9,126.3 L550.8,125.5 L549.6,127.1 L550.6,128.8 L546.0,131.7 L540.7,132.0 L537.7,133.3 L534.9,133.2 L531.7,132.3 L530.9,131.5 L520.8,131.0 L518.9,127.4 L515.4,125.8 L510.3,125.3 L510.6,122.0 L509.3,119.3 L506.8,118.5 L504.7,117.0 L504.4,115.6 L513.0,111.4 L516.7,112.1 L517.5,113.5 L522.6,114.2 L524.5,112.3 L523.6,111.0 L525.6,108.2 L527.8,109.2 L532.0,110.2 L532.2,112.2 L534.8,113.2 L538.0,112.4 L543.0,113.7 L544.1,115.2 L548.3,115.7 L552.8,114.6 L555.2,112.9 L557.2,113.8 L559.8,114.0 L557.5,118.2 L558.2,119.2 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Mongolia</name>
        <labelrank>3</labelrank>
        <country-abbrev>Mong.</country-abbrev>
        <subregion>Eastern Asia</subregion>
        <region-wb>East Asia &amp; Pacific</region-wb>
        <iso-a3>MNG</iso-a3>
        <iso-a2>MN</iso-a2>
        <woe-id>23424887</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.49</hc-middle-x>
        <hc-middle-y>0.53</hc-middle-y>
        <hc-key>mn</hc-key>
        <hc-a2>MN</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="AO" d="M359.5,228.8 L359.6,228.2 L359.1,227.4 L360.7,226.2 L361.2,226.6 L360.0,227.4 Z M361.4,229.0 L367.4,229.0 L369.7,233.2 L373.2,233.1 L373.5,231.2 L377.9,231.7 L378.0,236.2 L378.9,237.6 L378.7,239.3 L382.0,238.6 L382.1,242.7 L378.2,242.7 L378.2,248.8 L380.9,251.7 L376.0,252.5 L372.1,251.9 L371.5,251.2 L362.8,251.3 L361.3,250.4 L358.7,251.0 L358.6,248.1 L360.1,243.5 L362.3,241.2 L362.5,238.1 L361.0,235.2 L361.7,233.7 L359.6,229.5 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Angola</name>
        <labelrank>3</labelrank>
        <country-abbrev>Ang.</country-abbrev>
        <subregion>Middle Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>AGO</iso-a3>
        <iso-a2>AO</iso-a2>
        <woe-id>23424745</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.50</hc-middle-x>
        <hc-middle-y>0.67</hc-middle-y>
        <hc-key>ao</hc-key>
        <hc-a2>AO</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="MZ" d="M402.9,243.7 L402.6,241.1 L403.1,239.9 L407.8,240.2 L413.6,237.8 L413.8,243.9 L414.4,245.5 L413.9,247.5 L412.6,249.3 L407.2,252.2 L402.7,256.2 L404.1,260.6 L404.1,264.6 L403.4,265.6 L399.1,267.5 L398.4,268.4 L399.2,270.2 L398.1,270.2 L397.7,270.2 L397.5,269.0 L397.3,268.4 L397.4,265.3 L396.1,261.2 L398.2,259.0 L399.4,256.5 L398.9,255.3 L399.4,253.1 L399.3,249.9 L394.4,247.8 L394.0,246.5 L399.7,244.7 L400.6,245.8 L401.9,245.4 L402.4,247.1 L401.7,248.3 L403.4,249.6 L404.7,248.5 L404.8,245.9 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Mozambique</name>
        <labelrank>3</labelrank>
        <country-abbrev>Moz.</country-abbrev>
        <subregion>Eastern Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>MOZ</iso-a3>
        <iso-a2>MZ</iso-a2>
        <woe-id>23424902</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.83</hc-middle-x>
        <hc-middle-y>0.28</hc-middle-y>
        <hc-key>mz</hc-key>
        <hc-a2>MZ</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="ZA" d="M397.7,270.2 L398.1,270.2 L399.2,270.2 L398.2,273.7 L395.9,275.8 L394.4,278.5 L389.6,283.1 L386.9,284.7 L383.8,285.6 L379.4,285.2 L374.4,286.9 L371.5,284.9 L370.3,282.6 L371.1,282.3 L370.9,280.2 L369.2,277.4 L367.7,273.7 L368.5,272.7 L369.5,274.0 L372.7,274.5 L374.4,273.4 L374.4,265.9 L376.1,268.7 L375.8,270.3 L377.7,270.2 L379.7,268.4 L380.2,267.1 L383.6,268.1 L385.2,267.7 L385.7,265.9 L387.6,264.9 L387.9,263.7 L390.1,261.8 L392.4,260.8 L394.2,261.1 L396.1,261.2 L397.4,265.3 L397.3,268.4 L396.3,267.9 L395.1,269.4 L395.8,270.9 Z M390.5,273.9 L387.9,275.9 L389.3,278.0 L392.0,276.5 L392.5,275.3 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>South Africa</name>
        <labelrank>2</labelrank>
        <country-abbrev>S.Af.</country-abbrev>
        <subregion>Southern Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>ZAF</iso-a3>
        <iso-a2>ZA</iso-a2>
        <woe-id>23424942</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.36</hc-middle-x>
        <hc-middle-y>0.70</hc-middle-y>
        <hc-key>za</hc-key>
        <hc-a2>ZA</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="CR" d="M175.8,196.9 L176.1,197.7 L177.8,199.5 L177.4,199.5 L177.2,202.5 L176.7,201.3 L173.7,198.8 L173.0,199.6 L171.5,198.0 L171.9,196.6 L173.8,196.6 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Costa Rica</name>
        <labelrank>5</labelrank>
        <country-abbrev>C.R.</country-abbrev>
        <subregion>Central America</subregion>
        <region-wb>Latin America &amp; Caribbean</region-wb>
        <iso-a3>CRI</iso-a3>
        <iso-a2>CR</iso-a2>
        <woe-id>23424791</woe-id>
        <continent>North America</continent>
        <hc-middle-x>0.16</hc-middle-x>
        <hc-middle-y>0.05</hc-middle-y>
        <hc-key>cr</hc-key>
        <hc-a2>CR</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="SV" d="M167.8,192.1 L165.9,192.4 L163.4,191.5 L163.4,191.2 L164.8,190.2 L166.5,191.3 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>El Salvador</name>
        <labelrank>6</labelrank>
        <country-abbrev>El. S.</country-abbrev>
        <subregion>Central America</subregion>
        <region-wb>Latin America &amp; Caribbean</region-wb>
        <iso-a3>SLV</iso-a3>
        <iso-a2>SV</iso-a2>
        <woe-id>23424807</woe-id>
        <continent>North America</continent>
        <hc-middle-x>0.52</hc-middle-x>
        <hc-middle-y>0.56</hc-middle-y>
        <hc-key>sv</hc-key>
        <hc-a2>SV</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="BZ" d="M166.9,182.2 L167.0,185.2 L165.7,187.3 L165.1,187.3 L165.2,183.5 L165.8,183.4 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Belize</name>
        <labelrank>6</labelrank>
        <country-abbrev>Belize</country-abbrev>
        <subregion>Central America</subregion>
        <region-wb>Latin America &amp; Caribbean</region-wb>
        <iso-a3>BLZ</iso-a3>
        <iso-a2>BZ</iso-a2>
        <woe-id>23424760</woe-id>
        <continent>North America</continent>
        <hc-middle-x>0.53</hc-middle-x>
        <hc-middle-y>0.50</hc-middle-y>
        <hc-key>bz</hc-key>
        <hc-a2>BZ</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="CO" d="M187.8,201.3 L188.6,201.5 L191.2,199.8 L191.4,197.6 L192.7,196.6 L195.6,196.2 L198.7,193.9 L199.4,195.1 L198.2,195.5 L196.4,197.8 L196.2,200.1 L197.4,201.9 L198.0,204.3 L201.8,204.6 L203.0,206.1 L206.6,205.9 L206.0,209.2 L207.1,211.3 L206.1,212.3 L207.3,213.2 L207.9,215.5 L207.0,213.8 L205.5,214.5 L202.2,214.5 L201.8,218.0 L203.1,220.1 L202.0,225.9 L200.5,225.0 L201.8,223.0 L200.0,222.0 L197.4,222.5 L195.8,222.0 L195.0,220.2 L191.8,218.0 L189.8,216.9 L187.7,217.0 L185.0,215.1 L185.3,213.6 L188.2,210.6 L187.9,205.3 L186.8,204.0 L188.2,202.7 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Colombia</name>
        <labelrank>2</labelrank>
        <country-abbrev>Col.</country-abbrev>
        <subregion>South America</subregion>
        <region-wb>Latin America &amp; Caribbean</region-wb>
        <iso-a3>COL</iso-a3>
        <iso-a2>CO</iso-a2>
        <woe-id>23424787</woe-id>
        <continent>South America</continent>
        <hc-middle-x>0.50</hc-middle-x>
        <hc-middle-y>0.54</hc-middle-y>
        <hc-key>co</hc-key>
        <hc-a2>CO</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="EC" d="M185.0,215.1 L187.7,217.0 L189.8,216.9 L191.8,218.0 L191.3,220.7 L189.1,222.7 L185.9,224.3 L184.6,227.3 L181.9,225.4 L182.1,224.3 L182.9,223.9 L181.0,222.2 L181.0,219.8 L182.7,217.7 L182.7,216.2 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Ecuador</name>
        <labelrank>3</labelrank>
        <country-abbrev>Ecu.</country-abbrev>
        <subregion>South America</subregion>
        <region-wb>Latin America &amp; Caribbean</region-wb>
        <iso-a3>ECU</iso-a3>
        <iso-a2>EC</iso-a2>
        <woe-id>23424801</woe-id>
        <continent>South America</continent>
        <hc-middle-x>0.28</hc-middle-x>
        <hc-middle-y>0.17</hc-middle-y>
        <hc-key>ec</hc-key>
        <hc-a2>EC</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="LY" d="M384.0,175.2 L384.0,179.2 L382.1,179.2 L382.1,180.2 L366.7,172.3 L364.8,173.2 L363.4,174.0 L362.0,172.9 L359.0,172.2 L358.3,170.7 L355.3,169.5 L354.1,166.9 L355.0,166.1 L354.9,160.7 L354.4,158.4 L355.8,157.0 L355.5,155.9 L358.3,153.7 L358.2,152.2 L359.8,152.9 L361.7,152.8 L365.2,153.9 L366.9,156.2 L369.4,156.6 L372.5,158.3 L374.5,157.2 L374.3,155.3 L375.5,153.5 L377.5,152.7 L380.4,153.3 L380.4,154.0 L384.0,154.8 L384.3,155.4 L383.4,158.6 L384.0,160.6 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Libya</name>
        <labelrank>3</labelrank>
        <country-abbrev>Libya</country-abbrev>
        <subregion>Northern Africa</subregion>
        <region-wb>Middle East &amp; North Africa</region-wb>
        <iso-a3>LBY</iso-a3>
        <iso-a2>LY</iso-a2>
        <woe-id>23424882</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.51</hc-middle-x>
        <hc-middle-y>0.38</hc-middle-y>
        <hc-key>ly</hc-key>
        <hc-a2>LY</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="SD" d="M382.1,180.2 L382.1,179.2 L384.0,179.2 L384.0,175.2 L396.0,175.2 L406.8,175.2 L407.7,180.9 L410.1,183.1 L407.0,185.0 L405.9,188.8 L406.1,190.5 L405.3,193.5 L403.3,195.3 L401.4,199.7 L399.7,197.1 L399.8,194.4 L397.6,194.8 L398.2,196.7 L396.0,199.1 L393.6,198.2 L391.4,200.0 L387.0,199.6 L385.6,197.9 L384.2,198.1 L382.4,201.2 L381.1,201.0 L381.4,198.9 L379.9,196.9 L380.0,196.0 L378.2,192.8 L380.4,187.7 L382.1,187.6 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Sudan</name>
        <labelrank>3</labelrank>
        <country-abbrev>Sudan</country-abbrev>
        <subregion>Northern Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>SDN</iso-a3>
        <iso-a2>SD</iso-a2>
        <woe-id>-90</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.50</hc-middle-x>
        <hc-middle-y>0.38</hc-middle-y>
        <hc-key>sd</hc-key>
        <hc-a2>SD</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="KP" d="M578.9,142.1 L575.1,141.4 L576.5,138.8 L574.5,137.0 L577.6,135.2 L578.8,133.5 L581.7,134.1 L581.5,132.7 L584.7,131.7 L585.0,130.5 L586.3,131.5 L586.5,131.8 L586.6,132.0 L584.6,133.7 L584.7,135.3 L580.5,137.8 L580.4,139.1 L582.1,140.3 L579.8,141.0 L578.9,142.1 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>North Korea</name>
        <labelrank>3</labelrank>
        <country-abbrev>N.K.</country-abbrev>
        <subregion>Eastern Asia</subregion>
        <region-wb>East Asia &amp; Pacific</region-wb>
        <iso-a3>PRK</iso-a3>
        <iso-a2>KP</iso-a2>
        <woe-id>23424865</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.32</hc-middle-x>
        <hc-middle-y>0.70</hc-middle-y>
        <hc-key>kp</hc-key>
        <hc-a2>KP</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="KR" d="M579.8,141.0 L582.1,140.3 L584.0,143.3 L584.4,145.9 L583.7,147.9 L582.2,148.8 L579.9,148.9 L578.9,150.0 L577.7,148.1 L579.2,146.4 L578.3,144.4 L579.4,144.1 L578.9,142.1 L578.9,142.1 L578.9,142.1 L578.9,141.8 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>South Korea</name>
        <labelrank>2</labelrank>
        <country-abbrev>S.K.</country-abbrev>
        <subregion>Eastern Asia</subregion>
        <region-wb>East Asia &amp; Pacific</region-wb>
        <iso-a3>KOR</iso-a3>
        <iso-a2>KR</iso-a2>
        <woe-id>23424868</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.43</hc-middle-x>
        <hc-middle-y>0.49</hc-middle-y>
        <hc-key>kr</hc-key>
        <hc-a2>KR</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="GY" d="M221.1,201.5 L222.7,202.4 L226.5,206.2 L226.4,207.3 L224.8,209.9 L227.9,214.1 L226.7,214.0 L222.6,215.2 L221.1,212.7 L222.0,210.3 L221.1,208.1 L219.7,207.9 L218.5,206.5 L218.9,205.0 L220.6,204.3 L220.1,202.9 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Guyana</name>
        <labelrank>4</labelrank>
        <country-abbrev>Guy.</country-abbrev>
        <subregion>South America</subregion>
        <region-wb>Latin America &amp; Caribbean</region-wb>
        <iso-a3>GUY</iso-a3>
        <iso-a2>GY</iso-a2>
        <woe-id>23424836</woe-id>
        <continent>South America</continent>
        <hc-middle-x>0.25</hc-middle-x>
        <hc-middle-y>0.07</hc-middle-y>
        <hc-key>gy</hc-key>
        <hc-a2>GY</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="HN" d="M167.0,187.6 L171.4,187.1 L174.5,187.4 L176.8,189.0 L173.6,189.4 L171.6,191.3 L169.9,191.4 L168.8,192.9 L168.4,192.4 L167.8,192.1 L166.5,191.3 L164.8,190.2 L165.1,189.3 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Honduras</name>
        <labelrank>5</labelrank>
        <country-abbrev>Hond.</country-abbrev>
        <subregion>Central America</subregion>
        <region-wb>Latin America &amp; Caribbean</region-wb>
        <iso-a3>HND</iso-a3>
        <iso-a2>HN</iso-a2>
        <woe-id>23424841</woe-id>
        <continent>North America</continent>
        <hc-middle-x>0.71</hc-middle-x>
        <hc-middle-y>0.09</hc-middle-y>
        <hc-key>hn</hc-key>
        <hc-a2>HN</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="NI" d="M171.9,196.6 L168.1,193.2 L168.8,192.9 L169.9,191.4 L171.6,191.3 L173.6,189.4 L176.8,189.0 L175.4,196.1 L175.8,196.9 L173.8,196.6 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Nicaragua</name>
        <labelrank>5</labelrank>
        <country-abbrev>Nic.</country-abbrev>
        <subregion>Central America</subregion>
        <region-wb>Latin America &amp; Caribbean</region-wb>
        <iso-a3>NIC</iso-a3>
        <iso-a2>NI</iso-a2>
        <woe-id>23424915</woe-id>
        <continent>North America</continent>
        <hc-middle-x>0.84</hc-middle-x>
        <hc-middle-y>0.50</hc-middle-y>
        <hc-key>ni</hc-key>
        <hc-a2>NI</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="ET" d="M416.2,196.2 L416.0,196.4 L416.2,196.6 L416.5,196.9 L418.4,196.8 L417.8,197.5 L420.5,200.6 L426.2,202.5 L428.1,202.5 L422.2,208.4 L420.4,208.4 L416.4,210.2 L414.2,209.6 L411.9,211.3 L409.1,210.9 L406.7,209.4 L405.0,209.0 L402.7,205.1 L399.7,201.8 L401.2,201.7 L401.4,199.7 L403.3,195.3 L405.3,193.5 L406.1,190.5 L408.1,190.7 L408.7,189.3 L414.4,190.8 L417.3,193.9 L416.1,195.7 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Ethiopia</name>
        <labelrank>2</labelrank>
        <country-abbrev>Eth.</country-abbrev>
        <subregion>Eastern Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>ETH</iso-a3>
        <iso-a2>ET</iso-a2>
        <woe-id>23424808</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.44</hc-middle-x>
        <hc-middle-y>0.58</hc-middle-y>
        <hc-key>et</hc-key>
        <hc-a2>ET</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="SO" d="M416.4,210.2 L420.4,208.4 L422.2,208.4 L428.1,202.5 L429.9,199.8 L429.9,196.3 L434.4,195.2 L433.6,199.7 L431.6,202.6 L430.1,206.1 L428.0,209.3 L424.3,213.2 L421.5,214.8 L416.8,219.4 L415.7,221.0 L414.7,219.5 L414.7,212.4 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Somalia</name>
        <labelrank>6</labelrank>
        <country-abbrev>Som.</country-abbrev>
        <subregion>Eastern Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>SOM</iso-a3>
        <iso-a2>SO</iso-a2>
        <woe-id>-90</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.39</hc-middle-x>
        <hc-middle-y>0.74</hc-middle-y>
        <hc-key>so</hc-key>
        <hc-a2>SO</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="GH" d="M338.4,206.2 L332.1,208.8 L330.4,208.1 L329.9,205.2 L331.3,202.1 L331.0,199.7 L330.8,196.8 L335.8,196.5 L336.9,198.2 L336.6,199.5 L337.3,203.8 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Ghana</name>
        <labelrank>3</labelrank>
        <country-abbrev>Ghana</country-abbrev>
        <subregion>Western Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>GHA</iso-a3>
        <iso-a2>GH</iso-a2>
        <woe-id>23424824</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.13</hc-middle-x>
        <hc-middle-y>0.78</hc-middle-y>
        <hc-key>gh</hc-key>
        <hc-a2>GH</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="SI" d="M362.2,124.5 L362.2,124.4 L362.4,124.3 L361.7,122.6 L362.4,122.1 L364.0,122.4 L367.0,121.3 L367.3,121.2 L367.8,122.1 L366.1,122.8 L365.6,124.6 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Slovenia</name>
        <labelrank>6</labelrank>
        <country-abbrev>Slo.</country-abbrev>
        <subregion>Southern Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>SVN</iso-a3>
        <iso-a2>SI</iso-a2>
        <woe-id>23424945</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.52</hc-middle-x>
        <hc-middle-y>0.57</hc-middle-y>
        <hc-key>si</hc-key>
        <hc-a2>SI</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="GT" d="M165.7,187.3 L166.3,187.2 L167.0,187.6 L165.1,189.3 L164.8,190.2 L163.4,191.2 L163.4,191.5 L161.1,191.1 L159.3,189.9 L160.3,186.9 L162.9,186.4 L160.9,184.6 L161.8,183.5 L165.2,183.5 L165.1,187.3 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Guatemala</name>
        <labelrank>3</labelrank>
        <country-abbrev>Guat.</country-abbrev>
        <subregion>Central America</subregion>
        <region-wb>Latin America &amp; Caribbean</region-wb>
        <iso-a3>GTM</iso-a3>
        <iso-a2>GT</iso-a2>
        <woe-id>23424834</woe-id>
        <continent>North America</continent>
        <hc-middle-x>0.44</hc-middle-x>
        <hc-middle-y>0.87</hc-middle-y>
        <hc-key>gt</hc-key>
        <hc-a2>GT</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="JO" d="M404.0,156.6 L404.2,156.4 L404.0,156.3 L404.0,156.3 L404.0,156.1 L404.2,156.1 L404.3,155.2 L404.2,154.5 L404.3,153.9 L404.3,153.3 L404.6,153.1 L406.7,154.0 L410.4,151.8 L411.0,153.6 L411.1,154.4 L406.9,155.8 L408.9,157.8 L405.1,160.6 L403.1,160.2 L403.2,159.9 L403.1,159.8 L403.5,158.0 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Jordan</name>
        <labelrank>4</labelrank>
        <country-abbrev>Jord.</country-abbrev>
        <subregion>Western Asia</subregion>
        <region-wb>Middle East &amp; North Africa</region-wb>
        <iso-a3>JOR</iso-a3>
        <iso-a2>JO</iso-a2>
        <woe-id>23424860</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.45</hc-middle-x>
        <hc-middle-y>0.84</hc-middle-y>
        <hc-key>jo</hc-key>
        <hc-a2>JO</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="WE" d="M404.3,155.2 L404.0,155.5 L404.0,155.8 L403.1,154.3 L404.3,153.9 L404.2,154.5 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>West Bank</name>
        <labelrank>4</labelrank>
        <country-abbrev>We. B.</country-abbrev>
        <subregion>Western Asia</subregion>
        <region-wb>Middle East &amp; North Africa</region-wb>
        <iso-a3>WEB</iso-a3>
        <iso-a2>WE</iso-a2>
        <woe-id>-90</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.75</hc-middle-x>
        <hc-middle-y>0.52</hc-middle-y>
        <hc-key>we</hc-key>
        <hc-a2>WE</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="IL" d="M404.3,153.9 L403.1,154.3 L404.0,155.8 L404.0,156.1 L404.0,156.1 L404.0,156.3 L404.0,156.3 L403.9,156.4 L404.0,156.6 L403.5,158.0 L403.1,159.8 L403.0,160.0 L403.0,160.0 L402.9,159.4 L401.8,156.4 L402.3,155.7 L402.2,155.6 L402.9,154.1 L403.4,152.4 L404.1,152.4 L404.8,151.7 L404.9,152.7 L404.6,153.1 L404.3,153.3 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Israel</name>
        <labelrank>4</labelrank>
        <country-abbrev>Isr.</country-abbrev>
        <subregion>Western Asia</subregion>
        <region-wb>Middle East &amp; North Africa</region-wb>
        <iso-a3>ISR</iso-a3>
        <iso-a2>IL</iso-a2>
        <woe-id>23424852</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.72</hc-middle-x>
        <hc-middle-y>0.11</hc-middle-y>
        <hc-key>il</hc-key>
        <hc-a2>IL</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="ZM" d="M391.2,249.6 L389.3,250.2 L387.9,252.4 L385.9,252.4 L384.5,252.0 L382.5,251.4 L380.9,251.7 L378.2,248.8 L378.2,242.7 L382.1,242.7 L382.0,238.6 L382.7,239.6 L384.6,239.2 L384.7,240.1 L387.3,240.8 L388.2,239.9 L392.0,243.5 L393.2,243.5 L393.2,241.1 L391.7,241.5 L390.5,239.7 L390.8,235.7 L392.0,234.4 L391.5,234.0 L391.5,234.0 L394.7,233.5 L394.5,234.0 L395.8,234.2 L397.4,235.1 L399.2,235.8 L400.7,238.0 L400.0,238.5 L399.8,241.0 L399.0,244.0 L399.7,244.7 L394.0,246.5 L394.4,247.8 L392.5,248.0 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Zambia</name>
        <labelrank>3</labelrank>
        <country-abbrev>Zambia</country-abbrev>
        <subregion>Eastern Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>ZMB</iso-a3>
        <iso-a2>ZM</iso-a2>
        <woe-id>23425003</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.36</hc-middle-x>
        <hc-middle-y>0.58</hc-middle-y>
        <hc-key>zm</hc-key>
        <hc-a2>ZM</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="MC" d="M350.4,128.7 L350.3,128.7 L350.2,128.7 L350.3,128.6 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Monaco</name>
        <labelrank>6</labelrank>
        <country-abbrev>Mco.</country-abbrev>
        <subregion>Western Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>MCO</iso-a3>
        <iso-a2>MC</iso-a2>
        <woe-id>23424892</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.50</hc-middle-x>
        <hc-middle-y>0.67</hc-middle-y>
        <hc-key>mc</hc-key>
        <hc-a2>MC</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="UY" d="M234.2,282.3 L233.3,283.3 L233.5,284.2 L233.5,284.4 L233.8,284.6 L233.1,286.0 L230.8,287.3 L228.2,287.1 L225.2,286.2 L224.2,285.1 L224.6,281.9 L224.8,279.8 L225.7,277.1 L227.2,276.9 L228.8,278.4 L231.5,279.8 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Uruguay</name>
        <labelrank>4</labelrank>
        <country-abbrev>Ury.</country-abbrev>
        <subregion>South America</subregion>
        <region-wb>Latin America &amp; Caribbean</region-wb>
        <iso-a3>URY</iso-a3>
        <iso-a2>UY</iso-a2>
        <woe-id>23424979</woe-id>
        <continent>South America</continent>
        <hc-middle-x>0.80</hc-middle-x>
        <hc-middle-y>0.64</hc-middle-y>
        <hc-key>uy</hc-key>
        <hc-a2>UY</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="RW" d="M394.5,219.8 L395.2,220.8 L394.7,222.4 L393.0,223.1 L391.7,223.0 L391.5,222.9 L391.5,222.5 L392.4,221.7 L392.1,221.0 L392.4,220.7 L392.8,220.4 L393.4,220.6 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Rwanda</name>
        <labelrank>3</labelrank>
        <country-abbrev>Rwa.</country-abbrev>
        <subregion>Eastern Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>RWA</iso-a3>
        <iso-a2>RW</iso-a2>
        <woe-id>23424937</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.48</hc-middle-x>
        <hc-middle-y>0.55</hc-middle-y>
        <hc-key>rw</hc-key>
        <hc-a2>RW</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="BO" d="M203.6,249.0 L203.8,248.7 L203.9,249.0 L203.7,248.9 Z M202.9,251.5 L202.6,251.0 L203.8,249.6 L204.6,248.9 L203.2,247.6 L204.1,245.0 L204.5,241.7 L202.8,238.7 L205.2,238.8 L208.4,236.7 L210.9,236.6 L210.8,239.1 L212.7,241.6 L215.2,242.0 L217.6,243.7 L220.2,244.2 L220.9,249.1 L224.1,249.2 L224.2,251.0 L225.8,252.8 L224.6,256.7 L222.9,255.0 L217.7,255.7 L216.7,257.5 L216.0,260.8 L213.5,260.4 L212.8,262.1 L212.3,260.8 L209.2,260.0 L207.3,262.0 L206.0,262.0 L205.4,258.9 L204.3,256.6 L204.8,255.3 L203.9,254.3 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Bolivia</name>
        <labelrank>3</labelrank>
        <country-abbrev>Bolivia</country-abbrev>
        <subregion>South America</subregion>
        <region-wb>Latin America &amp; Caribbean</region-wb>
        <iso-a3>BOL</iso-a3>
        <iso-a2>BO</iso-a2>
        <woe-id>23424762</woe-id>
        <continent>South America</continent>
        <hc-middle-x>0.49</hc-middle-x>
        <hc-middle-y>0.59</hc-middle-y>
        <hc-key>bo</hc-key>
        <hc-a2>BO</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="CG" d="M361.6,213.7 L364.0,213.6 L367.1,214.5 L367.2,213.5 L367.9,211.2 L369.6,210.7 L371.8,211.2 L370.7,213.7 L370.1,218.8 L367.2,221.9 L367.2,224.1 L364.5,227.0 L363.6,226.0 L361.2,226.6 L360.7,226.2 L359.1,227.4 L358.8,226.6 L357.4,225.3 L358.5,223.8 L358.3,222.3 L362.5,221.8 L363.1,222.6 L363.9,219.0 L362.6,218.2 L363.8,216.1 L363.3,215.2 L361.5,215.5 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Republic of Congo</name>
        <labelrank>4</labelrank>
        <country-abbrev>Rep. Congo</country-abbrev>
        <subregion>Middle Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>COG</iso-a3>
        <iso-a2>CG</iso-a2>
        <woe-id>23424779</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.15</hc-middle-x>
        <hc-middle-y>0.78</hc-middle-y>
        <hc-key>cg</hc-key>
        <hc-a2>CG</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="EH" d="M303.4,177.7 L303.3,177.5 L303.5,176.4 L307.7,176.3 L308.9,174.6 L309.2,172.4 L312.3,169.5 L313.1,167.1 L314.3,165.3 L317.5,165.4 L319.3,164.9 L319.5,163.7 L319.5,164.5 L319.4,167.2 L313.1,167.2 L313.1,172.2 L311.2,173.2 L311.2,176.6 L303.6,176.6 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Western Sahara</name>
        <labelrank>7</labelrank>
        <country-abbrev>W. Sah.</country-abbrev>
        <subregion>Northern Africa</subregion>
        <region-wb>Middle East &amp; North Africa</region-wb>
        <iso-a3>ESH</iso-a3>
        <iso-a2>EH</iso-a2>
        <woe-id>23424990</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.41</hc-middle-x>
        <hc-middle-y>0.71</hc-middle-y>
        <hc-key>eh</hc-key>
        <hc-a2>EH</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="RS" d="M372.9,129.1 L373.2,126.0 L372.6,126.0 L372.6,125.4 L372.3,123.5 L373.6,122.9 L374.9,123.1 L377.1,126.0 L379.6,127.5 L378.9,128.5 L380.2,129.9 L378.9,132.0 L378.8,131.8 L377.4,132.1 L377.8,131.1 L376.0,129.8 L375.1,130.8 L373.7,130.0 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Republic of Serbia</name>
        <labelrank>5</labelrank>
        <country-abbrev>Serb.</country-abbrev>
        <subregion>Southern Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>SRB</iso-a3>
        <iso-a2>RS</iso-a2>
        <woe-id>-90</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.42</hc-middle-x>
        <hc-middle-y>0.52</hc-middle-y>
        <hc-key>rs</hc-key>
        <hc-a2>RS</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="ME" d="M372.9,129.1 L373.7,130.0 L375.1,130.8 L374.5,131.0 L374.6,131.4 L373.9,131.2 L373.3,131.9 L373.3,132.0 L373.2,132.0 L373.2,132.0 L372.8,132.1 L373.2,132.5 L373.2,132.8 L373.2,133.0 L371.9,131.6 L371.6,131.7 L371.5,131.6 L371.4,131.4 L371.5,130.4 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Montenegro</name>
        <labelrank>6</labelrank>
        <country-abbrev>Mont.</country-abbrev>
        <subregion>Southern Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>MNE</iso-a3>
        <iso-a2>ME</iso-a2>
        <woe-id>20069817</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.42</hc-middle-x>
        <hc-middle-y>0.47</hc-middle-y>
        <hc-key>me</hc-key>
        <hc-a2>ME</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="TG" d="M337.8,196.8 L339.2,200.5 L339.2,206.0 L338.8,206.0 L338.4,206.2 L337.3,203.8 L336.6,199.5 L336.9,198.2 L335.8,196.5 L337.0,196.8 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Togo</name>
        <labelrank>6</labelrank>
        <country-abbrev>Togo</country-abbrev>
        <subregion>Western Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>TGO</iso-a3>
        <iso-a2>TG</iso-a2>
        <woe-id>23424965</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.85</hc-middle-x>
        <hc-middle-y>0.80</hc-middle-y>
        <hc-key>tg</hc-key>
        <hc-a2>TG</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="LA" d="M542.2,189.6 L540.3,189.8 L539.1,191.1 L537.7,190.3 L538.6,187.8 L536.9,186.0 L537.0,184.4 L535.4,182.5 L534.3,182.3 L532.9,183.5 L531.8,182.7 L529.9,184.2 L530.2,180.1 L528.7,180.1 L528.0,178.6 L529.2,176.6 L530.0,176.1 L531.1,177.0 L530.9,174.3 L531.8,174.4 L533.5,176.1 L533.7,177.5 L535.5,177.3 L537.3,179.0 L535.1,180.6 L538.2,182.8 L541.8,187.0 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Laos</name>
        <labelrank>4</labelrank>
        <country-abbrev>Laos</country-abbrev>
        <subregion>South-Eastern Asia</subregion>
        <region-wb>East Asia &amp; Pacific</region-wb>
        <iso-a3>LAO</iso-a3>
        <iso-a2>LA</iso-a2>
        <woe-id>23424872</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.51</hc-middle-x>
        <hc-middle-y>0.26</hc-middle-y>
        <hc-key>la</hc-key>
        <hc-a2>LA</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="AF" d="M479.7,143.4 L478.7,143.6 L479.0,143.9 L475.2,144.3 L472.5,146.0 L473.4,147.8 L472.3,150.3 L470.3,150.3 L470.8,151.9 L469.4,152.4 L468.9,154.8 L466.7,155.1 L463.3,157.0 L463.0,159.2 L458.9,160.2 L455.9,160.1 L452.7,159.2 L454.5,157.2 L454.3,156.0 L452.7,155.8 L452.0,150.2 L453.5,146.9 L455.5,147.9 L459.6,145.6 L460.8,143.4 L462.1,142.6 L463.6,143.1 L465.0,143.5 L466.0,143.5 L466.5,144.1 L469.4,142.6 L470.6,142.7 L471.7,140.7 L473.3,141.9 L473.4,144.6 L476.6,142.9 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Afghanistan</name>
        <labelrank>3</labelrank>
        <country-abbrev>Afg.</country-abbrev>
        <subregion>Southern Asia</subregion>
        <region-wb>South Asia</region-wb>
        <iso-a3>AFG</iso-a3>
        <iso-a2>AF</iso-a2>
        <woe-id>23424739</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.38</hc-middle-x>
        <hc-middle-y>0.53</hc-middle-y>
        <hc-key>af</hc-key>
        <hc-a2>AF</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="JK" d="M485.2,147.2 L483.8,148.0 L483.3,146.9 L484.5,147.3 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Siachen Glacier</name>
        <labelrank>5</labelrank>
        <country-abbrev>Siachen</country-abbrev>
        <subregion>Southern Asia</subregion>
        <region-wb>South Asia</region-wb>
        <iso-a3>-99</iso-a3>
        <iso-a2>JK</iso-a2>
        <woe-id>23424928</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.40</hc-middle-x>
        <hc-middle-y>0.63</hc-middle-y>
        <hc-key>jk</hc-key>
        <hc-a2>JK</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="PK" d="M483.3,146.9 L483.8,148.0 L481.3,149.3 L478.5,148.8 L477.5,149.6 L478.5,153.0 L480.5,154.1 L478.9,155.3 L479.2,156.6 L476.7,159.0 L475.8,160.9 L473.8,163.1 L471.9,163.7 L470.9,163.0 L469.2,165.5 L472.3,169.8 L470.2,170.9 L467.8,170.6 L466.8,171.5 L466.8,171.5 L466.8,171.5 L465.7,171.6 L463.4,168.0 L462.0,168.5 L454.2,168.8 L454.7,166.7 L457.1,165.9 L456.4,162.5 L454.7,161.9 L452.7,159.2 L455.9,160.1 L458.9,160.2 L463.0,159.2 L463.3,157.0 L466.7,155.1 L468.9,154.8 L469.4,152.4 L470.8,151.9 L470.3,150.3 L472.3,150.3 L473.4,147.8 L472.5,146.0 L475.2,144.3 L479.0,143.9 L481.7,145.1 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Pakistan</name>
        <labelrank>2</labelrank>
        <country-abbrev>Pak.</country-abbrev>
        <subregion>Southern Asia</subregion>
        <region-wb>South Asia</region-wb>
        <iso-a3>PAK</iso-a3>
        <iso-a2>PK</iso-a2>
        <woe-id>23424922</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.47</hc-middle-x>
        <hc-middle-y>0.59</hc-middle-y>
        <hc-key>pk</hc-key>
        <hc-a2>PK</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="BG" d="M390.9,128.7 L389.1,131.6 L389.8,132.7 L388.4,132.5 L386.6,133.3 L384.6,134.4 L383.1,133.7 L380.0,134.2 L379.9,132.7 L378.9,132.0 L380.2,129.9 L378.9,128.5 L379.6,127.5 L380.8,128.3 L384.7,128.9 L387.9,127.6 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Bulgaria</name>
        <labelrank>4</labelrank>
        <country-abbrev>Bulg.</country-abbrev>
        <subregion>Eastern Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>BGR</iso-a3>
        <iso-a2>BG</iso-a2>
        <woe-id>23424771</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.76</hc-middle-x>
        <hc-middle-y>0.51</hc-middle-y>
        <hc-key>bg</hc-key>
        <hc-a2>BG</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="UA" d="M379.3,115.9 L379.5,114.7 L382.3,112.2 L381.4,109.7 L382.9,108.8 L385.5,108.7 L388.3,109.5 L392.3,110.1 L394.6,109.5 L395.4,108.3 L397.0,108.2 L400.9,107.6 L401.6,110.4 L403.4,110.6 L404.5,112.7 L407.9,112.5 L411.2,113.9 L413.0,115.4 L412.2,116.0 L412.3,118.9 L410.5,118.9 L409.4,120.7 L404.9,121.8 L402.8,122.9 L403.8,124.8 L406.2,124.7 L401.2,127.2 L399.1,124.2 L400.8,123.5 L397.1,122.5 L398.4,121.9 L395.5,121.9 L393.1,124.2 L393.0,125.2 L391.3,125.2 L390.2,124.6 L391.6,122.2 L393.3,122.5 L393.5,121.4 L391.9,119.6 L392.1,118.8 L389.3,117.4 L387.1,117.9 L383.8,119.2 L383.2,118.6 L380.0,118.6 L379.4,118.2 L378.5,117.5 L378.9,116.8 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Ukraine</name>
        <labelrank>3</labelrank>
        <country-abbrev>Ukr.</country-abbrev>
        <subregion>Eastern Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>UKR</iso-a3>
        <iso-a2>UA</iso-a2>
        <woe-id>23424976</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.70</hc-middle-x>
        <hc-middle-y>0.46</hc-middle-y>
        <hc-key>ua</hc-key>
        <hc-a2>UA</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="RO" d="M390.2,124.6 L391.3,125.2 L393.0,125.2 L391.0,127.3 L390.9,128.7 L387.9,127.6 L384.7,128.9 L380.8,128.3 L379.6,127.5 L377.1,126.0 L374.9,123.1 L376.6,122.7 L378.3,119.7 L380.0,118.6 L383.2,118.6 L383.8,119.2 L387.1,117.9 L387.9,118.1 L390.2,121.7 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Romania</name>
        <labelrank>3</labelrank>
        <country-abbrev>Rom.</country-abbrev>
        <subregion>Eastern Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>ROU</iso-a3>
        <iso-a2>RO</iso-a2>
        <woe-id>23424933</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.67</hc-middle-x>
        <hc-middle-y>0.50</hc-middle-y>
        <hc-key>ro</hc-key>
        <hc-a2>RO</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="QA" d="M433.5,169.7 L434.3,166.8 L435.0,169.3 L434.3,169.9 L433.8,170.1 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Qatar</name>
        <labelrank>5</labelrank>
        <country-abbrev>Qatar</country-abbrev>
        <subregion>Western Asia</subregion>
        <region-wb>Middle East &amp; North Africa</region-wb>
        <iso-a3>QAT</iso-a3>
        <iso-a2>QA</iso-a2>
        <woe-id>23424930</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.68</hc-middle-x>
        <hc-middle-y>0.54</hc-middle-y>
        <hc-key>qa</hc-key>
        <hc-a2>QA</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="LI" d="M354.5,120.8 L354.3,120.8 L354.4,120.3 L354.5,120.7 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Liechtenstein</name>
        <labelrank>6</labelrank>
        <country-abbrev>Liech.</country-abbrev>
        <subregion>Western Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>LIE</iso-a3>
        <iso-a2>LI</iso-a2>
        <woe-id>23424879</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.61</hc-middle-x>
        <hc-middle-y>0.53</hc-middle-y>
        <hc-key>li</hc-key>
        <hc-a2>LI</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="AT" d="M354.5,120.8 L354.5,120.7 L354.4,120.3 L354.6,119.9 L354.4,119.7 L354.6,119.7 L354.7,119.6 L355.9,120.2 L359.4,119.2 L361.1,119.7 L360.5,118.2 L362.6,116.6 L364.3,117.0 L364.8,116.0 L368.6,117.0 L368.4,117.6 L369.0,118.5 L367.9,119.1 L367.0,121.3 L364.0,122.4 L362.4,122.1 L359.3,120.9 L356.1,121.2 L355.5,121.3 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Austria</name>
        <labelrank>4</labelrank>
        <country-abbrev>Aust.</country-abbrev>
        <subregion>Western Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>AUT</iso-a3>
        <iso-a2>AT</iso-a2>
        <woe-id>23424750</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.52</hc-middle-x>
        <hc-middle-y>0.62</hc-middle-y>
        <hc-key>at</hc-key>
        <hc-a2>AT</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="SZ" d="M397.3,268.4 L397.5,269.0 L397.7,270.2 L395.8,270.9 L395.1,269.4 L396.3,267.9 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Swaziland</name>
        <labelrank>4</labelrank>
        <country-abbrev>Swz.</country-abbrev>
        <subregion>Southern Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>SWZ</iso-a3>
        <iso-a2>SZ</iso-a2>
        <woe-id>23424993</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.51</hc-middle-x>
        <hc-middle-y>0.46</hc-middle-y>
        <hc-key>sz</hc-key>
        <hc-a2>SZ</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="HU" d="M380.0,118.6 L378.3,119.7 L376.6,122.7 L374.9,123.1 L373.6,122.9 L372.3,123.5 L369.4,123.4 L367.8,122.1 L367.3,121.2 L367.0,121.3 L367.9,119.1 L369.0,118.5 L370.3,119.1 L374.2,118.2 L375.4,117.2 L378.5,117.5 L379.4,118.2 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Hungary</name>
        <labelrank>5</labelrank>
        <country-abbrev>Hun.</country-abbrev>
        <subregion>Eastern Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>HUN</iso-a3>
        <iso-a2>HU</iso-a2>
        <woe-id>23424844</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.27</hc-middle-x>
        <hc-middle-y>0.61</hc-middle-y>
        <hc-key>hu</hc-key>
        <hc-a2>HU</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="NE" d="M343.0,195.4 L341.6,194.1 L340.7,195.0 L340.2,193.5 L338.0,192.8 L336.5,189.2 L338.7,188.5 L342.8,188.3 L344.1,186.3 L344.2,180.9 L347.3,180.2 L350.5,177.5 L359.0,172.2 L362.0,172.9 L363.4,174.0 L364.8,173.2 L365.2,176.2 L366.7,178.5 L366.3,179.4 L365.8,185.3 L361.9,190.2 L362.2,191.5 L360.0,192.8 L356.6,192.2 L354.6,193.3 L351.0,192.3 L349.3,192.9 L346.8,191.2 L344.0,192.0 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Niger</name>
        <labelrank>3</labelrank>
        <country-abbrev>Niger</country-abbrev>
        <subregion>Western Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>NER</iso-a3>
        <iso-a2>NE</iso-a2>
        <woe-id>23424906</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.64</hc-middle-x>
        <hc-middle-y>0.53</hc-middle-y>
        <hc-key>ne</hc-key>
        <hc-a2>NE</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="LU" d="M348.3,114.9 L347.5,114.9 L347.2,114.7 L347.1,113.8 L347.8,113.2 L348.6,114.1 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Luxembourg</name>
        <labelrank>6</labelrank>
        <country-abbrev>Lux.</country-abbrev>
        <subregion>Western Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>LUX</iso-a3>
        <iso-a2>LU</iso-a2>
        <woe-id>23424881</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.48</hc-middle-x>
        <hc-middle-y>0.60</hc-middle-y>
        <hc-key>lu</hc-key>
        <hc-a2>LU</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="AD" d="M338.8,131.3 L339.4,131.3 L339.4,131.5 L339.0,131.7 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Andorra</name>
        <labelrank>6</labelrank>
        <country-abbrev>And.</country-abbrev>
        <subregion>Southern Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>AND</iso-a3>
        <iso-a2>AD</iso-a2>
        <woe-id>23424744</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.58</hc-middle-x>
        <hc-middle-y>0.31</hc-middle-y>
        <hc-key>ad</hc-key>
        <hc-a2>AD</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="CI" d="M321.8,206.7 L319.6,205.4 L319.8,203.4 L321.0,199.8 L320.8,198.4 L322.8,198.3 L324.1,197.3 L325.5,197.9 L327.1,199.3 L330.0,198.9 L331.0,199.7 L331.3,202.1 L329.9,205.2 L330.4,208.1 L325.5,208.1 L321.7,209.5 L321.7,209.5 L321.7,209.5 L321.7,209.5 L321.6,209.5 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Ivory Coast</name>
        <labelrank>3</labelrank>
        <country-abbrev>I.C.</country-abbrev>
        <subregion>Western Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>CIV</iso-a3>
        <iso-a2>CI</iso-a2>
        <woe-id>23424854</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.50</hc-middle-x>
        <hc-middle-y>0.53</hc-middle-y>
        <hc-key>ci</hc-key>
        <hc-a2>CI</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="LR" d="M319.8,203.4 L319.6,205.4 L321.8,206.7 L321.7,209.5 L321.7,209.5 L321.7,209.5 L318.3,208.0 L314.1,204.6 L315.8,203.0 L316.4,201.6 L317.9,201.9 L318.6,204.1 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Liberia</name>
        <labelrank>4</labelrank>
        <country-abbrev>Liberia</country-abbrev>
        <subregion>Western Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>LBR</iso-a3>
        <iso-a2>LR</iso-a2>
        <woe-id>23424876</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.95</hc-middle-x>
        <hc-middle-y>0.75</hc-middle-y>
        <hc-key>lr</hc-key>
        <hc-a2>LR</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="BN" d="M556.6,208.6 L556.8,208.6 L556.8,208.4 L557.2,209.6 Z M554.6,209.0 L555.6,208.9 L556.5,208.5 L555.7,210.1 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Brunei</name>
        <labelrank>6</labelrank>
        <country-abbrev>Brunei</country-abbrev>
        <subregion>South-Eastern Asia</subregion>
        <region-wb>East Asia &amp; Pacific</region-wb>
        <iso-a3>BRN</iso-a3>
        <iso-a2>BN</iso-a2>
        <woe-id>23424773</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.32</hc-middle-x>
        <hc-middle-y>0.33</hc-middle-y>
        <hc-key>bn</hc-key>
        <hc-a2>BN</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="MR" d="M319.5,164.5 L325.5,168.3 L326.9,169.2 L326.9,169.2 L326.9,169.2 L323.5,169.2 L325.5,188.1 L315.5,188.2 L313.6,188.0 L312.6,189.5 L308.6,185.8 L304.8,186.1 L304.4,187.4 L305.4,183.2 L304.4,180.4 L305.1,178.8 L303.4,177.7 L303.6,176.6 L311.2,176.6 L311.2,173.2 L313.1,172.2 L313.1,167.2 L319.4,167.2 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Mauritania</name>
        <labelrank>3</labelrank>
        <country-abbrev>Mrt.</country-abbrev>
        <subregion>Western Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>MRT</iso-a3>
        <iso-a2>MR</iso-a2>
        <woe-id>23424896</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.61</hc-middle-x>
        <hc-middle-y>0.63</hc-middle-y>
        <hc-key>mr</hc-key>
        <hc-a2>MR</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="BE" d="M347.8,113.2 L347.1,113.8 L347.2,114.7 L344.0,113.6 L340.9,110.8 L342.1,110.2 L342.5,110.1 L343.6,110.5 L344.2,110.1 L344.4,110.3 L344.3,110.1 L345.7,109.8 L347.6,111.7 L348.3,112.8 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Belgium</name>
        <labelrank>2</labelrank>
        <country-abbrev>Belg.</country-abbrev>
        <subregion>Western Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>BEL</iso-a3>
        <iso-a2>BE</iso-a2>
        <woe-id>23424757</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.54</hc-middle-x>
        <hc-middle-y>0.40</hc-middle-y>
        <hc-key>be</hc-key>
        <hc-a2>BE</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="IQ" d="M429.1,159.0 L428.5,158.8 L428.0,158.9 L426.4,159.0 L425.3,160.8 L421.8,160.6 L416.8,156.6 L413.6,154.9 L411.1,154.4 L411.0,153.6 L410.4,151.8 L415.1,148.8 L415.5,144.9 L417.3,143.7 L418.0,143.1 L421.9,143.6 L423.0,146.1 L424.8,146.5 L423.1,150.5 L424.8,152.6 L426.8,153.7 L427.8,155.2 L427.5,156.8 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Iraq</name>
        <labelrank>3</labelrank>
        <country-abbrev>Iraq</country-abbrev>
        <subregion>Western Asia</subregion>
        <region-wb>Middle East &amp; North Africa</region-wb>
        <iso-a3>IRQ</iso-a3>
        <iso-a2>IQ</iso-a2>
        <woe-id>23424855</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.46</hc-middle-x>
        <hc-middle-y>0.44</hc-middle-y>
        <hc-key>iq</hc-key>
        <hc-a2>IQ</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="GM" d="M304.0,192.8 L303.9,192.3 L304.4,191.8 L304.4,191.8 L306.4,191.8 L305.8,192.6 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Gambia</name>
        <labelrank>6</labelrank>
        <country-abbrev>Gambia</country-abbrev>
        <subregion>Western Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>GMB</iso-a3>
        <iso-a2>GM</iso-a2>
        <woe-id>23424821</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.51</hc-middle-x>
        <hc-middle-y>0.42</hc-middle-y>
        <hc-key>gm</hc-key>
        <hc-a2>GM</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="MA" d="M325.9,146.4 L327.7,147.9 L330.5,147.6 L330.5,147.7 L330.5,147.7 L330.5,147.9 L331.8,148.1 L332.7,148.8 L332.9,152.1 L334.1,153.6 L333.7,154.5 L331.3,154.4 L329.1,155.4 L329.1,157.4 L325.1,159.7 L321.5,160.2 L319.5,161.7 L319.5,163.7 L319.3,164.9 L317.5,165.4 L314.3,165.3 L313.1,167.1 L312.3,169.5 L309.2,172.4 L308.9,174.6 L307.7,176.3 L303.5,176.4 L305.9,171.5 L307.5,169.8 L308.5,166.6 L310.0,165.7 L311.3,163.2 L314.1,162.4 L315.8,161.0 L317.6,158.6 L317.2,155.9 L318.4,153.5 L319.8,152.0 L323.0,150.3 L324.8,146.5 L325.8,146.3 L325.8,146.4 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Morocco</name>
        <labelrank>3</labelrank>
        <country-abbrev>Mor.</country-abbrev>
        <subregion>Northern Africa</subregion>
        <region-wb>Middle East &amp; North Africa</region-wb>
        <iso-a3>MAR</iso-a3>
        <iso-a2>MA</iso-a2>
        <woe-id>23424893</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.60</hc-middle-x>
        <hc-middle-y>0.21</hc-middle-y>
        <hc-key>ma</hc-key>
        <hc-a2>MA</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="TD" d="M363.9,193.0 L364.4,192.8 L363.7,192.8 L363.6,192.8 L363.5,192.6 L363.5,192.8 L363.1,192.8 L362.2,191.5 L361.9,190.2 L365.8,185.3 L366.3,179.4 L366.7,178.5 L365.2,176.2 L364.8,173.2 L366.7,172.3 L382.1,180.2 L382.1,187.6 L380.4,187.7 L378.2,192.8 L380.0,196.0 L379.9,196.9 L379.2,196.8 L375.3,200.4 L372.7,200.6 L371.7,202.4 L368.2,203.4 L365.8,203.5 L365.2,201.6 L362.8,199.4 L363.3,198.7 L366.2,198.7 L365.0,197.2 L365.1,195.8 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Chad</name>
        <labelrank>3</labelrank>
        <country-abbrev>Chad</country-abbrev>
        <subregion>Middle Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>TCD</iso-a3>
        <iso-a2>TD</iso-a2>
        <woe-id>23424777</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.47</hc-middle-x>
        <hc-middle-y>0.63</hc-middle-y>
        <hc-key>td</hc-key>
        <hc-a2>TD</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="KV" d="M374.6,131.4 L374.5,131.0 L375.1,130.8 L376.0,129.8 L377.8,131.1 L377.4,132.1 L376.5,132.2 L375.5,133.0 L375.4,132.2 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Kosovo</name>
        <labelrank>6</labelrank>
        <country-abbrev>Kos.</country-abbrev>
        <subregion>Southern Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>-99</iso-a3>
        <iso-a2>KV</iso-a2>
        <woe-id>-90</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.50</hc-middle-x>
        <hc-middle-y>0.51</hc-middle-y>
        <hc-key>kv</hc-key>
        <hc-a2>KV</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="LB" d="M403.4,152.4 L404.3,150.6 L405.1,149.0 L406.3,150.0 L404.8,151.7 L404.1,152.4 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Lebanon</name>
        <labelrank>5</labelrank>
        <country-abbrev>Leb.</country-abbrev>
        <subregion>Western Asia</subregion>
        <region-wb>Middle East &amp; North Africa</region-wb>
        <iso-a3>LBN</iso-a3>
        <iso-a2>LB</iso-a2>
        <woe-id>23424873</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.39</hc-middle-x>
        <hc-middle-y>0.57</hc-middle-y>
        <hc-key>lb</hc-key>
        <hc-a2>LB</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="SX" d="M419.0,195.8 L421.0,197.8 L423.9,197.0 L425.1,197.4 L426.9,196.4 L429.9,196.3 L429.9,199.8 L428.1,202.5 L426.2,202.5 L420.5,200.6 L417.8,197.5 L418.4,196.8 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Somaliland</name>
        <labelrank>5</labelrank>
        <country-abbrev>Solnd.</country-abbrev>
        <subregion>Eastern Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>-99</iso-a3>
        <iso-a2>SX</iso-a2>
        <woe-id>-99</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.76</hc-middle-x>
        <hc-middle-y>0.53</hc-middle-y>
        <hc-key>sx</hc-key>
        <hc-a2>SX</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="DJ" d="M418.4,196.8 L416.5,196.9 L416.2,196.6 L416.4,196.4 L416.2,196.2 L416.1,195.7 L417.3,193.9 L417.9,194.1 L418.8,193.5 L419.2,194.8 L419.0,195.8 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Djibouti</name>
        <labelrank>5</labelrank>
        <country-abbrev>Dji.</country-abbrev>
        <subregion>Eastern Africa</subregion>
        <region-wb>Middle East &amp; North Africa</region-wb>
        <iso-a3>DJI</iso-a3>
        <iso-a2>DJ</iso-a2>
        <woe-id>23424797</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.56</hc-middle-x>
        <hc-middle-y>0.55</hc-middle-y>
        <hc-key>dj</hc-key>
        <hc-a2>DJ</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="ER" d="M418.8,193.5 L417.9,194.1 L417.3,193.9 L414.4,190.8 L408.7,189.3 L408.1,190.7 L406.1,190.5 L405.9,188.8 L407.0,185.0 L410.1,183.1 L412.2,188.5 L412.9,187.3 L413.3,189.2 L415.0,189.7 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Eritrea</name>
        <labelrank>4</labelrank>
        <country-abbrev>Erit.</country-abbrev>
        <subregion>Eastern Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>ERI</iso-a3>
        <iso-a2>ER</iso-a2>
        <woe-id>23424806</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.29</hc-middle-x>
        <hc-middle-y>0.05</hc-middle-y>
        <hc-key>er</hc-key>
        <hc-a2>ER</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="BI" d="M391.7,223.0 L393.0,223.1 L394.7,222.4 L395.2,223.5 L392.9,226.3 L392.3,225.0 L392.1,224.2 L392.1,223.6 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Burundi</name>
        <labelrank>6</labelrank>
        <country-abbrev>Bur.</country-abbrev>
        <subregion>Eastern Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>BDI</iso-a3>
        <iso-a2>BI</iso-a2>
        <woe-id>23424774</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.59</hc-middle-x>
        <hc-middle-y>0.47</hc-middle-y>
        <hc-key>bi</hc-key>
        <hc-a2>BI</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="SN" d="M304.0,194.2 L304.0,193.7 L304.0,192.8 L305.8,192.6 L307.2,191.3 L304.4,191.8 L303.2,189.7 L304.4,187.4 L304.8,186.1 L308.6,185.8 L312.6,189.5 L312.9,191.5 L314.3,194.1 L312.4,194.3 L309.8,193.5 L307.0,193.5 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Senegal</name>
        <labelrank>3</labelrank>
        <country-abbrev>Sen.</country-abbrev>
        <subregion>Western Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>SEN</iso-a3>
        <iso-a2>SN</iso-a2>
        <woe-id>23424943</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.20</hc-middle-x>
        <hc-middle-y>0.55</hc-middle-y>
        <hc-key>sn</hc-key>
        <hc-a2>SN</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="GN" d="M309.8,193.5 L312.4,194.3 L314.3,194.1 L315.6,195.1 L318.9,194.1 L320.8,198.4 L321.0,199.8 L319.8,203.4 L318.6,204.1 L317.9,201.9 L316.4,201.6 L314.5,198.7 L312.1,199.0 L310.6,200.5 L310.1,199.1 L307.3,196.8 L308.0,195.8 L309.8,195.4 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Guinea</name>
        <labelrank>3</labelrank>
        <country-abbrev>Gin.</country-abbrev>
        <subregion>Western Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>GIN</iso-a3>
        <iso-a2>GN</iso-a2>
        <woe-id>23424835</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.24</hc-middle-x>
        <hc-middle-y>0.51</hc-middle-y>
        <hc-key>gn</hc-key>
        <hc-a2>GN</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="ZW" d="M384.5,252.0 L385.9,252.4 L387.9,252.4 L390.0,250.2 L391.2,249.6 L392.5,248.0 L394.4,247.8 L399.3,249.9 L399.4,253.1 L398.9,255.3 L399.4,256.5 L398.2,259.0 L396.1,261.2 L394.2,261.1 L392.4,260.8 L389.8,259.5 L389.2,257.4 L386.2,255.4 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Zimbabwe</name>
        <labelrank>3</labelrank>
        <country-abbrev>Zimb.</country-abbrev>
        <subregion>Eastern Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>ZWE</iso-a3>
        <iso-a2>ZW</iso-a2>
        <woe-id>23425004</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.91</hc-middle-x>
        <hc-middle-y>0.63</hc-middle-y>
        <hc-key>zw</hc-key>
        <hc-a2>ZW</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="PY" d="M232.1,264.5 L231.9,264.9 L231.4,267.3 L231.5,267.5 L231.5,267.6 L231.1,269.8 L229.2,271.4 L223.8,271.2 L225.8,267.4 L221.0,264.4 L219.2,264.0 L216.0,260.8 L216.7,257.5 L217.7,255.7 L222.9,255.0 L224.6,256.7 L225.3,258.3 L225.0,260.4 L229.0,261.0 L229.9,264.3 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Paraguay</name>
        <labelrank>4</labelrank>
        <country-abbrev>Para.</country-abbrev>
        <subregion>South America</subregion>
        <region-wb>Latin America &amp; Caribbean</region-wb>
        <iso-a3>PRY</iso-a3>
        <iso-a2>PY</iso-a2>
        <woe-id>23424917</woe-id>
        <continent>South America</continent>
        <hc-middle-x>0.36</hc-middle-x>
        <hc-middle-y>0.36</hc-middle-y>
        <hc-key>py</hc-key>
        <hc-a2>PY</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="BY" d="M381.4,109.7 L380.5,107.7 L381.9,106.8 L381.1,103.5 L383.6,103.4 L385.5,101.0 L387.5,99.9 L387.1,98.9 L389.0,98.5 L390.1,97.6 L395.3,99.1 L395.1,101.2 L397.0,103.8 L398.8,104.8 L396.3,105.4 L397.0,108.2 L395.4,108.3 L394.6,109.5 L392.3,110.1 L388.3,109.5 L385.5,108.7 L382.9,108.8 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Belarus</name>
        <labelrank>4</labelrank>
        <country-abbrev>Bela.</country-abbrev>
        <subregion>Eastern Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>BLR</iso-a3>
        <iso-a2>BY</iso-a2>
        <woe-id>23424765</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.50</hc-middle-x>
        <hc-middle-y>0.50</hc-middle-y>
        <hc-key>by</hc-key>
        <hc-a2>BY</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="LV" d="M390.1,97.6 L389.0,98.5 L387.1,98.9 L383.8,96.8 L383.0,97.3 L378.5,96.8 L376.5,97.8 L376.5,95.7 L377.7,93.7 L379.4,93.2 L381.5,95.3 L382.8,94.6 L382.7,92.9 L384.5,92.3 L386.9,93.8 L388.5,93.8 L389.1,95.7 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Latvia</name>
        <labelrank>5</labelrank>
        <country-abbrev>Lat.</country-abbrev>
        <subregion>Northern Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>LVA</iso-a3>
        <iso-a2>LV</iso-a2>
        <woe-id>23424874</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.28</hc-middle-x>
        <hc-middle-y>0.41</hc-middle-y>
        <hc-key>lv</hc-key>
        <hc-a2>LV</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="SY" d="M404.6,153.1 L404.9,152.7 L404.8,151.7 L406.3,150.0 L405.1,149.0 L405.0,147.4 L404.9,146.3 L406.4,145.6 L406.4,144.3 L412.3,144.5 L414.1,143.7 L417.3,143.7 L415.5,144.9 L415.1,148.8 L410.4,151.8 L406.7,154.0 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Syria</name>
        <labelrank>3</labelrank>
        <country-abbrev>Syria</country-abbrev>
        <subregion>Western Asia</subregion>
        <region-wb>Middle East &amp; North Africa</region-wb>
        <iso-a3>SYR</iso-a3>
        <iso-a2>SY</iso-a2>
        <woe-id>23424956</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.25</hc-middle-x>
        <hc-middle-y>0.52</hc-middle-y>
        <hc-key>sy</hc-key>
        <hc-a2>SY</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="NA" d="M380.9,251.7 L382.5,251.4 L384.5,252.0 L381.3,253.4 L380.8,252.5 L376.3,253.1 L376.3,260.3 L374.4,260.4 L374.4,265.9 L374.4,273.4 L372.7,274.5 L369.5,274.0 L368.5,272.7 L367.7,273.7 L365.4,271.2 L363.9,264.7 L363.7,260.9 L358.8,252.7 L358.7,251.0 L361.3,250.4 L362.8,251.3 L371.5,251.2 L372.1,251.9 L376.0,252.5 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Namibia</name>
        <labelrank>3</labelrank>
        <country-abbrev>Nam.</country-abbrev>
        <subregion>Southern Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>NAM</iso-a3>
        <iso-a2>NA</iso-a2>
        <woe-id>23424987</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.33</hc-middle-x>
        <hc-middle-y>0.37</hc-middle-y>
        <hc-key>na</hc-key>
        <hc-a2>NA</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="BF" d="M337.8,196.8 L337.0,196.8 L335.8,196.5 L330.8,196.8 L331.0,199.7 L330.0,198.9 L327.1,199.3 L325.5,197.9 L326.0,195.2 L327.4,194.6 L328.5,192.0 L329.5,192.6 L331.4,190.4 L332.2,190.6 L334.7,188.9 L336.5,189.2 L338.0,192.8 L340.2,193.5 L340.7,195.0 L338.9,195.9 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Burkina Faso</name>
        <labelrank>3</labelrank>
        <country-abbrev>B.F.</country-abbrev>
        <subregion>Western Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>BFA</iso-a3>
        <iso-a2>BF</iso-a2>
        <woe-id>23424978</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.45</hc-middle-x>
        <hc-middle-y>0.53</hc-middle-y>
        <hc-key>bf</hc-key>
        <hc-a2>BF</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="SS" d="M401.2,209.8 L400.4,210.6 L395.2,211.2 L392.6,208.9 L390.5,209.7 L388.7,208.1 L386.7,205.1 L384.7,203.8 L382.4,201.2 L384.2,198.1 L385.6,197.9 L387.0,199.6 L391.4,200.0 L393.6,198.2 L396.0,199.1 L398.2,196.7 L397.6,194.8 L399.8,194.4 L399.7,197.1 L401.4,199.7 L401.2,201.7 L399.7,201.8 L402.7,205.1 L405.0,209.0 L404.0,208.2 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>South Sudan</name>
        <labelrank>3</labelrank>
        <country-abbrev>S. Sud.</country-abbrev>
        <subregion>Eastern Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>SSD</iso-a3>
        <iso-a2>SS</iso-a2>
        <woe-id>-99</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.49</hc-middle-x>
        <hc-middle-y>0.58</hc-middle-y>
        <hc-key>ss</hc-key>
        <hc-a2>SS</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="CF" d="M371.8,211.2 L369.6,210.7 L367.9,211.2 L367.2,213.5 L367.0,212.3 L364.3,209.0 L364.1,206.5 L365.8,203.5 L368.2,203.4 L371.7,202.4 L372.7,200.6 L375.3,200.4 L379.2,196.8 L379.9,196.9 L381.4,198.9 L381.1,201.0 L382.4,201.2 L384.7,203.8 L386.7,205.1 L388.7,208.1 L384.7,207.7 L380.9,209.1 L380.0,208.6 L379.1,209.9 L375.6,209.4 L373.9,208.0 L371.6,209.6 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Central African Republic</name>
        <labelrank>4</labelrank>
        <country-abbrev>C.A.R.</country-abbrev>
        <subregion>Middle Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>CAF</iso-a3>
        <iso-a2>CF</iso-a2>
        <woe-id>23424792</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.46</hc-middle-x>
        <hc-middle-y>0.46</hc-middle-y>
        <hc-key>cf</hc-key>
        <hc-a2>CF</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="MD" d="M390.2,124.6 L390.2,121.7 L387.9,118.1 L387.1,117.9 L389.3,117.4 L392.1,118.8 L391.9,119.6 L393.5,121.4 L393.3,122.5 L391.6,122.2 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Moldova</name>
        <labelrank>6</labelrank>
        <country-abbrev>Mda.</country-abbrev>
        <subregion>Eastern Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>MDA</iso-a3>
        <iso-a2>MD</iso-a2>
        <woe-id>23424885</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.55</hc-middle-x>
        <hc-middle-y>0.41</hc-middle-y>
        <hc-key>md</hc-key>
        <hc-a2>MD</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="GZ" d="M401.8,156.4 L401.7,156.2 L401.7,156.1 L402.1,155.7 L402.2,155.6 L402.3,155.7 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Gaza Strip</name>
        <labelrank>4</labelrank>
        <country-abbrev>Gaz.</country-abbrev>
        <subregion>Western Asia</subregion>
        <region-wb>Middle East &amp; North Africa</region-wb>
        <iso-a3>GAZ</iso-a3>
        <iso-a2>GZ</iso-a2>
        <woe-id>-90</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.47</hc-middle-x>
        <hc-middle-y>0.48</hc-middle-y>
        <hc-key>gz</hc-key>
        <hc-a2>GZ</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="KE" d="M415.7,221.0 L414.5,221.6 L411.6,226.6 L411.2,226.7 L408.2,224.5 L408.3,223.6 L401.4,219.8 L401.8,218.3 L401.3,217.3 L403.2,214.6 L403.0,213.1 L401.2,209.8 L404.0,208.2 L405.0,209.0 L406.7,209.4 L409.1,210.9 L411.9,211.3 L414.2,209.6 L416.4,210.2 L414.7,212.4 L414.7,219.5 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Kenya</name>
        <labelrank>2</labelrank>
        <country-abbrev>Ken.</country-abbrev>
        <subregion>Eastern Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>KEN</iso-a3>
        <iso-a2>KE</iso-a2>
        <woe-id>23424863</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.87</hc-middle-x>
        <hc-middle-y>0.70</hc-middle-y>
        <hc-key>ke</hc-key>
        <hc-a2>KE</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="CZ" d="M364.5,111.4 L367.4,111.9 L368.1,113.3 L369.0,112.6 L371.7,113.8 L372.2,114.8 L371.0,115.4 L368.6,117.0 L364.8,116.0 L364.3,117.0 L362.6,116.6 L360.6,115.2 L359.6,113.4 L360.1,112.6 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Czech Republic</name>
        <labelrank>5</labelrank>
        <country-abbrev>Cz. Rep.</country-abbrev>
        <subregion>Eastern Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>CZE</iso-a3>
        <iso-a2>CZ</iso-a2>
        <woe-id>23424810</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.49</hc-middle-x>
        <hc-middle-y>0.55</hc-middle-y>
        <hc-key>cz</hc-key>
        <hc-a2>CZ</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="SK" d="M368.6,117.0 L371.0,115.4 L372.2,114.8 L374.0,115.5 L377.9,115.1 L379.3,115.9 L378.9,116.8 L378.5,117.5 L375.4,117.2 L374.2,118.2 L370.3,119.1 L369.0,118.5 L368.4,117.6 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Slovakia</name>
        <labelrank>6</labelrank>
        <country-abbrev>Svk.</country-abbrev>
        <subregion>Eastern Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>SVK</iso-a3>
        <iso-a2>SK</iso-a2>
        <woe-id>23424877</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.21</hc-middle-x>
        <hc-middle-y>0.52</hc-middle-y>
        <hc-key>sk</hc-key>
        <hc-a2>SK</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="VU" d="M659.5,252.5 L658.7,251.4 L658.9,251.1 L658.9,251.1 L659.5,252.5 Z M659.5,252.5 L660.7,254.2 L660.9,255.7 L659.5,252.5 Z M658.9,251.1 L658.4,250.1 L655.5,247.3 L656.9,245.2 L658.4,246.5 L659.2,250.3 L658.9,251.1 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Vanuatu</name>
        <labelrank>4</labelrank>
        <country-abbrev>Van.</country-abbrev>
        <subregion>Melanesia</subregion>
        <region-wb>East Asia &amp; Pacific</region-wb>
        <iso-a3>VUT</iso-a3>
        <iso-a2>VU</iso-a2>
        <woe-id>23424907</woe-id>
        <continent>Oceania</continent>
        <hc-middle-x>0.47</hc-middle-x>
        <hc-middle-y>0.28</hc-middle-y>
        <hc-key>vu</hc-key>
        <hc-a2>VU</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="NZ" d="M661.2,313.7 L658.0,313.9 L657.5,312.7 L655.2,312.3 L655.8,310.7 L658.9,307.7 L661.4,306.5 L664.1,304.3 L664.8,302.5 L667.0,299.5 L667.9,301.3 L669.2,300.5 L670.2,302.3 L666.6,306.9 L664.5,308.2 L663.3,312.1 Z M672.2,302.0 L670.8,301.3 L672.0,299.0 L669.2,297.0 L670.7,295.8 L671.2,293.4 L670.3,290.9 L667.1,286.2 L669.4,287.3 L671.8,290.0 L673.2,291.1 L673.4,293.1 L676.2,293.8 L678.4,293.3 L677.0,296.3 L675.2,297.1 L675.0,298.8 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>New Zealand</name>
        <labelrank>2</labelrank>
        <country-abbrev>N.Z.</country-abbrev>
        <subregion>Australia and New Zealand</subregion>
        <region-wb>East Asia &amp; Pacific</region-wb>
        <iso-a3>NZL</iso-a3>
        <iso-a2>NZ</iso-a2>
        <woe-id>23424916</woe-id>
        <continent>Oceania</continent>
        <hc-middle-x>0.26</hc-middle-x>
        <hc-middle-y>0.85</hc-middle-y>
        <hc-key>nz</hc-key>
        <hc-a2>NZ</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="CU" d="M188.4,178.3 L185.4,177.9 L184.2,176.1 L181.9,175.1 L179.3,174.8 L179.2,173.9 L176.7,174.5 L177.9,176.0 L176.9,176.3 L176.2,174.9 L174.1,175.7 L175.0,173.9 L178.5,172.8 L183.1,173.3 L185.2,174.2 L185.9,174.1 L189.2,176.6 L192.8,178.0 L193.8,179.1 L187.1,179.5 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Cuba</name>
        <labelrank>3</labelrank>
        <country-abbrev>Cuba</country-abbrev>
        <subregion>Caribbean</subregion>
        <region-wb>Latin America &amp; Caribbean</region-wb>
        <iso-a3>CUB</iso-a3>
        <iso-a2>CU</iso-a2>
        <woe-id>23424793</woe-id>
        <continent>North America</continent>
        <hc-middle-x>0.67</hc-middle-x>
        <hc-middle-y>0.63</hc-middle-y>
        <hc-key>cu</hc-key>
        <hc-a2>CU</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="FI" d="M389.4,85.3 L385.7,86.3 L381.4,87.0 L376.8,85.4 L377.5,82.7 L376.5,79.0 L376.6,77.4 L378.6,76.7 L382.0,74.2 L384.4,71.5 L384.7,70.4 L382.4,69.3 L381.4,67.4 L382.1,66.2 L381.3,65.1 L381.1,62.7 L379.8,61.0 L378.4,60.7 L375.6,58.8 L377.6,58.1 L379.1,59.9 L382.0,59.6 L383.8,60.4 L385.3,59.3 L386.0,56.6 L389.6,55.3 L392.4,57.4 L391.6,58.9 L390.7,60.5 L391.0,61.6 L393.6,63.3 L391.9,66.1 L393.4,68.4 L392.8,71.9 L394.7,74.3 L393.6,75.8 L396.6,78.3 L396.0,79.5 L392.1,83.2 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Finland</name>
        <labelrank>3</labelrank>
        <country-abbrev>Fin.</country-abbrev>
        <subregion>Northern Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>FIN</iso-a3>
        <iso-a2>FI</iso-a2>
        <woe-id>23424812</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.60</hc-middle-x>
        <hc-middle-y>0.55</hc-middle-y>
        <hc-key>fi</hc-key>
        <hc-a2>FI</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="SE" d="M382.4,69.3 L379.0,69.2 L376.4,72.5 L377.3,73.6 L375.9,75.4 L373.1,76.6 L370.0,79.7 L369.5,79.4 L369.0,84.0 L372.7,87.1 L371.4,89.3 L368.3,90.8 L367.6,92.8 L368.1,95.5 L368.8,94.3 L370.8,94.5 L372.0,92.7 L372.4,94.1 L371.3,94.9 L368.8,94.6 L367.6,97.4 L364.3,97.6 L363.6,99.3 L361.6,99.7 L360.1,97.2 L359.8,95.5 L358.2,92.6 L357.4,89.8 L358.0,89.7 L358.5,88.1 L360.1,86.5 L359.6,84.0 L360.8,82.9 L359.4,81.8 L359.7,80.3 L359.1,77.2 L360.4,75.1 L362.8,75.0 L362.3,73.2 L363.9,70.9 L364.0,68.4 L367.6,65.4 L367.0,64.2 L369.3,61.9 L370.4,62.4 L370.9,60.5 L374.3,61.1 L375.6,58.8 L378.4,60.7 L379.8,61.0 L381.1,62.7 L381.3,65.1 L382.1,66.2 L381.4,67.4 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Sweden</name>
        <labelrank>3</labelrank>
        <country-abbrev>Swe.</country-abbrev>
        <subregion>Northern Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>SWE</iso-a3>
        <iso-a2>SE</iso-a2>
        <woe-id>23424954</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.69</hc-middle-x>
        <hc-middle-y>0.20</hc-middle-y>
        <hc-key>se</hc-key>
        <hc-a2>SE</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="AU" d="M616.2,251.7 L616.5,254.2 L619.2,256.1 L620.8,256.5 L622.9,260.9 L625.2,261.8 L625.1,262.7 L627.0,264.4 L628.7,266.9 L630.1,266.4 L629.5,268.0 L630.4,271.4 L630.5,274.4 L628.5,281.9 L627.1,282.8 L623.9,289.3 L623.6,292.8 L620.4,293.5 L616.9,295.6 L613.9,295.0 L614.0,293.7 L611.2,295.8 L609.0,294.7 L607.6,294.8 L605.1,293.6 L603.9,292.1 L604.2,290.9 L602.5,288.5 L600.3,289.1 L601.6,286.8 L600.8,285.5 L600.0,287.7 L599.6,285.5 L600.7,283.4 L596.7,286.3 L595.6,286.6 L595.2,284.9 L592.3,281.1 L589.6,281.0 L587.5,279.8 L583.3,280.3 L580.1,281.5 L578.0,281.4 L574.0,283.3 L572.9,285.0 L566.1,285.0 L563.0,287.1 L559.7,287.4 L556.7,286.0 L556.5,284.2 L557.8,283.7 L557.8,280.2 L556.5,277.2 L556.5,275.6 L553.3,269.3 L554.8,269.4 L555.1,268.1 L553.5,264.5 L553.9,261.5 L560.0,257.5 L561.0,257.8 L567.9,255.7 L570.6,252.7 L570.3,251.0 L571.8,249.7 L572.9,251.5 L573.3,249.0 L574.5,249.2 L574.6,247.2 L579.0,244.2 L581.8,246.0 L584.9,246.3 L584.0,245.4 L585.5,242.6 L587.3,241.4 L585.4,240.4 L586.0,239.3 L588.2,239.7 L590.2,238.9 L591.4,240.2 L595.0,241.3 L596.5,240.5 L598.5,241.4 L595.6,246.0 L597.8,248.0 L602.6,250.3 L604.4,251.9 L606.0,251.4 L607.2,248.6 L607.5,241.8 L608.8,237.4 L611.0,241.9 L612.0,245.6 L613.0,244.9 L614.7,246.5 L614.8,249.4 Z M613.6,299.9 L613.5,299.9 L613.8,299.2 L613.6,299.9 L613.6,299.9 Z M613.6,299.9 L616.7,301.0 L620.1,299.7 L620.4,303.2 L619.7,305.7 L618.9,305.2 L617.6,306.7 L616.0,306.5 L614.5,304.3 L613.3,300.6 L613.6,299.9 L613.6,299.9 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Australia</name>
        <labelrank>2</labelrank>
        <country-abbrev>Auz.</country-abbrev>
        <subregion>Australia and New Zealand</subregion>
        <region-wb>East Asia &amp; Pacific</region-wb>
        <iso-a3>AUS</iso-a3>
        <iso-a2>AU</iso-a2>
        <woe-id>-90</woe-id>
        <continent>Oceania</continent>
        <hc-middle-x>0.53</hc-middle-x>
        <hc-middle-y>0.41</hc-middle-y>
        <hc-key>au</hc-key>
        <hc-a2>AU</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="MG" d="M430.2,254.5 L427.3,264.1 L426.4,266.3 L422.6,267.6 L420.5,266.4 L420.0,263.3 L419.0,260.8 L419.5,259.0 L421.4,256.2 L420.3,251.4 L421.3,248.9 L424.7,248.0 L428.2,244.8 L428.5,243.4 L429.5,243.5 L430.5,240.6 L431.8,242.8 L432.9,247.4 L431.2,247.6 L431.7,249.6 L430.9,251.0 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Madagascar</name>
        <labelrank>3</labelrank>
        <country-abbrev>Mad.</country-abbrev>
        <subregion>Eastern Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>MDG</iso-a3>
        <iso-a2>MG</iso-a2>
        <woe-id>23424883</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.45</hc-middle-x>
        <hc-middle-y>0.48</hc-middle-y>
        <hc-key>mg</hc-key>
        <hc-a2>MG</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="VE" d="M199.4,195.1 L198.2,195.6 L198.9,197.3 L197.9,199.0 L199.0,200.5 L199.9,199.2 L198.9,197.1 L202.0,195.8 L204.1,195.9 L205.9,197.8 L209.1,197.5 L212.0,198.5 L213.7,196.4 L213.9,197.4 L215.8,197.8 L219.6,200.0 L219.3,200.8 L221.1,201.5 L220.1,202.9 L220.6,204.3 L218.9,205.0 L218.5,206.5 L219.7,207.9 L218.1,209.7 L214.5,210.2 L212.3,210.0 L213.4,213.1 L214.6,213.2 L213.3,214.7 L209.3,216.4 L207.9,215.5 L207.3,213.2 L206.1,212.3 L207.1,211.3 L206.0,209.2 L206.6,205.9 L203.0,206.1 L201.8,204.6 L198.0,204.3 L197.4,201.9 L196.2,200.1 L196.4,197.8 L198.2,195.5 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Venezuela</name>
        <labelrank>3</labelrank>
        <country-abbrev>Ven.</country-abbrev>
        <subregion>South America</subregion>
        <region-wb>Latin America &amp; Caribbean</region-wb>
        <iso-a3>VEN</iso-a3>
        <iso-a2>VE</iso-a2>
        <woe-id>23424982</woe-id>
        <continent>South America</continent>
        <hc-middle-x>0.41</hc-middle-x>
        <hc-middle-y>0.23</hc-middle-y>
        <hc-key>ve</hc-key>
        <hc-a2>VE</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="IS" d="M294.2,70.6 L291.7,70.1 L289.1,70.3 L290.6,69.5 L291.1,68.1 L293.0,68.8 L291.8,67.4 L292.8,67.3 L295.2,68.8 L295.6,71.1 L297.6,68.3 L298.4,69.5 L300.0,68.1 L302.4,68.9 L304.5,68.2 L305.4,67.0 L307.7,69.6 L310.0,70.3 L310.0,72.0 L308.2,73.8 L305.5,74.6 L300.2,76.8 L297.4,76.4 L295.5,75.1 L292.6,75.5 L294.5,74.3 L293.3,72.7 L290.0,72.2 L294.3,71.8 L292.9,71.4 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Iceland</name>
        <labelrank>3</labelrank>
        <country-abbrev>Iceland</country-abbrev>
        <subregion>Northern Europe</subregion>
        <region-wb>Europe &amp; Central Asia</region-wb>
        <iso-a3>ISL</iso-a3>
        <iso-a2>IS</iso-a2>
        <woe-id>23424845</woe-id>
        <continent>Europe</continent>
        <hc-middle-x>0.50</hc-middle-x>
        <hc-middle-y>0.51</hc-middle-y>
        <hc-key>is</hc-key>
        <hc-a2>IS</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="BW" d="M392.4,260.8 L390.1,261.8 L387.9,263.7 L387.6,264.9 L385.7,265.9 L385.2,267.7 L383.6,268.1 L380.2,267.1 L379.7,268.4 L377.7,270.2 L375.8,270.3 L376.1,268.7 L374.4,265.9 L374.4,260.4 L376.3,260.3 L376.3,253.1 L380.8,252.5 L381.3,253.4 L384.5,252.0 L386.2,255.4 L389.2,257.4 L389.8,259.5 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Botswana</name>
        <labelrank>4</labelrank>
        <country-abbrev>Bwa.</country-abbrev>
        <subregion>Southern Africa</subregion>
        <region-wb>Sub-Saharan Africa</region-wb>
        <iso-a3>BWA</iso-a3>
        <iso-a2>BW</iso-a2>
        <woe-id>23424755</woe-id>
        <continent>Africa</continent>
        <hc-middle-x>0.49</hc-middle-x>
        <hc-middle-y>0.60</hc-middle-y>
        <hc-key>bw</hc-key>
        <hc-a2>BW</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="BT" d="M506.5,164.5 L509.0,162.3 L511.7,163.5 L512.6,165.2 L508.3,165.7 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Bhutan</name>
        <labelrank>5</labelrank>
        <country-abbrev>Bhutan</country-abbrev>
        <subregion>Southern Asia</subregion>
        <region-wb>South Asia</region-wb>
        <iso-a3>BTN</iso-a3>
        <iso-a2>BT</iso-a2>
        <woe-id>23424770</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.48</hc-middle-x>
        <hc-middle-y>0.48</hc-middle-y>
        <hc-key>bt</hc-key>
        <hc-a2>BT</hc-a2>
      </desc>
      </path>

      <path fill={props.fill} stroke="#6E6E6E" stroke-width="0.4" id="NP" d="M505.0,163.3 L504.9,166.2 L500.6,166.0 L498.2,164.4 L494.7,164.1 L489.5,161.3 L491.3,158.5 L493.4,158.2 L496.2,160.6 L497.3,160.5 L500.9,163.3 Z">
      <desc xmlns="http://www.highcharts.com/svg/namespace">
        <name>Nepal</name>
        <labelrank>3</labelrank>
        <country-abbrev>Nepal</country-abbrev>
        <subregion>Southern Asia</subregion>
        <region-wb>South Asia</region-wb>
        <iso-a3>NPL</iso-a3>
        <iso-a2>NP</iso-a2>
        <woe-id>23424911</woe-id>
        <continent>Asia</continent>
        <hc-middle-x>0.53</hc-middle-x>
        <hc-middle-y>0.57</hc-middle-y>
        <hc-key>np</hc-key>
        <hc-a2>NP</hc-a2>
      </desc>
      </path>
      </g>

      <text x="350" y="714" text-anchor="middle" font-family="Verdana" font-size="8" stroke-opacity="0.6">Copyright (c) 2015 Highsoft AS, Based on data from Natural Earth</text>

  </svg>
);

export default SVG;

SVG.propTypes = {
  style: PropTypes.object,
  fill: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
};

SVG.defaultProps = {
  style: {},
  fill: '#FFB200',
  height: '100%',
  width: '100%',
  className: '',
};
