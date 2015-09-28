describe('nestedToc', function() {

  beforeEach(function() {
    loadFixtures('test.html');
  });

  /*
  <ol>
    <li>
      <a href="#a">a</a>
      <ol>
        <li>
          <a href="#b">b</a>
        </li>
      </ol>
    </li>
    <li>
      <a href="#c">c</a>
    </li>
  </ol>
  */
  it('produces the tree above with input1', function() {
    $('#output').nestedToc({container: '#input1'});

    expect($('#output > ol')).toExist();
    expect($('#output > ol > li').length).toEqual(2);
    expect($('#output > ol > li:first a')).toHaveAttr('href', '#a');
    expect($('#output > ol > li:first > ol > li > a')).toHaveAttr('href', '#b');
    expect($('#output > ol > li:nth-child(2) a')).toHaveAttr('href', '#c');
  });

  it('notifies error with input2', function() {
    $('#output').nestedToc({container: '#input2'});

    expect($('#output')).toContainText('ERROR');
  });

  it('produces the tree above with input3', function() {
    $('#output').nestedToc({container: '#input3'});

    expect($('#output > ol')).toExist();
    expect($('#output > ol > li').length).toEqual(2);
    expect($('#output > ol > li:first a')).toHaveAttr('href', '#a');
    expect($('#output > ol > li:first > ol > li > a')).toHaveAttr('href', '#b');
    expect($('#output > ol > li:first > ol > li:nth-child(2) a')).toHaveAttr('href', '#c');
    expect($('#output > ol > li:nth-child(2) a')).toHaveAttr('href', '#d');
    expect($('#output > ol > li:nth-child(2) > ol > li > a')).toHaveAttr('href', '#e');
    expect($('#output > ol > li:nth-child(2) > ol > li > ol > li > a')).toHaveAttr('href', '#f');
  });

});
