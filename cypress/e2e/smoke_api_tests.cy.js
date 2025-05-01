describe("Smoke Test - Main API methods", () => {
  it("should return 200 OK for /categories endpoint", () => {
    cy.request({
      method: "GET",
      url: "https://www.navigator.ba/categories",
      failOnStatusCode: true,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.exist;
    });
  });

  it("should return 200 OK for /lists endpoint", () => {
    cy.request({
      method: "GET",
      url: "https://www.navigator.ba/lists",
      failOnStatusCode: true,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.exist;
    });
  });

  it("should return 200 OK for /categories/suggested endpoint", () => {
    cy.request({
      method: "GET",
      url: "https://www.navigator.ba/categories/suggested",
      failOnStatusCode: true,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.exist;
    });
  });

  it("should return 200 OK for /places endpoint", () => {
    cy.request({
      method: "GET",
      url: "https://www.navigator.ba/places",
      failOnStatusCode: true,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.exist;
    });
  });
});

describe("Smoke Test - Sarajevska Pozorista API methods", () => {
  it("should return 200 OK for /lists/sarajevska-pozorista endpoint", () => {
    cy.request({
      method: "GET",
      url: "https://www.navigator.ba/lists/sarajevska-pozorista",
      failOnStatusCode: true,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.exist;
    });
  });

  it("should return 200 OK for /lists/sarajevska-pozorista/items endpoint", () => {
    cy.request({
      method: "GET",
      url: "https://www.navigator.ba/lists/sarajevska-pozorista/items",
      failOnStatusCode: true,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.exist;
    });
  });

  it("should return 200 OK for /lists/sarajevska-pozorista/places endpoint", () => {
    cy.request({
      method: "GET",
      url: "https://www.navigator.ba/lists/sarajevska-pozorista/places",
      failOnStatusCode: true,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.exist;
    });
  });
});

describe("Smoke Test - Nextbike API methods", () => {
  it("should return 200 OK for /lists/nextbike endpoint", () => {
    cy.request({
      method: "GET",
      url: "https://www.navigator.ba/lists/nextbike",
      failOnStatusCode: true,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.exist;
    });
  });

  it("should return 200 OK for /lists/nextbike/items endpoint", () => {
    cy.request({
      method: "GET",
      url: "https://www.navigator.ba/lists/nextbike/items",
      failOnStatusCode: true,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.exist;
    });
  });

  it("should return 200 OK for /lists/nextbike/places endpoint", () => {
    cy.request({
      method: "GET",
      url: "https://www.navigator.ba/lists/nextbike/places",
      failOnStatusCode: true,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.exist;
    });
  });
});

describe("Smoke Test - Smoke Free Public Places API methods", () => {
  it("should return 200 OK for /lists/smoke-free-public-places endpoint", () => {
    cy.request({
      method: "GET",
      url: "https://www.navigator.ba/lists/smoke-free-public-places",
      failOnStatusCode: true,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.exist;
    });
  });

  it("should return 200 OK for /lists/smoke-free-public-places/items endpoint", () => {
    cy.request({
      method: "GET",
      url: "https://www.navigator.ba/lists/smoke-free-public-places/items",
      failOnStatusCode: true,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.exist;
    });
  });

  it("should return 200 OK for /lists/smoke-free-public-places/places endpoint", () => {
    cy.request({
      method: "GET",
      url: "https://www.navigator.ba/lists/smoke-free-public-places/places",
      failOnStatusCode: true,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.exist;
    });
  });
});

describe("Smoke Test - Search API methods", () => {
  it("should return a successful response with valid places array", () => {
    cy.request({
      method: "GET",
      url: "https://www.navigator.ba/places/autocomplete_search?query=fer",
      failOnStatusCode: true,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("places");
      expect(response.body.places).to.be.an("array");
      expect(response.body.places.length).to.be.lessThan(6); //from analyize, I realize that autocomplete can return maximum 5 records
    });
  });
});

describe("Smoke Test - Create Place API methods", () => {
    it("should return a successful response", () => {
      cy.request({
        method: "POST",
        url: "https://www.navigator.ba/places/",
        form: true,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "poi%5Bname%5D=Maid+Vele&poi%5Bcity_name%5D=Gornji+Vakuf&poi%5Bzip_code%5D=70240&poi%5Bstreet_name%5D=Batuski+gaj+II&poi%5Bhouse_number%5D=bb&poi%5Bstreet_name_alt%5D=Batusa+bb&poi%5Bdescription%5D=Test&poi%5Bcategories%5D%5B%5D=105&poi%5Bmain_category%5D=105&poi%5Bplace_tags%5D=&poi%5Bphone%5D=%2B38733266471&poi%5Bmobile_phone%5D=%2B38761753176&poi%5Bfax%5D=&poi%5Bweb%5D=docstribute.com&poi%5Bemail%5D=velemaid98%40gmail.com&poi%5Bfacebook_url%5D=test.com&poi%5Btwitter_url%5D=test.com&poi%5Binstagram_url%5D=test.com&poi%5Bfoursqare_url%5D=test.com&poi%5Bwikipedia_url%5D=test.com&poi%5Btripadvisor_url%5D=test.com&poi%5Byoutube_url%5D=twst.com&poi%5Binstagram_hashtag%5D=test&poi%5Bcredit_cards%5D%5Bother%5D=&poi%5Blatitude%5D=43.85642461658946&poi%5Blongitude%5D=18.41853618621826&comment=test&poi%5Bworking_hours%5D%5Bmon%5D%5Bfirst_part%5D=&poi%5Bworking_hours%5D%5Bmon%5D%5Bsecond_part%5D=&poi%5Bworking_hours%5D%5Btue%5D%5Bfirst_part%5D=&poi%5Bworking_hours%5D%5Btue%5D%5Bsecond_part%5D=&poi%5Bworking_hours%5D%5Bwed%5D%5Bfirst_part%5D=&poi%5Bworking_hours%5D%5Bwed%5D%5Bsecond_part%5D=&poi%5Bworking_hours%5D%5Bthu%5D%5Bfirst_part%5D=&poi%5Bworking_hours%5D%5Bthu%5D%5Bsecond_part%5D=&poi%5Bworking_hours%5D%5Bfri%5D%5Bfirst_part%5D=&poi%5Bworking_hours%5D%5Bfri%5D%5Bsecond_part%5D=&poi%5Bworking_hours%5D%5Bsat%5D%5Bfirst_part%5D=&poi%5Bworking_hours%5D%5Bsat%5D%5Bsecond_part%5D=&poi%5Bworking_hours%5D%5Bsun%5D%5Bfirst_part%5D=&poi%5Bworking_hours%5D%5Bsun%5D%5Bsecond_part%5D="
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });

  describe("Smoke Test - Feedback API method", () => {
    it("should return a successful response", () => {
      cy.request({
        method: "POST",
        url: "https://www.navigator.ba/feedback/",
        form: true,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: `name_surname=Maid+Vele&email=velemaid98%40gmail.com&comment=test&type=I+like+it`
        }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });
