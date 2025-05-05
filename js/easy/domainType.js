function domainType(domains) {
    let types = [];
    let i = 0;
  
    while (i < domains.length) {
      let domain = domains[i];
      let parts = domain.split(".");
      let extension = parts[parts.length - 1];
  
      if (extension === "org") {
        types[types.length] = "organization";
      } else if (extension === "com") {
        types[types.length] = "commercial";
      } else if (extension === "net") {
        types[types.length] = "network";
      } else if (extension === "info") {
        types[types.length] = "information";
      }
  
      i++;
    }
  
    return types;
  }
  
  
  
  
  /**
  * Test Suite 
  */
  describe('domainType()', () => {
      it('returns list of domain types', () => {
          // arrange
          const domains = ["en.wiki.org", "codefights.com", "happy.net", "code.info"];
          
          // act
          const result = domainType(domains);
  
          // log
          console.log("result: ", result);
          
          // assert
          expect(result).toEqual(["organization", "commercial", "network", "information"]);
      });
  });