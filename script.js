// 彈出視窗功能
const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const closeModal = document.querySelectorAll('.close');

// 24小時道路救援
document.getElementById('road-rescue').addEventListener('click', (e) => {
    e.preventDefault();
    modalText.innerHTML = `
        <h2>24小時道路救援</h2>
        <p>北北基: 3500</p>
        <p>外縣市另計</p>
        <p>Tel: 0979 033 333</p>
    `;
    modal.style.display = 'block';
});

// 聯繫我們
document.getElementById('contact-us').addEventListener('click', (e) => {
    e.preventDefault();
    modalText.innerHTML = `
        <h2>聯繫我們</h2>
        <p>IG: Tyson.shizong</p>
        <p>Line: abo75261574</p>
        <p>IG: ryan_11.17</p>
        <p>Tel: 0979 033 333</p>
    `;
    modal.style.display = 'block';
});

// 關閉彈出視窗
closeModal.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.getElementById('announcement-modal').style.display = 'none';
    });
});

// 網頁進入時彈出公告
window.onload = () => {
    document.getElementById('announcement-modal').style.display = 'block';
};

// 車輛保養功能
const maintenanceGallery = document.getElementById('maintenance-gallery');
const maintenanceInfo = document.getElementById('maintenance-info');
const maintenanceButtons = document.querySelectorAll('.maintenance-btn');

const maintenanceData = {
    'oil-change': {
        images: ['stage/1.png', 'ptt/1.jpg'],
        info: ''
    },
    'brake-fluid': {
        images: ['dot-4/1.jpeg'],
        info: ''
    },
    'suspension': {
        images: ['ohlins/1.png'],
        info: ''
    },
    'chain': {
        images: ['rk/1.jpg'],
        info: ''
    },
    'tire': {
        images: ['pirelli/1.jpg'],
        info: ''
    },
    'inspection': {
        images: [],
        info: '外觀基本檢查: 500$<br>內外觀深層檢查: 1000$'
    }
};

maintenanceButtons.forEach(button => {
    button.addEventListener('click', () => {
        const maintenanceType = button.getAttribute('data-maintenance');
        const data = maintenanceData[maintenanceType];

        maintenanceGallery.innerHTML = data.images.map(img => `
            <img src="${img}" alt="${maintenanceType}">
        `).join('');

        maintenanceInfo.innerHTML = data.info;
    });
});

// 驃宇車庫功能
const modelMenu = document.getElementById('model-menu');
const bikeGallery = document.getElementById('bike-gallery');
const infoTable = document.getElementById('info-table');
const brandButtons = document.querySelectorAll('.brand-btn');

