import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
import SectionTitle from 'components/SectionTitle';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <SectionTitle>Flexible pricing</SectionTitle>
      <AutofitGrid>
        <PricingCard
          title="Leads only"
          description="Targeted prospect list with verified emails"
          benefits={['Warmed up domain', '1 active project', '1000 emails per month', 'Metrics']}
        >
          $400<span>/month</span>
        </PricingCard>
        <PricingCard
          title="Starter"
          description="Best for businesses of 1-10 employees"
          benefits={['1 seat', '3 active project', 'Ulimited viewers', '100 blocks', 'CSV Downloader', 'Password protection']}
          isOutlined
        >
          $29<span>/month</span>
        </PricingCard>
        <PricingCard
          title="Premium"
          description="Get your team together"
          benefits={[
            '10 seat',
            '10 active project',
            'Ulimited viewers',
            'Unlimited blocks',
            'CSV Downloader',
            'Password protection',
            'Customization',
          ]}
        >
          $79<span>/month</span>
        </PricingCard>
      </AutofitGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;
