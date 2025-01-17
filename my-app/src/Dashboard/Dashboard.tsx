// src/components/MyComponent.tsx
import React from 'react';

const Dashboard: React.FC<Dashboards> = ({ title, subtitle }) => {
  return (
    <><div>
          <div class="container text-center">
              <div class="row">
                  <div class="col">
                      Column
                  </div>
                  <div class="col">
                      Column
                  </div>
                  <div class="col">
                      Column
                  </div>
              </div>
          </div>
      </div><div class="col">
              Column
          </div><div class="col">
              Column
          </div><div class="col">
              Column
          </div></>

    
  );
};

export default Dashboard;