const bikeData = {
    kawasaki: {
        z900: {
            images: ['kawasaki/z900/1.jpg', 'kawasaki/z900/2.jpg', 'kawasaki/z900/3.jpg', 'kawasaki/z900/4.jpg', 'kawasaki/z900/5.jpg'],
            info: {
                年份: '2018',
                改裝: '原廠後置物架 手機架 防倒球',
                里程: '2XXXX',
                售價: '198000',
                備註: '無',
                地點: '車庫'
            }
        },
        ninja650: {
            images: ['kawasaki/ninja 650/1.jpg', 'kawasaki/ninja 650/2.jpg', 'kawasaki/ninja 650/3.jpg', 'kawasaki/ninja 650/4.jpg', 'kawasaki/ninja 650/5.jpg'],
            info: {
                年份: '2019',
                改裝: '單座蓋',
                里程: '16XXX',
                售價: '178000',
                備註: '無重大事故',
                地點: '車庫'
            }
        },
        ninja400: {
            images: ['kawasaki/ninja 400/1.jpg', 'kawasaki/ninja 400/2.jpg', 'kawasaki/ninja 400/3.jpg', 'kawasaki/ninja 400/4.jpg', 'kawasaki/ninja 400/5.jpg'],
            info: {
                年份: '2021出廠 2022掛牌',
                改裝: '定風翼 原廠',
                里程: '20XXX',
                售價: '178000',
                備註: 'ABS',
                地點: '車庫'
            }
        },
        ninja400_1: {
            images: ['kawasaki/ninja 400(1)/1.jpg', 'kawasaki/ninja 400(1)/2.jpg', 'kawasaki/ninja 400(1)/3.jpg', 'kawasaki/ninja 400(1)/4.jpg', 'kawasaki/ninja 400(1)/5.jpg'],
            info: {
                年份: '2021',
                改裝: '拉桿 原廠排氣管閥門 短牌架 黑準手機架（含充電）',
                里程: '18XXX',
                售價: '178000',
                備註: 'ABS',
                地點: '車庫'
            }
        }
    },
    ducati: {
        899: {
            images: ['ducati/899/1.jpg', 'ducati/899/2.jpg', 'ducati/899/3.jpg', 'ducati/899/4.jpg', 'ducati/899/5.jpg', 'ducati/899/6.jpg'],
            info: {
                年份: '2015',
                改裝: '建議來店看車',
                里程: '3XXXX',
                售價: '698000',
                備註: '全車耗材換新 輪胎全新 原廠殼都在',
                地點: '車庫'
            }
        }
    },
    honda: {
        cbr650r: {
            images: ['honda/cbr650r/1.jpg', 'honda/cbr650r/2.jpg', 'honda/cbr650r/3.jpg', 'honda/cbr650r/4.jpg', 'honda/cbr650r/5.jpg', 'honda/cbr650r/6.jpg'],
            info: {
                年份: '2021',
                改裝: 'HRC全車包膜 原廠排氣管閥門 腳踏後移短牌架 刷全馬力 單座蓋 拉桿 護弓 手機架 握把',
                里程: '63XX',
                售價: '288000',
                備註: '原廠資料齊全 原廠部品都在 車況極美',
                地點: '車庫'
            }
        },
        cbr650r_1: {
            images: ['honda/cbr650r(1)/1.jpg', 'honda/cbr650r(1)/2.jpg', 'honda/cbr650r(1)/3.jpg', 'honda/cbr650r(1)/4.jpg', 'honda/cbr650r(1)/5.jpg', 'honda/cbr650r(1)/6.jpg'],
            info: {
                年份: '2021',
                改裝: '黑準手機架 拉桿 刷全馬 風鏡',
                里程: '11XXX',
                售價: '278000',
                備註: '無重大事故 無火燒 無泡水 漂亮車',
                地點: '車庫'
            }
        },
        cb300r: {
            images: ['honda/cb300r/1.jpg', 'honda/cb300r/2.jpg', 'honda/cb300r/3.jpg', 'honda/cb300r/4.jpg', 'honda/cb300r/5.jpg'],
            info: {
                年份: '2022',
                改裝: 'SKUNY車手把',
                里程: '8XXX',
                售價: '148000',
                備註: '',
                地點: '車庫'
            }
        },
        cb300r_1: {
            images: ['honda/cb300r(1)/1.jpg', 'honda/cb300r(1)/2.jpg', 'honda/cb300r(1)/3.jpg', 'honda/cb300r(1)/4.jpg', 'honda/cb300r(1)/5.jpg'],
            info: {
                年份: '2022',
                改裝: '正蠍排氣管 短牌架 端子鏡 黃金鍊條',
                里程: '11XXX',
                售價: '148000',
                備註: '',
                地點: '車庫'
            }
        },
        msx125: {
            images: ['honda/msx125/1.jpg', 'honda/msx125/2.jpg', 'honda/msx125/3.jpg', 'honda/msx125/4.jpg'],
            info: {
                年份: '2019',
                改裝: '原廠',
                里程: '97XX',
                售價: '78000',
                備註: '無重大事故',
                地點: '車庫'
            }
        },
        msx125_1: {
            images: ['honda/msx125(1)/1.jpg', 'honda/msx125(1)/2.jpg', 'honda/msx125(1)/3.jpg', 'honda/msx125(1)/4.jpg', 'honda/msx125(1)/5.jpg', 'honda/msx125(1)/6.jpg'],
            info: {
                年份: '2019',
                改裝: '原廠',
                里程: '26XXX',
                售價: '78000',
                備註: '無重大事故',
                地點: '車庫'
            }
        }
    },
    suzuki: {
        gixxer250: {
            images: ['suzuki/gixxer-250/1.jpg', 'suzuki/gixxer-250/2.jpg', 'suzuki/gixxer-250/3.jpg', 'suzuki/gixxer-250/4.jpg', 'suzuki/gixxer-250/5.jpg'],
            info: {
                年份: '2022',
                改裝: '定風翼後照鏡 風鏡 握把 短牌架 車牌匡 拉桿 排氣管（檢驗合格） 行車記錄器 手機架',
                里程: '7XXX',
                售價: '118000',
                備註: '',
                地點: '車庫'
            }
        },
        gsxr150: {
            images: ['suzuki/gsx-r150/1.jpg', 'suzuki/gsx-r150/2.jpg', 'suzuki/gsx-r150/3.jpg', 'suzuki/gsx-r150/4.jpg', 'suzuki/gsx-r150/5.jpg', 'suzuki/gsx-r150/6.jpg'],
            info: {
                年份: '2018',
                改裝: '原廠',
                里程: '2XXXX',
                售價: '58000',
                備註: '車況正常',
                地點: '車庫'
            }
        },
        gsxr150_1: {
            images: ['suzuki/gsx-r150(1)/1.jpg', 'suzuki/gsx-r150(1)/2.jpg', 'suzuki/gsx-r150(1)/3.jpg', 'suzuki/gsx-r150(1)/4.jpg', 'suzuki/gsx-r150(1)/5.jpg'],
            info: {
                年份: '2021',
                改裝: '定風翼後視鏡 改裝拉桿 前方向燈 短牌架 黃金鏈條 行車紀錄器',
                里程: '22XXX',
                售價: '78000',
                備註: '',
                地點: '車庫'
            }
        },
        gsxr150_2: {
            images: ['suzuki/gsx-r150(2)/1.jpg', 'suzuki/gsx-r150(2)/2.jpg', 'suzuki/gsx-r150(2)/3.jpg', 'suzuki/gsx-r150(2)/4.jpg', 'suzuki/gsx-r150(2)/5.jpg'],
            info: {
                年份: '2020',
                改裝: '原廠',
                里程: '12XXX',
                售價: '78000',
                備註: '',
                地點: '車庫'
            }
        },
        gsxr150_3: {
            images: ['suzuki/gsx-r150(3)/1.jpg', 'suzuki/gsx-r150(3)/2.jpg', 'suzuki/gsx-r150(3)/3.jpg', 'suzuki/gsx-r150(3)/4.jpg', 'suzuki/gsx-r150(3)/5.jpg'],
            info: {
                年份: '2020',
                改裝: '吉村排氣管 腳踏後移（進檔快排）短牌架 拉桿',
                里程: '5XXX',
                售價: '88000',
                備註: '車況正常',
                地點: '車庫'
            }
        }
    },
    yamaha: {
        yzfr7: {
            images: ['yamaha/yzf-r7/1.jpg', 'yamaha/yzf-r7/2.jpg', 'yamaha/yzf-r7/3.jpg', 'yamaha/yzf-r7/4.jpg', 'yamaha/yzf-r7/5.jpg'],
            info: {
                年份: '2023',
                改裝: '原廠 行車紀錄器',
                里程: '1XXXX',
                售價: '278000',
                備註: '車況漂亮 一手公司車',
                地點: '車庫'
            }
        },
        yzfr6: {
            images: ['yamaha/yzf-r6/1.jpg', 'yamaha/yzf-r6/2.jpg', 'yamaha/yzf-r6/3.jpg', 'yamaha/yzf-r6/4.jpg', 'yamaha/yzf-r6/5.jpg'],
            info: {
                年份: '2018',
                改裝: 'SPARK全段排氣管 短牌架 行車記錄器 防倒球 引擎護殼全套 駐車球 胎壓藍芽偵測器 定位燈燈眉 高品質副廠殼 後照鏡飾蓋 定風翼',
                里程: '2XXXX',
                售價: '558000',
                備註: '車況極美 原廠鑰匙 原廠資料 原廠品都在 已大保養過',
                地點: '車庫'
            }
        },
        yzfr6_1: {
            images: ['yamaha/yzf-r6(1)/1.jpg', 'yamaha/yzf-r6(1)/2.jpg', 'yamaha/yzf-r6(1)/3.jpg', 'yamaha/yzf-r6(1)/4.jpg', 'yamaha/yzf-r6(1)/5.jpg'],
            info: {
                年份: '2019',
                改裝: 'HBP全段排氣管 短牌架 行車記錄器 防倒球 引擎護殼全套 駐車球',
                里程: '2XXXX',
                售價: '528000',
                備註: '車況極美 原廠鑰匙 原廠資料 原廠品都在',
                地點: '車庫'
            }
        },
        yzfr3: {
            images: ['yamaha/yzf-r3/1.jpg', 'yamaha/yzf-r3/2.jpg', 'yamaha/yzf-r3/3.jpg', 'yamaha/yzf-r3/4.jpg', 'yamaha/yzf-r3/5.jpg'],
            info: {
                年份: '2019',
                改裝: '短牌架 原廠',
                里程: '18XXX',
                售價: '98000',
                備註: '公司車',
                地點: '車庫'
            }
        },
        yzfr3_1: {
            images: ['yamaha/yzf-r3(1)/1.jpg', 'yamaha/yzf-r3(1)/2.jpg', 'yamaha/yzf-r3(1)/3.jpg', 'yamaha/yzf-r3(1)/4.jpg', 'yamaha/yzf-r3(1)/5.jpg'],
            info: {
                年份: '2021',
                改裝: '行車記錄器 YSS後避震',
                里程: '18XXX',
                售價: '168000',
                備註: '兩把鑰匙都在 原廠資料都在',
                地點: '車庫'
            }
        },
        xsr900: {
            images: ['yamaha/xsr-900/1.jpg', 'yamaha/xsr-900/2.jpg', 'yamaha/xsr-900/3.jpg', 'yamaha/xsr-900/4.jpg', 'yamaha/xsr-900/5.jpg'],
            info: {
                年份: '2020',
                改裝: '短牌架 腳踏後移 手機架 行車紀錄器 充電座 防倒架',
                里程: '2XXXX',
                售價: '288000',
                備註: '車況漂亮 前後輪胎肉多 原廠資料 鑰匙齊全',
                地點: '車庫'
            }
        },
        xsr700: {
            images: ['yamaha/xsr-700/1.jpg', 'yamaha/xsr-700/2.jpg', 'yamaha/xsr-700/3.jpg', 'yamaha/xsr-700/4.jpg', 'yamaha/xsr-700/5.jpg'],
            info: {
                年份: '2019',
                改裝: '短牌架 後流水方向燈 手機架 拉桿',
                里程: '8XXX',
                售價: '298000',
                備註: '車況極美 前後輪胎新',
                地點: '車庫'
            }
        },
        mt07: {
            images: ['yamaha/mt-07/1.jpg', 'yamaha/mt-07/2.jpg', 'yamaha/mt-07/3.jpg', 'yamaha/mt-07/4.jpg', 'yamaha/mt-07/5.jpg'],
            info: {
                年份: '2017',
                改裝: '原廠排氣管閥門 短牌架 行車記錄器 端子鏡',
                里程: '28XXX',
                售價: '158000',
                備註: '',
                地點: '車庫'
            }
        }
    }
};

