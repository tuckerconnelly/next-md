import React from 'react'
import {storiesOf} from '@storybook/react'
import {withInfo} from '@storybook/addon-info'

import {DataTable} from '../../index'

storiesOf('DataTable', module)
  .add('vanilla', withInfo()(() => (
    <DataTable>
      <DataTable.HRow>
        <DataTable.HCell>Dessert (180g serving)</DataTable.HCell>
        <DataTable.HCell>Calories</DataTable.HCell>
        <DataTable.HCell>Fat (g)</DataTable.HCell>
        <DataTable.HCell>Carbs(g)</DataTable.HCell>
        <DataTable.HCell>Protein(g)</DataTable.HCell>
      </DataTable.HRow>
      <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell>159</DataTable.Cell>
        <DataTable.Cell>6.0</DataTable.Cell>
        <DataTable.Cell>24</DataTable.Cell>
        <DataTable.Cell>4.0</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
        <DataTable.Cell>227</DataTable.Cell>
        <DataTable.Cell>9.0</DataTable.Cell>
        <DataTable.Cell>37</DataTable.Cell>
        <DataTable.Cell>4.3</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Eclair</DataTable.Cell>
        <DataTable.Cell>262</DataTable.Cell>
        <DataTable.Cell>16.0</DataTable.Cell>
        <DataTable.Cell>49</DataTable.Cell>
        <DataTable.Cell>3.9</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Cupcake</DataTable.Cell>
        <DataTable.Cell>305</DataTable.Cell>
        <DataTable.Cell>3.7</DataTable.Cell>
        <DataTable.Cell>67</DataTable.Cell>
        <DataTable.Cell>4.3</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  )))
