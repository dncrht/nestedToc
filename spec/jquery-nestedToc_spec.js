describe('nestedToc', function() {

  beforeEach(function() {
    loadFixtures('test.html');
  });

  /*
  <ol>
    <li>
      <a href="#Title">Title</a>
      <ol>
        <li>
          <a href="#Deeper-title">Deeper-title</a>
        </li>
      </ol>
    </li>
    <li>
      <a href="#Second-title">Second-title</a>
    </li>
  </ol>
  */
  it('produces the tree above with input1', function() {
    $('#output').nestedToc({container: '#input1'});

    expect($('#output > ol')).toExist();
    expect($('#output > ol > li').length).toEqual(2);
    expect($('#output > ol > li:first a')).toHaveAttr('href', '#Title');
    expect($('#output > ol > li:first > ol > li > a')).toHaveAttr('href', '#Deeper-title');
    expect($('#output > ol > li:nth-child(2) a')).toHaveAttr('href', '#Second-title');
  });

  it('notifies error with input2', function() {
    $('#output').nestedToc({container: '#input2'});

    expect($('#output')).toContainText('Error: non-linear levels');
  });

});