// 點擊品牌按鈕時顯示車款選單
brandButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 移除所有品牌按鈕的 active 類名
        brandButtons.forEach(btn => btn.classList.remove('active'));
        // 為當前點擊的品牌按鈕添加 active 類名
        button.classList.add('active');

        const brand = button.getAttribute('data-brand');
        const models = bikeData[brand];
        if (models) {
            modelMenu.innerHTML = Object.keys(models).map(model => `
                <button class="model-btn" data-model="${model}">${model.replace(/_/g, ' ')}</button>
            `).join('');
            bikeGallery.innerHTML = ''; // 清空圖片
            infoTable.innerHTML = ''; // 清空表格
        } else {
            modelMenu.innerHTML = ''; // 清空車款選單
            bikeGallery.innerHTML = ''; // 清空圖片
            infoTable.innerHTML = ''; // 清空表格
        }
    });
});

// 點擊車款按鈕時顯示對應圖片和表格
modelMenu.addEventListener('click', (e) => {
    if (e.target.classList.contains('model-btn')) {
        // 獲取當前 active 的品牌按鈕
        const activeBrandButton = document.querySelector('.brand-btn.active');
        if (!activeBrandButton) {
            console.error('沒有找到 active 的品牌按鈕！');
            return;
        }

        const brand = activeBrandButton.getAttribute('data-brand');
        const model = e.target.getAttribute('data-model');
        const bikes = bikeData[brand][model].images;
        const info = bikeData[brand][model].info;

        // 顯示圖片
        bikeGallery.innerHTML = bikes.map(bike => `
            <img src="${bike}" alt="${model}">
        `).join('');

        // 顯示表格
        infoTable.innerHTML = `
            <table>
                <thead>
                    <tr>
                        <th>項目</th>
                        <th>資訊</th>
                    </tr>
                </thead>
                <tbody>
                    ${Object.entries(info).map(([key, value]) => `
                        <tr>
                            <td>${key}</td>
                            <td>${value}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }
});