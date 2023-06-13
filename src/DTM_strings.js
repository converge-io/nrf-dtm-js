/**
 * copyright (c) 2015 - 2018, Nordic Semiconductor ASA
 *
 * all rights reserved.
 *
 * redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * 1. redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *
 * 2. redistributions in binary form, except as embedded into a nordic
 *    semiconductor asa integrated circuit in a product or a software update for
 *    such product, must reproduce the above copyright notice, this list of
 *    conditions and the following disclaimer in the documentation and/or other
 *    materials provided with the distribution.
 *
 * 3. neither the name of Nordic Semiconductor ASA nor the names of its
 *    contributors may be used to endorse or promote products derived from this
 *    software without specific prior written permission.
 *
 * 4. this software, with or without modification, must only be used with a
 *    Nordic Semiconductor ASA integrated circuit.
 *
 * 5. any software provided in binary form under this license must not be reverse
 *    engineered, decompiled, modified and/or disassembled.
 *
 * this software is provided by Nordic Semiconductor ASA "as is" and any express
 * or implied warranties, including, but not limited to, the implied warranties
 * of merchantability, noninfringement, and fitness for a particular purpose are
 * disclaimed. in no event shall Nordic Semiconductor ASA or contributors be
 * liable for any direct, indirect, incidental, special, exemplary, or
 * consequential damages (including, but not limited to, procurement of substitute
 * goods or services; loss of use, data, or profits; or business interruption)
 * however caused and on any theory of liability, whether in contract, strict
 * liability, or tort (including negligence or otherwise) arising in any way out
 * of the use of this software, even if advised of the possibility of such damage.
 *
 */

const DTM_FEM_ANT_STRING = {
    0x00: 'Antenna 1 (integrated)',
    0x01: 'Antenna 2 (external)',
};

const DTM_FEM_GAIN_STRING = {
    0x00: 'FEM Bypass',
    0x01: 'FEM Low Gain',
    0x02: 'FEM High Gain',
};

const DTM_PHY_STRING = {
    0x01: 'LE 1Mbps',
    0x02: 'LE 2Mbps',
    0x03: 'LE Coded S8',
    0x04: 'LE Coded S2',
};

const DTM_PKT_STRING = {
    0x00: 'PRBS9',
    0x01: '11110000',
    0x02: '10101010',
    0x03: 'Constant carrier',
};

const DTM_MODULATION_STRING = {
    0x00: 'Standard',
    0x01: 'Stable',
};

export {
    DTM_FEM_ANT_STRING,
    DTM_FEM_GAIN_STRING,
    DTM_PHY_STRING,
    DTM_PKT_STRING,
    DTM_MODULATION_STRING,
};
