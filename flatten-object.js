const input = {
    user: {
      firstName: 'Premsagar',
      lastName: 'Choudhary',
      age: 26,
      address: {
        city: 'Ranchi',
        state: 'Jharkhand',
        zip: 825323,
        userDetails: {
          username: 'Admin@123',
          password: 'Prem@123',
        },
      },
    },
  };

  const flattenObj = (obj, output, parentKey) => {
    Object.entries(obj).forEach(([k, v]) => {
      const pKey = parentKey ? `${parentKey}.${k}` : k;
      if (typeof v !== 'object') {
        output[pKey] = v;
      } else {
        flattenObj(v, output, pKey);
      }
    });
    return output;
  };

  const invokeMethod = () => {
    console.log(flattenObj(input, {}));
  };
