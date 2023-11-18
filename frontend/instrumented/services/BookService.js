function cov_1svxm29qzj() {
  var path = "C:\\Users\\mathe\\OneDrive\\Documentos\\livraria\\frontend\\src\\services\\BookService.js";
  var hash = "23a8b67f811a502ef4b6b74fd18136b4af639f15";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\mathe\\OneDrive\\Documentos\\livraria\\frontend\\src\\services\\BookService.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 18
        },
        end: {
          line: 8,
          column: 2
        }
      },
      "1": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 35
        }
      },
      "2": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 48
        }
      },
      "3": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 52
        }
      },
      "4": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 55
        }
      },
      "5": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 57
        }
      },
      "6": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 27,
          column: 52
        }
      },
      "7": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 36
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 11,
            column: 2
          },
          end: {
            line: 11,
            column: 3
          }
        },
        loc: {
          start: {
            line: 11,
            column: 13
          },
          end: {
            line: 13,
            column: 3
          }
        },
        line: 11
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 14,
            column: 2
          },
          end: {
            line: 14,
            column: 3
          }
        },
        loc: {
          start: {
            line: 14,
            column: 14
          },
          end: {
            line: 16,
            column: 3
          }
        },
        line: 14
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 17,
            column: 3
          }
        },
        loc: {
          start: {
            line: 17,
            column: 17
          },
          end: {
            line: 19,
            column: 3
          }
        },
        line: 17
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 20,
            column: 3
          }
        },
        loc: {
          start: {
            line: 20,
            column: 21
          },
          end: {
            line: 22,
            column: 3
          }
        },
        line: 20
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        },
        loc: {
          start: {
            line: 23,
            column: 20
          },
          end: {
            line: 25,
            column: 3
          }
        },
        line: 23
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 26,
            column: 3
          }
        },
        loc: {
          start: {
            line: 26,
            column: 17
          },
          end: {
            line: 28,
            column: 3
          }
        },
        line: 26
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 29,
            column: 3
          }
        },
        loc: {
          start: {
            line: 29,
            column: 15
          },
          end: {
            line: 31,
            column: 3
          }
        },
        line: 29
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "23a8b67f811a502ef4b6b74fd18136b4af639f15"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1svxm29qzj = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1svxm29qzj();
import axios from 'axios';
const apiClient = (cov_1svxm29qzj().s[0]++, axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    'Content-type': 'application/json'
  }
}));
export default {
  getBooks() {
    cov_1svxm29qzj().f[0]++;
    cov_1svxm29qzj().s[1]++;
    return apiClient.get('/livros');
  },
  getBook(id) {
    cov_1svxm29qzj().f[1]++;
    cov_1svxm29qzj().s[2]++;
    return apiClient.get(`/livros/buscar/${id}`);
  },
  postBook(book) {
    cov_1svxm29qzj().f[2]++;
    cov_1svxm29qzj().s[3]++;
    return apiClient.post('/livros/cadastrar', book);
  },
  postAuthor(author) {
    cov_1svxm29qzj().f[3]++;
    cov_1svxm29qzj().s[4]++;
    return apiClient.post('/autores/cadastrar', author);
  },
  putBook(id, book) {
    cov_1svxm29qzj().f[4]++;
    cov_1svxm29qzj().s[5]++;
    return apiClient.put(`/livros/atualizar/${id}`, book);
  },
  deleteBook(id) {
    cov_1svxm29qzj().f[5]++;
    cov_1svxm29qzj().s[6]++;
    return apiClient.delete(`/livros/remover/${id}`);
  },
  getAuthors() {
    cov_1svxm29qzj().f[6]++;
    cov_1svxm29qzj().s[7]++;
    return apiClient.get('/autores');
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMXN2eG0yOXF6aiIsImFjdHVhbENvdmVyYWdlIiwiYXhpb3MiLCJhcGlDbGllbnQiLCJzIiwiY3JlYXRlIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJlbnYiLCJWVUVfQVBQX0JBU0VfVVJMIiwiaGVhZGVycyIsImdldEJvb2tzIiwiZiIsImdldCIsImdldEJvb2siLCJpZCIsInBvc3RCb29rIiwiYm9vayIsInBvc3QiLCJwb3N0QXV0aG9yIiwiYXV0aG9yIiwicHV0Qm9vayIsInB1dCIsImRlbGV0ZUJvb2siLCJkZWxldGUiLCJnZXRBdXRob3JzIl0sInNvdXJjZXMiOlsiQm9va1NlcnZpY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuY29uc3QgYXBpQ2xpZW50ID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBwcm9jZXNzLmVudi5WVUVfQVBQX0JBU0VfVVJMLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgfSxcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBnZXRCb29rcygpIHtcclxuICAgIHJldHVybiBhcGlDbGllbnQuZ2V0KCcvbGl2cm9zJylcclxuICB9LFxyXG4gIGdldEJvb2soaWQpIHtcclxuICAgIHJldHVybiBhcGlDbGllbnQuZ2V0KGAvbGl2cm9zL2J1c2Nhci8ke2lkfWApXHJcbiAgfSxcclxuICBwb3N0Qm9vayhib29rKSB7XHJcbiAgICByZXR1cm4gYXBpQ2xpZW50LnBvc3QoJy9saXZyb3MvY2FkYXN0cmFyJywgYm9vaylcclxuICB9LFxyXG4gIHBvc3RBdXRob3IoYXV0aG9yKSB7XHJcbiAgICByZXR1cm4gYXBpQ2xpZW50LnBvc3QoJy9hdXRvcmVzL2NhZGFzdHJhcicsIGF1dGhvcilcclxuICB9LFxyXG4gIHB1dEJvb2soaWQsIGJvb2spIHtcclxuICAgIHJldHVybiBhcGlDbGllbnQucHV0KGAvbGl2cm9zL2F0dWFsaXphci8ke2lkfWAsIGJvb2spXHJcbiAgfSxcclxuICBkZWxldGVCb29rKGlkKSB7XHJcbiAgICByZXR1cm4gYXBpQ2xpZW50LmRlbGV0ZShgL2xpdnJvcy9yZW1vdmVyLyR7aWR9YClcclxuICB9LFxyXG4gIGdldEF1dGhvcnMoKSB7XHJcbiAgICByZXR1cm4gYXBpQ2xpZW50LmdldCgnL2F1dG9yZXMnKVxyXG4gIH0sXHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQUEsY0FBQSxZQUFBQSxDQUFBO01BQUEsT0FBQUMsY0FBQTtJQUFBO0VBQUE7RUFBQSxPQUFBQSxjQUFBO0FBQUE7QUFBQUQsY0FBQTtBQWZaLE9BQU9FLEtBQUssTUFBTSxPQUFPO0FBRXpCLE1BQU1DLFNBQVMsSUFBQUgsY0FBQSxHQUFBSSxDQUFBLE9BQUdGLEtBQUssQ0FBQ0csTUFBTSxDQUFDO0VBQzdCQyxPQUFPLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxnQkFBZ0I7RUFDckNDLE9BQU8sRUFBRTtJQUNQLGNBQWMsRUFBRTtFQUNsQjtBQUNGLENBQUMsQ0FBQztBQUVGLGVBQWU7RUFDYkMsUUFBUUEsQ0FBQSxFQUFHO0lBQUFYLGNBQUEsR0FBQVksQ0FBQTtJQUFBWixjQUFBLEdBQUFJLENBQUE7SUFDVCxPQUFPRCxTQUFTLENBQUNVLEdBQUcsQ0FBQyxTQUFTLENBQUM7RUFDakMsQ0FBQztFQUNEQyxPQUFPQSxDQUFDQyxFQUFFLEVBQUU7SUFBQWYsY0FBQSxHQUFBWSxDQUFBO0lBQUFaLGNBQUEsR0FBQUksQ0FBQTtJQUNWLE9BQU9ELFNBQVMsQ0FBQ1UsR0FBRyxDQUFFLGtCQUFpQkUsRUFBRyxFQUFDLENBQUM7RUFDOUMsQ0FBQztFQUNEQyxRQUFRQSxDQUFDQyxJQUFJLEVBQUU7SUFBQWpCLGNBQUEsR0FBQVksQ0FBQTtJQUFBWixjQUFBLEdBQUFJLENBQUE7SUFDYixPQUFPRCxTQUFTLENBQUNlLElBQUksQ0FBQyxtQkFBbUIsRUFBRUQsSUFBSSxDQUFDO0VBQ2xELENBQUM7RUFDREUsVUFBVUEsQ0FBQ0MsTUFBTSxFQUFFO0lBQUFwQixjQUFBLEdBQUFZLENBQUE7SUFBQVosY0FBQSxHQUFBSSxDQUFBO0lBQ2pCLE9BQU9ELFNBQVMsQ0FBQ2UsSUFBSSxDQUFDLG9CQUFvQixFQUFFRSxNQUFNLENBQUM7RUFDckQsQ0FBQztFQUNEQyxPQUFPQSxDQUFDTixFQUFFLEVBQUVFLElBQUksRUFBRTtJQUFBakIsY0FBQSxHQUFBWSxDQUFBO0lBQUFaLGNBQUEsR0FBQUksQ0FBQTtJQUNoQixPQUFPRCxTQUFTLENBQUNtQixHQUFHLENBQUUscUJBQW9CUCxFQUFHLEVBQUMsRUFBRUUsSUFBSSxDQUFDO0VBQ3ZELENBQUM7RUFDRE0sVUFBVUEsQ0FBQ1IsRUFBRSxFQUFFO0lBQUFmLGNBQUEsR0FBQVksQ0FBQTtJQUFBWixjQUFBLEdBQUFJLENBQUE7SUFDYixPQUFPRCxTQUFTLENBQUNxQixNQUFNLENBQUUsbUJBQWtCVCxFQUFHLEVBQUMsQ0FBQztFQUNsRCxDQUFDO0VBQ0RVLFVBQVVBLENBQUEsRUFBRztJQUFBekIsY0FBQSxHQUFBWSxDQUFBO0lBQUFaLGNBQUEsR0FBQUksQ0FBQTtJQUNYLE9BQU9ELFNBQVMsQ0FBQ1UsR0FBRyxDQUFDLFVBQVUsQ0FBQztFQUNsQztBQUNGLENBQUMifQ==