// Data-Driven Documents -> d3
// for d3 helper methods

const SAMPLE_DATA = [
    { id: 'd1', value: 10, region: 'USA' },
    { id: 'd2', value: 11, region: 'INDIA' },
    { id: 'd3', value: 9, region: 'GERMANY' },
    { id: 'd4', value: 7, region: 'POLAND' },
    { id: 'd5', value: 4, region: 'BAVERIA' },
];

// for adding d3-scale library  
const xScale = d3.scaleBand().domain(SAMPLE_DATA.map((dataPoint) => dataPoint.region)).rangeRound([0, 250]).padding(0,1);
const yScale = d3.scaleLinear().domain([0, 15]).range([200, 0]);


const container = d3.select('svg')
    .classed('container', true)

const bars = container
    .selectAll('.bar')
    .data(SAMPLE_DATA)
    .enter()
    .append('rect')
    .classed('bar', true)
    .attr('width', xScale.bandwidth())
    .attr('height', (data) => 200 - yScale(data.value))
    .attr('x', data => xScale(data.region))
    .attr('y', data => yScale(data.value));
    // use attr instead of .style - static content
